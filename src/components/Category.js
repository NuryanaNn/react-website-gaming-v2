import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad} from '@fortawesome/free-solid-svg-icons'
import "swiper/css";
import { Pagination } from "swiper";
import Category1 from '../assets/category1.jpg'
import Category2 from '../assets/category2.jpg'
import Category3 from '../assets/category3.jpg'
import Category4 from '../assets/category4.jpg'
import Category5 from '../assets/category5.jpg'


const Category =()=>{
    return(
        <div className="categories">
            <div className="title">
                <h1>Category Feature</h1>
                <FontAwesomeIcon icon={faGamepad} className="titleIcn"/>
            </div>

            <div className="categoriesContent">
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
                            <img src={Category1} alt="" />
                            </div>
                            <div className="cardteks">
                                <h3>Shooter</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="card">
                            <div className="images">
                            <img src={Category2} alt="" />
                            </div>
                            <div className="cardteks">
                                <h3>Adventure</h3>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className="card">
                            <div className="images">
                            <img src={Category3} alt="" />
                            </div>
                            <div className="cardteks">
                                <h3>Strategi</h3>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className="card">
                            <div className="images">
                            <img src={Category4} alt="" />
                            </div>
                            <div className="cardteks">
                                <h3>Simulator</h3>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className="card">
                            <div className="images">
                            <img src={Category5} alt="" />
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

export default Category