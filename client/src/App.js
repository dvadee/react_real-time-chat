import React from 'react';
import Home from './components/home/Home';
import ChatRoom from './components/chatRoom/ChatRoom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useUsername } from './hooks';
const App = function () {
  const redirectToHome = <Redirect to="/home" />;
  const [username] = useUsername();

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => redirectToHome} />
        <Route path="/home" render={() => <Home />} />
        {username ? <Route path="/:roomId" render={() => <ChatRoom />} /> : redirectToHome}
      </Switch>
    </Router>
  );
};

export default App;
