
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faShoppingCart, faHeart, faSignal, faEye } from '@fortawesome/free-solid-svg-icons'
import "swiper/css";
import Game1 from '../assets/game1.jpg'
import Game2 from '../assets/game2.jpg'
import Game3 from '../assets/game3.jpg'
import Game4 from '../assets/game4.jpg'
import Game5 from '../assets/game5.jpg'
import Game6 from '../assets/game6.jpg'
import Game7 from '../assets/game7.jpg'
import Game8 from '../assets/game8.jpg'



const Top =()=>{
    return(
        <div className="product">
            <div className="title">
                <h1>Top Products</h1>
                <FontAwesomeIcon icon={faGamepad} className="titleIcn"/>
            </div>
            <div className="categoryproduct">
                <ul>
                    <li><button>Latest</button></li>
                    <li><button>Featured</button></li>
                    <li><button>Bestseller</button></li>
                    <li><button>Specials</button></li>
                </ul>
            </div>

            <div className="categoryContent">
            <Swiper className="mySwiper">
            <SwiperSlide>
                <div className="containerCard">
                    <div className="card">
                        <div className="images">
                            <img src={Game1} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>International Cricket</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src={Game2} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>Fifa 18</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src={Game3} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>Watch Dog</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src={Game4} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>Assasin Creed 6</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src={Game5} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>International Cricket Tournament</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src={Game6} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>Mad Runner Wild</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src={Game7} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>Call Of Duty 2</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src={Game8} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>Grand Turismo</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="containerCard">
                    <div className="card">
                        <div className="images">
                            <img src={Game1} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>International Cricket</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src={Game2} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>Fifa 18</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src={Game3} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>Watch Dog</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src={Game4} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>Assasin Creed 6</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src={Game5} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>International Cricket Tournament</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src={Game6} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>Mad Runner Wild</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src={Game7} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>Call Of Duty 2</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="images">
                            <img src={Game8} alt="" />
                            <ul className="popIcon">
                                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                                <li><FontAwesomeIcon icon={faHeart} /></li>
                                <li><FontAwesomeIcon icon={faSignal} /></li>
                                <li><FontAwesomeIcon icon={faEye} /></li>
                            </ul>
                        </div>
                        <div className="cardteks">
                            <h3>Grand Turismo</h3>
                            <ul className="price">
                                <li>$110</li>
                                <li>$90</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </SwiperSlide>
      </Swiper>
            </div>
        </div>
    )
}


export default Top