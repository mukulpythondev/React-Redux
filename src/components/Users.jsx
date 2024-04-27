import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userdelete } from '../Store/reducers/UserSlice';

function Users() { 
  const dispatch = useDispatch();
  const userdata= useSelector((state) => state.usersReducer.users)
  const deletehandler=(id)=>{
    dispatch(userdelete(id))
  }

  return (
  <>
  
    <div className='flex flex-col p-5 gap-3' >
      {userdata.map((item,index)=> (  <h2 key={index} className='flex gap-2 items-center' > {item.name} <span onClick={() => deletehandler(index) } className='text-red-500 cursor-pointer text-xl' > X </span>  </h2>  ) )}
    </div>
  </>
  );
}

export default Users;
