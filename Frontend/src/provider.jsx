import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext();

const baseURL = import.meta.env.VITE_SERVERURI;
console.log(baseURL);
export const ApiEnd = axios.create({
  baseURL,
});

const Providers = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const checkLoginState = useCallback(async () => {
    try {
      const {
        data: { loggedIn: logged_in, user },
      } = await axios.get(`${baseURL}/api/v1/loginCheckRoute`, {
        withCredentials: true,
      });

      setLoggedIn(logged_in);
      user && setUser(user);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    checkLoginState();
  }, [checkLoginState]);

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        checkLoginState,
        user,
        setLoggedIn,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Providers;
