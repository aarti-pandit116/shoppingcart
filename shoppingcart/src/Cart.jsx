//Cart.js

import React  from 'react';

const Cart = ({cart,ClearCart,removeFromCart,setQuantity}) => {

const TotalSum = (cost) =>{
    return cart.reduce((sum , {cost , quantity}) => sum + cost * quantity, 0)
};


return (<>
    <h1>Cart</h1>
    {cart.length > 0 && (
    <button onClick={ClearCart}>Clear Cart</button>)}
    <div  className="products">
            
       {cart.map((products,idx)=> (
         <div  className="product" key={idx}>
            <h3><b>{products.name}</b></h3>
            <h4><b>R.S.  {products.cost}</b></h4>

           
            <input class="w3-input w3-border w3-round-large" type="text"
                  value={products.quantity}
                  onChange={(e) =>
                            setQuantity(
                            products,e.target.value
                            
                            // parseInt(e.target.value) 
                            )
                      }>
                    
            </input>

            <img src={products.image} alt={products.name}/>
            <button onClick={() => removeFromCart(products)}>
            Remove
            </button>
         </div>
  
       ))}
      
      </div>
  


       <div><b><h1>   Total Cost: R.S.   {TotalSum()}   </h1></b> </div>
  </>

)
}

export default Cart;

