import './App.css';

function Links() {
    return (
        <div className="links">
            <div className="content"><h3>FoodEx</h3><p>We are dedicated to delivering the best food from top restaurants straight to your doorstep, 24/7. With easy ordering and fast delivery, we're here to satisfy your cravings anytime.</p></div>
            <div className="content">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Dish Categories</a></li>
                    <li><a href="#">Special Offers</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Tips & Tricks (Blog)</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="content">
                <h3>Need Help?</h3>
                <ul>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Customer Support</a></li>
                    <li><a href="#">Order Tracking</a></li>
                    <li><a href="#">Delivery Information</a></li>
                    <li><a href="#">Payment Methods</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="content">
                <h3>Stay Connected</h3>
                <div className="social-links">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    );
}
export default Links;