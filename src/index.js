import React from 'react';

import ReactDOM from 'react-dom';
import Header from './components/Header';
import Left from './components/Left';
import Right from './components/Right';

// importing stylesheet
import '../src/assets/stylesheet/style.scss';
// header component
function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="hero">
          <Left />
          <Right />
        </div>
      </div>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
