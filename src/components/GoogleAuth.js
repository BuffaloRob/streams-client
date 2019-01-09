import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '528593862772-3lprfhufo73p69igcp9anli4hjli32ee.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return (
      <div>
        GoogleAuth
      </div>
    );
  }
}

export default GoogleAuth;