import React, { useState, useEffect } from 'react';

const TestComponent = ({ status }) => {
  const [userStatus, setUserStatus] = useState('testing');

  useEffect(() => {
    setUserStatus(status);
  }, [status]);

  return <div>This is a component with status {userStatus}</div>;
};

export default TestComponent;
