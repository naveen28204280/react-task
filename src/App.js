import Banner from './Banner';
import FoodType from './Food-type';
import Dishes from './Dishes';
import Links from './Links';
import Navbar from './Navbar';
import './App.css';
function App() {
  return (
      <div>
      <Navbar />
      <Banner />
      <FoodType />
      <Dishes />
      <p className='Space'>  </p>
      <Links />
    </div>
  );
}
export default App;