import React, { useState } from "react";
import UserContext from '../lib/userContext';
import Cookies from 'js-cookie';
import api from '../axiosStore'

import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const token = Cookies.get('jwt')
    if (token) {
      api.get('/me').then(({ data }) => {
        setUser(data)
      })
    }
  }, [setUser])

  return <UserContext.Provider value={{user, setUser}}><Component {...pageProps} /></UserContext.Provider>
}

export default MyApp
