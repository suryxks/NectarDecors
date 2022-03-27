

const CartCard = ({ product,updateQuantityOfProduct,removeProduct}) => {
  const {imageUrl, title, price, description ,qty,_id:id}=product
  const token=JSON.parse(localStorage.getItem('token'));
    return (
      <div className="horizontal-card" key={id}>
        <img src={imageUrl} />
        <div className="product-details">
          <h3 className="heading-md">{title}</h3>
          <p className="text-md fw-light">{description}</p>
          <div className="price">
            <h4 className="heading-sm">₹{price}</h4>
            <h4 className="strike">₹599</h4>
          </div>
          <div className='product-quantity centerd-items'>
            <button onClick={()=>{
              updateQuantityOfProduct(token,id,'increment');
            }}>+</button>
            <div>{qty}</div>
            <button onClick={()=>{
              if(qty===1){
                removeProduct(token,id);
              }else{
                updateQuantityOfProduct(token,id,'decrement');
              }
            }}>-</button>
          </div>
          <div className="horizontal-card-btn">
            <button className="btn-cta">Move to Wishlist</button>
            <button className="btn-cta-outline" onClick={()=>{removeProduct(token,id)}}>Remove from Cart</button>
          </div>
        </div>
      </div>
    );
  };
  export default CartCard;