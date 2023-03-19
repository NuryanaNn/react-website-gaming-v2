import Logo from '../assets/logo.png'



const Footer =()=>{
    return(
        <div className="footers">
            <div className="footer1 first">
                <img src={Logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iure esse vero. Velit, eius ex.</p>
            </div>
            <div className="footer1 ">
                <ul>
                    <li><h3>My Account</h3></li>
                    <li><a href="">My Account</a></li>
                    <li><a href="">Order History</a></li>
                    <li><a href="">Wishlist</a></li>
                    <li><a href="">Newslatter</a></li>
                </ul>
            </div>
            <div className="footer1">
                <ul>
                    <li><h3>Information</h3></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Delivery Information</a></li>
                    <li><a href="">Privacy Police</a></li>
                    <li><a href="">Terms and Condition</a></li>
                </ul>
            </div>
            <div className="footer1">
            <ul>
                    <li><h3>Extras</h3></li>
                    <li><a href="">Brand</a></li>
                    <li><a href="">Gift Certificate</a></li>
                    <li><a href="">Affilate</a></li>
                    <li><a href="">Special</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer