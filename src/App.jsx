// App.js

import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleCalendarIntegration from './Components/GoogleCalendarIntegration/GoogleCalendarIntegration'; // Import your Google integration component
import GmailBot from './Components/GmailBot/GmailBot'; // Import your Gmail bot component
const CLIENT_ID = "1003847576572-81o93k5rndnlq8ljcr56vqhv8k639c9h.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="App">
        <GmailBot />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
