import React from 'react';
import NoticeForm from './components/NoticeForm';
import ReminderBanner from './components/ReminderBanner';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <h1>📋 BatchBoardV1</h1>
      <ReminderBanner />
      <NoticeForm />
    </div>
  );
}

export default App;
