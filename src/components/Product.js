import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad} from '@fortawesome/free-solid-svg-icons'
import "swiper/css";
import Game3 from '../assets/game3.jpg'
import Game4 from '../assets/game4.jpg'
import Game11 from '../assets/game11.jpg'
import Game12 from '../assets/game12.jpg'
import Game8 from '../assets/game8.jpg'
import { Pagination } from "swiper";



const Product =()=>{
    return(
        <div className="products">
            <div className="title">
                <h1>Products Category</h1>
                <FontAwesomeIcon icon={faGamepad} className="titleIcn"/>
            </div>
            <div className="categoryproduct">
                <ul>
                    <li><button>Action</button></li>
                    <li><button>Shooter</button></li>
                    <li><button>Adventure</button></li>
                    <li><button>Role Playing</button></li>
                </ul>
            </div>

            <div className="productCategoryContent">
            <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="card">
                            <div className="images">
                            <img src={Game3} alt="" />
                            </div>
                            <div className="cardteks">
                                <h3>Shooter</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="card">
                            <div className="images">
                            <img src={Game4} alt="" />
                            </div>
                            <div className="cardteks">
                                <h3>Adventure</h3>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className="card">
                            <div className="images">
                            <img src={Game11} alt="" />
                            </div>
                            <div className="cardteks">
                                <h3>Strategi</h3>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className="card">
                            <div className="images">
                            <img src={Game12} alt="" />
                            </div>
                            <div className="cardteks">
                                <h3>Simulator</h3>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className="card">
                            <div className="images">
                            <img src={Game8} alt="" />
                            </div>
                            <div className="cardteks">
                                <h3>RPG</h3>
                            </div>
                        </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Product