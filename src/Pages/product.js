import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

function Product() {

  const [searchParams, setSearchParams] = useSearchParams();

  const inStockProducts = searchParams.get('filter') === 'active'
  // console.log(inStockProducts)
  return (
      <div>
          <h2>Product 1</h2>
          <h2>Product 2</h2>
          <h2>Product 3</h2>
          {/* <Link to='singlePage'>Single</Link> */}
      <Outlet />
      <div>
        <button onClick={()=>setSearchParams({filter:'active'})}>In stock </button>
         <button onClick={()=>setSearchParams()}>Filter reset</button>
      </div>
      { inStockProducts ? (<h2>Products in Stocks</h2>) : (<h2> All Products details </h2>)}
    </div>
  )
}

export default Product