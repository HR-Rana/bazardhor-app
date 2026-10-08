


import React from 'react'

export default async  function PriceBased() {

    const productData = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const data = await productData.json();

    console.log(data);



  return (
    <div>priceBased</div>
  )
}
