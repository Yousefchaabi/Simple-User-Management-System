import React, { useContext, useRef } from 'react'
import { UsersContext } from './UsersApp';

function UsersAdd() {

    const context = useContext(UsersContext)
    const fullName = useRef(null);
    const country = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name:fullName.current.value,
            country:country.current.value
        })

        context.actions.AddUser({
            payload:{
                fullName:fullName.current.value,
                country:country.current.value,
                id: context.lastId + 1
            }
        })

        fullName.current.value = '';
        country.current.value='';
    }
  return (
    <>
    <div className='container'>
    <h1>Add user</h1>
    <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
            <label htmlFor="currentId" className="col-sm-2 col-form-label">Current id</label>
            <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" id="currentId" value={context.lastId + 1}/>
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="fullName" className="col-sm-2 col-form-label">Full Name</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="fullName" name="fullName" ref={fullName}/>
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
            <div className="col-sm-10">
                <select id='country' name='country' className="form-select" ref={country}>
                    <option value=''>Select your country</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Tunisia">Tunisia</option>
                </select>
            </div>
        </div>
        <div className="d-grid w-25  mx-auto gap-2">
            <button className="btn btn-primary" type="submit">ADD</button>
        </div>
    </form>

    </div>
    
    </>
  )
}

export default UsersAdd