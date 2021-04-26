import React from 'react';
import PropTypes from 'prop-types';
import { map, chain } from 'lodash';
import { Accordion, Card, Button, Badge } from 'react-bootstrap';
import { RiRadioButtonLine } from 'react-icons/all';

const ChatRoomUsersList = function (props) {
  const users = map(props.users, (val, id) => ({ ...val, id }));

  const activeUsersCount = chain(users).filter(['online', true]).size().value();

  return (
    <div>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="info" eventKey="0">
              <span>Active Users</span>
              <Badge variant="light" className="ml-2">
                {activeUsersCount}
              </Badge>
            </Accordion.Toggle>
          </Card.Header>
          {users.map(({ id, online, username }) => (
            <Accordion.Collapse eventKey="0" key={id}>
              <Card.Body>
                <RiRadioButtonLine className={`mb-1 ${online ? 'text-success' : 'text-danger'} text-sm`} />
                {username}
              </Card.Body>
            </Accordion.Collapse>
          ))}
        </Card>
      </Accordion>
    </div>
  );
};

ChatRoomUsersList.propTypes = {
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default ChatRoomUsersList;
