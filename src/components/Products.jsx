import React, { useEffect } from 'react'
import { FetchProducts } from '../Store/actions/ProductAction'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
  const productsdata= useSelector((state)=> state.productsReducer.products )
  console.log(productsdata)
  const dispatch= useDispatch()
  useEffect(() => {
      dispatch(FetchProducts())
  }, [])
  
  return (
    <div className='flex flex-col p-5 gap-3' >
     
      {productsdata ? productsdata.map((item, index) => <h3 key={index}>{item.title}</h3>) : <h1>No data in products</h1>}
    </div>
  )
}

export default Products