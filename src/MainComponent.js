import React from "react";
import { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

export const MainComponent = () => {
  //   useStates variables
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  //   useEffect for getting the user
  const getUsers = async () => {
    const response = await fetch(url);
    // console.log(response);
    if (response.status >= 200 && response.status <= 299) {
      const user = await response.json();
      // console.log(user);
      const { login } = user;
      setUser(login);
      setIsLoading(false);
      setIsError(false);
    } else {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Returns
  if (isLoading == true) {
    return <h2>Loading...</h2>;
  }

  if (isError == true) {
    return <h2>No User found!</h2>;
  }

  return (
    <div>
      <h1>Hello, {user}</h1>
    </div>
  );
};
