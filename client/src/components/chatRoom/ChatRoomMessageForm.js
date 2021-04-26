import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { Picker } from 'emoji-mart';
import { FiSend, GrEmoji } from 'react-icons/all';

const ChatRoomMessageForm = function ({ username, sendMessage }) {
  const [text, setText] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);

  const handleTextChange = (e) => setText(e.target.value);
  const handleEmojiShow = () => setShowEmoji((visible) => !visible);
  const handleEmojiSelect = (e) => setText((text) => text + e.native);

  const handleSendMessage = (e) => {
    e.preventDefault();

    const trimmed = text.trim();

    if (trimmed) {
      sendMessage({ messageText: text, senderName: username });
      setText('');
    }
  };

  return (
    <div className="d-flex flex-column">
      <Form onSubmit={handleSendMessage}>
        <Form.Group className="d-flex">
          <Button variant="primary" onClick={handleEmojiShow}>
            <GrEmoji />
          </Button>
          <Form.Control value={text} onChange={handleTextChange} className="mx-2" />
          <Button variant="success" onClick={handleSendMessage}>
            <FiSend />
          </Button>
        </Form.Group>
      </Form>
      {showEmoji && <Picker style={{ width: '100%' }} onSelect={handleEmojiSelect} emojiSize={20} />}
    </div>
  );
};

ChatRoomMessageForm.propTypes = {
  username: PropTypes.string,
  sendMessage: PropTypes.func,
};

export default ChatRoomMessageForm;
