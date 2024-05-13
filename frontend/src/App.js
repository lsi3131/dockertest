// src/App.js
import React, {useState} from 'react';
import {connect} from 'react-redux'
import {sendMessage} from "./actions/actions";

const App = ({messages, sendMessage}) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if(input.trim() !== '') {
            sendMessage(input);
            setInput('');
        }
    }

    return (
        <>
            <div>
                <h1>Chat App</h1>
                <div>
                    {messages.map((message, index) => (
                        <div key={index}>{message}</div>
                    ))}
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
            {/*<HelloRedux/>*/}
        </>
    );
}

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = {
  sendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);