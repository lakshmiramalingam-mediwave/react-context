import React, { createContext, useState } from "react";

const ThemeContext = createContext(undefined);
const ThemeDispatchContext = createContext(undefined);
const UserContext = createContext(undefined);
const setUserContext = createContext(undefined);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    value: "light",
    browser: "firefox",
  });

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "keerthi",
    image: "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg",
  });

  return (
    <UserContext.Provider value={user}>
      <setUserContext.Provider value={setUser}>
        {children}
      </setUserContext.Provider>
    </UserContext.Provider>
  );
}

export {
  ThemeProvider,
  UserProvider,
  UserContext,
  setUserContext,
  ThemeContext,
  ThemeDispatchContext,
};
