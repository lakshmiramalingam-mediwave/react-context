import { useContext } from "react";
import {
  // function that change the state 
  ThemeDispatchContext,
  //  state 
  ThemeContext,
  UserContext,
} from "../contexts/DataContext";
import { Avatar, Tooltip } from "@mui/material";

const Nav = () => {
  const themeDispatch = useContext(ThemeDispatchContext);
  const themeContext = useContext(ThemeContext);
  const userContext = useContext(UserContext);

  console.log(themeDispatch);

  function handleClick(mode) {
    console.log({ value: mode });
    themeDispatch({ value: mode });
  }

  return (
    <nav className="container">
      <ul>
        <li>
          <strong>Keerthi</strong>
        </li>
      </ul>
      <ul>
        <li>
          <Tooltip title={userContext.name}>
            <Avatar src={userContext.image} sx={{ width: 62, height: 62 }} />
          </Tooltip>
        </li> 
        <li>
          {themeContext.value === "light" ? (
            <button onClick={() => handleClick("dark")}>🌙</button>
          ) : (
            <button onClick={() => handleClick("light")}>🌞</button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
