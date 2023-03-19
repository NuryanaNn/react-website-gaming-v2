import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faCalendar, faComment} from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import Blog1 from '../assets/blog1.jpg'
import Blog2 from '../assets/blog2.jpg'
import Blog3 from '../assets/blog3.jpg'
import Blog4 from '../assets/blog4.jpg'

const Blog =()=>{
    return(
        <div className="blogs">
            <div className="title">
                <h1>Blog</h1>
                <FontAwesomeIcon icon={faGamepad} className="titleIcn"/>
            </div>

            <div className="blogContent">
            <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="card">
                            <div className="images">
                            <img src={Blog1} alt="" />
                            </div>
                            <div className="cardteks">
                            <ul className='date'>
                                <li><FontAwesomeIcon icon={faCalendar}/></li>
                                <li><h3>09 Februari 2023</h3></li>
                            </ul>
                            <h4>Resident Evil</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga repudiandae tempora est nam beatae!</p>
                            <ul className="comment">
                                <li><button>Read More</button></li>
                                <li><FontAwesomeIcon icon={faComment}/>Comments</li>
                            </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="images">
                            <img src={Blog2} alt="" />
                            </div>
                            <div className="cardteks">
                            <ul className='date'>
                                <li><FontAwesomeIcon icon={faCalendar}/></li>
                                <li><h3>09 Februari 2023</h3></li>
                            </ul>
                            <h4>Resident Evil</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga repudiandae tempora est nam beatae!</p>
                            <ul className="comment">
                                <li><button>Read More</button></li>
                                <li><FontAwesomeIcon icon={faComment}/>Comments</li>
                            </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="images">
                            <img src={Blog3} alt="" />
                            </div>
                            <div className="cardteks">
                            <ul className='date'>
                                <li><FontAwesomeIcon icon={faCalendar}/></li>
                                <li><h3>09 Februari 2023</h3></li>
                            </ul>
                            <h4>Resident Evil</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga repudiandae tempora est nam beatae!</p>
                            <ul className="comment">
                                <li><button>Read More</button></li>
                                <li><FontAwesomeIcon icon={faComment}/>Comments</li>
                            </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="images">
                            <img src={Blog4} alt="" />
                            </div>
                            <div className="cardteks">
                            <ul className='date'>
                                <li><FontAwesomeIcon icon={faCalendar}/></li>
                                <li><h3>09 Februari 2023</h3></li>
                            </ul>
                            <h4>Resident Evil</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga repudiandae tempora est nam beatae!</p>
                            <ul className="comment">
                                <li><button>Read More</button></li>
                                <li><FontAwesomeIcon icon={faComment}/>Comments</li>
                            </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    </Swiper>
            </div>
        </div>

        
    )
}

export default Blog