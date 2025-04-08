import React, { createContext, useState } from 'react';

export const UserContextData = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    fullName: {
      firstName: '',
      lastName: '',
    },
  });

  return (
    <UserContextData.Provider value={[user, setUser]}>
      {children}
    </UserContextData.Provider>
  );
};

export default UserContext;
