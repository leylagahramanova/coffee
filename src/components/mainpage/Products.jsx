import React from 'react'
// import beans from "./img/beans.png";
// import cup from "./img/cup.jfif";
// import process from "./img/process.png";
// import ground from "./img/ground.png";
// import arrow from "./img/arrow.png";
import stimy from "../../img/stimy.png";
import americano from "../../img/americano.png";
import indian from "../../img/indian.png";
import bangladesh from "../../img/bangladesh.png";
import arvica from "../../img/arvica.png";
function Prod() {
  return (
    <div className='popular'>
        <h2>OUR POPULAR<br></br>PRODUCTS</h2>
        <div className='products'>
          <div className='product'>
            <div className='square'>
              <img src={stimy} />
            </div>
            TESTY COFFEE STIMY
          </div>
          <div className='product'>
            <div className='square'>
              <img src={americano} />
            </div>
            AMERICANO PURE GRADES
          </div>
          <div className='product'>
            <div className='square'>
              <img src={indian} />
            </div>
            INDIAN ROASTING
          </div>
          <div className='product'>
            <div className='square'>
              <img src={bangladesh} />
            </div>
            BANGLADESHI ORGANIC
          </div>
          <div className='product'>
            <div className='square'>
              <img src={arvica} />
            </div>
            ARVICA COFFEE PACK
          </div>
        </div>

        <div className="all-products">
          <button><a>See All Products</a></button>
        </div>
      </div>
  )
}

export default Prod