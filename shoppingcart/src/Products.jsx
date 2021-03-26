import React,{useState} from 'react';
import item1 from '../src/images/item1.jpg';
import item2 from '../src/images/item2.jpg';
import item3 from '../src/images/item3.jpg';

const HOME_AND_GARDEN='home_and_garden';
const UTILITY= 'utility';

function  Products ({addToCart}) {
    const [products]=useState([
    {
      category:UTILITY,
      name:'Shoes',
      cost:500.00,
      image:item1
    },
    {
      category:HOME_AND_GARDEN,
      name:'Shoes new',
      cost: 900.00,
      image:item2
    },

    {
      category:HOME_AND_GARDEN,
      name:'Shoes new1',
      cost:990.00,
      image:item3
    },
     
     
]);
const[category,setCategory] = useState(HOME_AND_GARDEN);

const getProductInCategory =() => {
    return products.filter(
      (products) => products.category === category
    );
};

return(
  <>
    <h1>Products</h1>
      <h5><b>Select a Category</b></h5>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value={HOME_AND_GARDEN}>{HOME_AND_GARDEN}</option>
          <option value={UTILITY}>{UTILITY}</option>
        </select>   

      <div  className="products">
      {getProductInCategory().map((products,idx)=> (
        <div  className="product" key={idx}>
           <h3><b>{products.name}</b></h3>
           <h4><b>R.S. {products.cost}</b></h4>
           <img src={products.image} alt={products.name}/>
           <button onClick={() => addToCart(products)}>
            Add to cart</button>
        </div>

      ))}
     
     </div>
</>
) 
}

export default Products;


