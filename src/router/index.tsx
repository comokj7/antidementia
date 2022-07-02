import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Questions } from '../pages/Questions';
import { Title } from '../pages/Title';

export const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/questions">
          <Questions />
        </Route>
        <Route path="/title">
          <Title />
        </Route>
        <Route path="/">
          <Redirect to="/title" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
