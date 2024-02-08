import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null)

export const ThemeContext = createContext(null);

const baseURL = "http://127.0.0.1:49088/api/v1";

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() =>
      localStorage.getItem("authTokens")
        ? JSON.parse(localStorage.getItem("authTokens"))
        : null
    );
    const [user, setUser] = useState(() =>
      localStorage.getItem("authTokens")
        ? jwt_decode(localStorage.getItem("authTokens"))
        : null
    );
    const [loading, setLoading] = useState(true);
  
    const navigate = useNavigate();
  
    const loginUser = async (email, password) => {
      const response = await fetch(`${baseURL}/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      const data = await response.json();
  
      if (response.status === 200) {
          setAuthTokens(data);
          setUser(jwt_decode(data.access));
          localStorage.setItem("authTokens", JSON.stringify(data));
          // navigate("/");
    
      } else {
          alert("Something went wrong!");
      }
    };
    
    const registerUser = async (username, email, password, password2) => {
      const response = await fetch(`${baseURL}/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password2
        })
      });
      if (response.status === 201) {
        loginUser(email, password)
      } else {
        alert("Something went wrong!");
      }
    };
  
    const logoutUser = () => {
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem("authTokens");
      navigate("/");
    };
  
    const contextData = {
      user,
      setUser,
      authTokens,
      setAuthTokens,
      registerUser,
      loginUser,
      logoutUser
    };
  
    useEffect(() => {
      if (authTokens) {
        setUser(jwt_decode(authTokens.access));
      }
      setLoading(false);
    }, [authTokens, loading]);
  
    return (
      <AuthContext.Provider value={contextData}>
        {loading ? null : children}
      </AuthContext.Provider>
    );
  };