import React, {useState, createContext} from 'react'

export const UserContext = createContext({});

function UserContextProvider({children}) {
    const [userInfo,setUserInfo] = useState({});
  return (
    <div>
      <createContext.provider value={{userInfo,setUserInfo}}>
        {children}
      </createContext.provider>
    </div>
  )
}

export default UserContextProvider
