import React,{useState} from 'react'; 
import  './App.css';
import Products from './Products.jsx';
import Cart from './Cart.jsx';


const PAGE_PRODUCTS ='products';
const PAGE_CART ='cart';

function  App() {
  const[cart, setCart] = useState([]);
  const[page, setPage] = useState(['PAGE_PRODUCTS']);


const addToCart =(products) => {
    let newCart = [...cart];
    let itemCart = newCart.find((item) => products.name === item.name)
   
                if(itemCart){
                  itemCart.quantity++;
                }  
                else{
                  itemCart={
                    ...products,
                    quantity : 1,
                  }
                  newCart.push(itemCart);
                }
                setCart(newCart); 
}


const getCartTotal=() => {
  return cart.reduce((sum, {quantity} ) => sum + quantity,0 );
}
const removeFromCart=(productsToRemove)=>{
    setCart(
      cart.filter(products => products !==productsToRemove)
      )
  };
  
const navigateTo=(nextPage)=>{
    setPage(nextPage);
  }

  const ClearCart=() => {
      setCart([]);
  };

  const setQuantity =(products,amount) =>{
        const  newCart=[...cart];
        newCart.find( (item) => item.name === products.name)
                      .quantity =amount;
        setCart(newCart);
  };
  
  
return (
     <div className="App">
       <header> 

         <button onClick={() => navigateTo(PAGE_CART)}>
         Go to Cart ({getCartTotal()})
         </button>

         <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
         View Products 
        </button>

      </header>
          {page === PAGE_PRODUCTS && (
          <Products addToCart={addToCart}/>)}
         
          {page ===  PAGE_CART && (
          <Cart   cart={cart} 
                  setQuantity={setQuantity}
                  removeFromCart={removeFromCart}
                  ClearCart={ClearCart}/>)}

          </div>
        
     )
 
}

export default App;
