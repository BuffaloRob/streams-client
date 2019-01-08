import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      Page One
      <a href="/pagetwo">Nav to 2</a>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page Two
      <a href="/">Nav to 1</a>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={PageOne} />
          <Route path='/pagetwo' component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;