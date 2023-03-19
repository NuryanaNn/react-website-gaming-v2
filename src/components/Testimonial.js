import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faStar} from '@fortawesome/free-solid-svg-icons'
import User from '../assets/user.jpg'



const Testimonial =()=>{
    return(
        <div className="testimonials">
            <div className="title">
                <h1>Testimonials</h1>
                <FontAwesomeIcon icon={faGamepad} className="titleIcn"/>
            </div>

            <div className="testimonialContent">
                <div className="card">
                    <div className="teks">
                        <div className="images">
                            <img src={User} alt="" />
                        </div>
                            <h3>Jessica</h3>
                            <h4>CEO - Founder</h4>
                        <ul className='ratting'>
                            <li><FontAwesomeIcon icon={faStar}/></li>
                            <li><FontAwesomeIcon icon={faStar}/></li>
                            <li><FontAwesomeIcon icon={faStar}/></li>
                            <li><FontAwesomeIcon icon={faStar}/></li>
                            <li><FontAwesomeIcon icon={faStar}/></li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum accusamus nisi necessitatibus recusandae, est alias laboriosam optio ipsa illo porro ipsam consectetur! Ipsa, ratione in voluptatem esse cupiditate commodi omnis dolor earum autem tempore, eligendi, repellendus doloremque nihil atque vel.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial