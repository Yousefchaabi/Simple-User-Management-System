import React from 'react'
import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom'
import UsersTable from './UsersTable'
import UsersAdd from './UsersAdd'
import UserEdit from './UserEdit'
import UsersDelete from './UsersDelete'
function UsersLayout() {
  return (
    <>
        <BrowserRouter>
        <nav className='navbar-expand-lg  navbar-light bg-light'>
            <ul className="navbar-nav gap-5 p-3">
                <li className="nav-item bg-success rounded-pill text-white p-1 fs-6">
                    <Link to={'/'} className='nav-link'>Users List</Link>
                </li>
                <li className="nav-item bg-success rounded-pill text-white p-1 fs-6">
                    <Link to={'/user/create'} className='nav-link'>Add User</Link>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route index element={<UsersTable/>}/>
            <Route path={'/user/create'} element={<UsersAdd/>}/>
            <Route path={'/user/:id/edit'} element={<UserEdit/>}/>
            <Route path={'/user/:id/delete'} element={<UsersDelete/>}/>
        </Routes>
    </BrowserRouter>

    <Outlet/>
    </>
  )
}

export default UsersLayout