import React from 'react';
import Header from './Header';
import Main from './Main';

let tmp = {
  __html: '<h2>Welcome to my....</h2>'
}

const App = () => {
  return (
    <div className='container'>
      <Header />
      <div dangerouslySetInnerHTML={tmp} />
      <Main />
    </div>
  );
};

export default App;
