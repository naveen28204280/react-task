import './App.css';
function Navbar(){
    return (
        <div className="navbar">
            <img src={require('./Logo.png')} alt="FoodEx Logo" className='logo'/>
            <input type="text" className="search-bar" placeholder="Search dishes"/>
            <div className="nav-links">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">Dish Categories</a>
                <a href="#" className="nav-link">Shop</a>
                <a href="#" className="nav-link">More</a>
                <button className="login-button">Log In</button>
            </div>
        </div>
    );
}
export default Navbar;