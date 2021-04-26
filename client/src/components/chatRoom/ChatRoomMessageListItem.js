import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import { ListGroup, Card, Button } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/all';

const ChatRoomMessageListItem = function ({ msg, removeMessage }) {
  const handleRemoveMessage = (id) => removeMessage(id);

  const { messageId, messageText, senderName, createdAt, isCurrentUserMsg } = msg;

  return (
    <ListGroup.Item className={`d-flex ${isCurrentUserMsg ? 'justify-content-end' : ''}`}>
      <Card bg={isCurrentUserMsg ? 'primary' : 'secondary'} text="light" style={{ width: '55%' }}>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <Card.Text as={TimeAgo} date={createdAt} className="small" />
          <Card.Text>{senderName}</Card.Text>
        </Card.Header>
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Card.Text>{messageText}</Card.Text>
          {isCurrentUserMsg && (
            <Button variant="none" className="text-warning" onClick={() => handleRemoveMessage(messageId)}>
              <AiOutlineDelete />
            </Button>
          )}
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
};

ChatRoomMessageListItem.propTypes = {
  msg: PropTypes.object,
  removeMessage: PropTypes.func,
};

export default ChatRoomMessageListItem;
