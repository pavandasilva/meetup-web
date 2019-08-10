import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Dashboard from '~/pages/Dashboard';
import Detail from '~/pages/Detail';
import Profile from '~/pages/Profile';
import MeetupController from '~/pages/MeetupController';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/detail" component={Detail} />
        <Route path="/profile" component={Profile} />
        <Route path="/meetup" component={MeetupController} />
      </Switch>
    </BrowserRouter>
  );
}
