import Product1 from '../assets/product1.jpg'
import Product2 from '../assets/product2.jpg'


const Shop =()=>{
    return(
        <div className="shop">
            <div className="contentShop">
                <div className="card">
                    <div className="images">
                        <img src={Product1} alt="" />
                    </div>
                    <div className="teks">
                        <h3>Real Gaming Take A Stages</h3>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="card">
                <div className="images">
                        <img src={Product2} alt="" />
                    </div>
                    <div className="teks">
                        <h3>Real Gaming Take A Stages</h3>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop