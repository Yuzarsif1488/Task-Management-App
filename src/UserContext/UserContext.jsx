import { createContext, useState } from "react";

const UserContext = createContext({
  user: {},
  isSignedIn: false,
  setCurrentUser: (user) => {},
});

export const UserProvider = (props) => {
  const [user, setUser] = useState({
    id: "",
    password: "",
  });
  const [isSignedIn, setSignedIn] = useState(false);
  const setCurrentUser = (user) => {};
  setUser(user);
  if (user.id) {
    setSignedIn(true);
  } else {
    setSignedIn(false);
  }

  return (
    <UserContext.Provider value={{ user, isSignedIn, setCurrentUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContext;
