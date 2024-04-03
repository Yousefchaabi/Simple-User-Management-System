import React, { createContext, useState } from 'react'
import UsersLayout from './UsersLayout';

// create a state manager using context
export const UsersContext = createContext({
  users: [], // initial value of the state
  lastId: 0, // keep track of the last user id added to simulate an auto-incrementing ID
  AddUser: () => {}, // function to handle adding new users
  updateUser: () =>  {}, // function to handle updating existing users
  deleteUser:  () => {} // function to handle deleting
});

function UsersApp() {
    const [users, setUsers] = useState([
      {id: 1, fullName: 'Jamaoui mouad', country: 'Morocco'},
      {id: 2, fullName: 'Kahlaoui aymane', country: 'Tunisia'}
    ]);
    const [lastId, setLastId] = useState(0);

     const AddUser = (data) => {
        setUsers(prevState =>  [...prevState, data.payload]);
        setLastId(prevState => prevState + 1)
        window.history.back();
      }

    const updateUser = (data) => {
      const {id, ...rest} = data.payload;
      setUsers(prevState => prevState.map((user)=> user.id === id ? {...user, ...rest} : user))
      window.history.back();
    }

    const deleteUser = (data)  => {
       setUsers(prevState => prevState.filter(user=> user.id !== parseInt(data.payload.id)));
        window.history.back();
      }
  
  return (
    <>
        <UsersContext.Provider value={{
          users: users,
          lastId: lastId,
          actions: {AddUser, updateUser, deleteUser},
        }}>
          <UsersLayout/>
        </UsersContext.Provider>
    </>
  )
}

export default UsersApp