import React from 'react';
import { useState, useRef } from 'react';
import { useLocalStorage } from '../../hooks';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './Home.scss';

const Home = function () {
  const [username, setUsername] = useLocalStorage('username', '');
  const [roomId, setRoomId] = useState('free');
  const linkRef = useRef(null);

  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleRoomIdChange = (e) => setRoomId(e.target.value);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    linkRef.current.click();
  };

  const trimmedUserName = username.trim();
  const isUserNameValid = trimmedUserName.length > 0 && !!trimmedUserName.match(/[a-zA-Z0-9]/gi);

  return (
    <div className="vw-100 vh-100 overflow-hidden d-flex justify-content-center align-items-center">
      <Form className="home-form" onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control value={username} onChange={handleChangeUsername} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Room:</Form.Label>
          <Form.Control as="select" value={roomId} onChange={handleRoomIdChange}>
            <option value="free">Free</option>
            <option value="job" disabled>
              Job
            </option>
          </Form.Control>
        </Form.Group>
        <Button
          variant="success"
          as={Link}
          to={`/${roomId}`}
          ref={linkRef}
          block
          className={!isUserNameValid ? 'disabled' : ''}
        >
          Start chatting
        </Button>
      </Form>
    </div>
  );
};

export default Home;
