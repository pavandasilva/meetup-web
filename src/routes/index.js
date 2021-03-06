import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Dashboard from '~/pages/Dashboard';
import Detail from '~/pages/Detail';
import Profile from '~/pages/Profile';
import MeetupController from '~/pages/MeetupController';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/detail" component={Detail} />
      <Route path="/profile" component={Profile} />
      <Route path="/meetup" component={MeetupController} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
