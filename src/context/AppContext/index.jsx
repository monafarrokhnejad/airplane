import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CURRENT_USER } from "../../utilities/storage";
import { getStorage } from "../../helper/appManager";
import Loader from "~/layouts/loader/Loader";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null represents the initial loading state

  useEffect(() => {
    // Simulate an asynchronous check for authentication
    const checkAuthStatus = () => {
      const token = getStorage(CURRENT_USER)?.token;
      setIsAuthenticated(!!token); // Update the authentication status based on the presence of a token
    };

    checkAuthStatus();
  }, []);

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {isAuthenticated === null ? <Loader /> : children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};
