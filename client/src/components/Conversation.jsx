import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import chat_icon from '../assets/chat_icon.png';

const useStyles = makeStyles((theme) => ({
    conversation: {
        display: 'flex',
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        padding: '10px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#ffffff'
        }
    },

    conversationImg: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '20px'
    },

    conversationName: {
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
    },

    separator: {
        border: 'none',
        borderBottom: '1px solid black',
        margin: '0 10px'
    }
}));

const Conversation = (conversation) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.conversation}>
                <img className={classes.conversationImg} src={chat_icon} alt="Conversation Icon" />
                <span className={classes.conversationName}>{conversation.conversation.conversationName}</span>
            </div>
            <hr className={classes.separator} />
        </>
    );
};

export default Conversation;
