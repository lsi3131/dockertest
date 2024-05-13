// components/Chat.js
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sendMessage} from '../actions/chatActions';

const Chat = () => {
    const dispatch = useDispatch();
    const chatState = useSelector(state => state.chat);
    const messages = chatState ? chatState.messages : [];
    const [input, setInput] = useState('');

    const handleMessageSend = () => {
        console.log(`dispatch input=${input}`)
        dispatch(sendMessage(input));
        setInput('');
    };

    return (
        <div>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleMessageSend}>Send</button>
        </div>
    );
};

export default Chat;
