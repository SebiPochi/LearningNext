import React, { useState, useEffect } from 'react'

const Home = () => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    window.fetch('api/avo')
    .then((res) => res.json()
    .then(({data, length}) => setProductList(data))
    )
  }, [])
  

  return (
    <>
      <div className='columns-2 md'>
          {
            productList.map((product) => 
              <div className='p-4 h-40 border-4 '>
                <p>{product.name}</p>
                <p>{product.id}</p>
                <p>${product.price}</p>
              </div>
            )
          }
      </div>
    </>
  )
}

export default Home