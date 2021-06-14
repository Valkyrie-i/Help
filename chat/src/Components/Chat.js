import React, { useContext, useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '../index';
import {Avatar,TextField,Button, Container, Grid } from '@material-ui/core';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import Loader from './Loader';
import firebase from 'firebase';



const Chat =()=>{
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );

    const sendMessage =async()=>{
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt:firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if(loading){
        return <Loader/>
    }

    return(
        <Container>
            <Grid style={{height: window.innerHeight - 50, marginTop:15}}
            justify={"center"}>
                <div style={{width:'80%', height:'60vh', border:'1px solid black', overflowY:'auto'}}>
                    {messages.map(message=>
                        <div>
                            <Grid container>
                                <Avatar src={message.photoURL}/>
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>
                                {message.text}
                            </div>
                        </div>
                        )}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{width:'80%'}}
                    >
                        <TextField 
                        onChange={e=>setValue(e.target.value)}
                        value = {value}
                        fullWidth
                        rowsMax={2}
                        variant={"outlined"}/>
                        <Button
                        onClick={sendMessage}
                        variant={"outlined"}
                        >Send</Button>

                    </Grid>
            </Grid>
        </Container>
    );
}

export default Chat;