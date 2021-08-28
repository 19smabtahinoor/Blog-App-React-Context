import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CreateBlog, Home, Navbar } from './components/index';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create-blog" component={CreateBlog} />
      </Switch>
    </>
  )
}

export default App
