import React from 'react'
import { connect } from 'react-redux'
import { increase_quantity,decrease_quantity,updateamount,addtocart,removecart } from './action'


function Home({products,addtocart,removecart}) {
  console.log("products",products);
  return (
    
<div className='row  '>
  
  <h1 className='text-center'>Cart</h1>
  {products.map(product=>(
     <div className="card p-3 mb-2 bg-dark-subtle text-emphasis-dark" key={product.id} style={{width:20+"rem"}}>
     <img src={product.thumbnail} className="card-img-top" alt="..."/> 
       <div className="card-body p-3 mb-2 bg-dark-subtle text-emphasis-dark">
         <h5 className="card-title">{product.title}</h5>
         <p className="card-text">{product.description}</p>
       </div>
       <ul className="list-group list-group-flush p-3 mb-2 bg-dark-subtle text-emphasis-dark">
         <li className="list-group-item p-3 mb-2 bg-dark-subtle text-emphasis-dark">Price:{product.price}</li>
         <li className="list-group-item p-3 mb-2 bg-dark-subtle text-emphasis-dark">Rating:{product.rating}</li>
         <li className="list-group-item p-3 mb-2 bg-dark-subtle text-emphasis-dark">TotalAmount:${product.amount}</li>
       </ul>
       <div className="card-body p-3 mb-2 bg-dark-subtle text-emphasis-dark">
       <button type="button" className="btn btn-outline-primary" onClick={() => addtocart(product.id)}>+</button>
       {product.quantity}
       <button type="button" className="btn btn-outline-primary" onClick={() => removecart (product.id)}>-</button>
       
       
      
         
       
       </div>
       
</div>
  ))}
</div>

  )
}
const mapStateToProps = (state)=>({
  
products:state.products

});
const mapDispatchToProps= {      addtocart,removecart,updateamount
}
    
  
  


export default connect(mapStateToProps,mapDispatchToProps)(Home);