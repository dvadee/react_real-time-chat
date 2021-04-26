import React from 'react';
import { useParams } from 'react-router-dom';
import { upperFirst } from 'lodash/string';
import { useLocalStorage, useChat } from '../../hooks';
import ChatRoomMessageForm from './ChatRoomMessageForm';
import ChatRoomMessageList from './ChatRoomMessageList';
import ChatRoomUsersList from './ChatRoomUsersList';
import { Container } from 'react-bootstrap';

const ChatRoom = function () {
  const { roomId } = useParams();
  const [username] = useLocalStorage('username');
  const { users, messages, sendMessage, removeMessage } = useChat(roomId);

  return (
    <Container className="vh-100 d-flex flex-column py-2">
      <h2 className="text-center">Room: {upperFirst(roomId)}</h2>
      <div className="mb-2">
        <ChatRoomUsersList users={users} />
      </div>
      <div className="d-flex flex-fill border mb-2">
        <ChatRoomMessageList messages={messages} removeMessage={removeMessage} />
      </div>
      <ChatRoomMessageForm username={username} sendMessage={sendMessage} />
    </Container>
  );
};

export default ChatRoom;
