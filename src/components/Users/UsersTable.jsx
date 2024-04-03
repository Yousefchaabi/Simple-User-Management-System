import React, { useContext } from 'react'
import { UsersContext } from './UsersApp'
import { Link } from 'react-router-dom';

function UsersTable({ users }) {

    const context = useContext(UsersContext);


  return (
    <div className='container p-4'>
        <h1>Users</h1>
        <table className='table table-striped table-inverse table-responsive'>
            <thead className='thead-inverse'>
                <tr>
                    <th>#ID</th>
                    <th>Full Name</th>
                    <th>Country</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    (context.users?.length > 0) ? context.users.map((user, key) => <tr key={key}>
                        <td>{user.id}</td>
                        <td>{user.fullName}</td>
                        <td>{user.country}</td>
                        <td>
                            <Link to={`/user/${user.id}/edit`} className='btn btn-warning mx-2'>Edit</Link>
                            <Link to={`/user/${user.id}/delete`} className='btn btn-danger'>Delete</Link>
                        </td>
                </tr>) :  <tr><td colSpan={3} align={"center"}>No data available.</td></tr> 
                }
            </tbody>
        </table>
    </div>
  )
}

export default UsersTable