import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

function Product() {

  const [searchParams, setSearchParams]=useSearchParams()
  return (
      <div>
          <h2>Product 1</h2>
          <h2>Product 2</h2>
          <h2>Product 3</h2>
          {/* <Link to='singlePage'>Single</Link> */}
      <Outlet />
      <div>
        <button>In stock </button>
         <button>Filter reset</button>
      </div>
    </div>
  )
}

export default Product