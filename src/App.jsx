import { useState } from 'react'
import './App.css'
function App() {
  const [cartcount, setcartcount] = useState(0);
  const [isincart, setisincart] = useState(false);
 const handleAddtoCart = () => {
  setcartcount(prevCount => prevCount + 1);
  setisincart(prevValue => !prevValue);
 };
 const handleremovefromCart = () => {
  setcartcount(prevCount => Math.max(prevCount - 1, 0));
 };

  return (
    <>
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button type="button" className="btn btn-outline-dark">Cart 
      <span className='badge bg-dark text-white ms-1 rounded-pill'>{cartcount}</span>
    </button>
  </div>
</nav>
<div class="card bg-dark text-white">
  <div class="card-img-overlay">
    <h3 class="card-title">Shop in Style</h3>
  </div>
</div>
<br/>
<br/>
    <div style={{display: 'flex'}}>
  <div className="card" style={{width: '18rem'}}>
  <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/l/w/f/xxl-morpich01-xxl-dh-sales-original-imagpcsgasfkahmz.jpeg?q=90&crop=false" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Fancy Product</h5>
    <p className="card-text">$40.00 - $80.00</p>
    <button type="button" style={{marginTop: '65px'}} class="btn btn-outline-dark" onClick={isincart ? handleremovefromCart : handleAddtoCart}>{isincart ? 'Remove from Cart' : 'Add to Cart'}</button>
  </div>
</div>
<div className="card" style={{width: '18rem'}}>
  <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23936328/2023/7/18/d034cb7a-016f-4a9d-803c-e02a996e374c1689679191147-Antheaa-Women-Dresses-971689679190741-1.jpg" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Special item</h5>
    <p className="card-text">⭐⭐⭐⭐⭐</p>
    <p className="card-text">$20.00 but $18.00 only</p>
    <button type="button" style={{marginBottom: '30px'}} class="btn btn-outline-dark" onClick={isincart ? handleremovefromCart : handleAddtoCart}>{isincart ? 'Remove from Cart' : 'Add to Cart'}</button>
  </div>
</div>
<div className="card" style={{width: '18rem'}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08OcPvfZF1JDe0Q6IRaJ2FByiqybAe75yDw&s" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Sale item</h5>
    <p className="card-text">$50.00 but $25.00 only</p>
    <button type="button" style={{marginTop: '113px'}} class="btn btn-outline-dark" onClick={isincart ? handleremovefromCart : handleAddtoCart}>{isincart ? 'Remove from Cart' : 'Add to Cart'}</button>
  </div>
</div>
<div className="card" style={{width: '18rem'}}>
  <img src="https://nolabels.in/cdn/shop/collections/casual_dresses_for_women_at_Nolabels.in.webp?v=1695987723" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Popular item</h5>
    <p className="card-text">⭐⭐⭐⭐⭐</p>
    <p className="card-text">$40.00</p>
    <button type="button" class="btn btn-outline-dark" onClick={isincart ? handleremovefromCart : handleAddtoCart}>{isincart ? 'Remove from Cart' : 'Add to Cart'}</button>
  </div>
  </div>
</div>
    </>
  )
}

export default App
