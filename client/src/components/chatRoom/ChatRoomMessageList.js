import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import ChatRoomMessageListItem from './ChatRoomMessageListItem';
import './ChatRoomMessageList.scss';

const ChatRoomMessageList = function ({ messages, removeMessage }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <ListGroup variant="flush" className="chat-room-messages-list w-100 h-100">
        {messages.map((msg) => (
          <ChatRoomMessageListItem key={msg.messageId} msg={msg} removeMessage={removeMessage} />
        ))}
        <span ref={messagesEndRef} />
      </ListGroup>
    </>
  );
};

ChatRoomMessageList.propTypes = {
  messages: PropTypes.array,
  removeMessage: PropTypes.func,
};

export default ChatRoomMessageList;
