import './index.css'
import {Link} from 'react-router-dom'

const Home = () => (
  <Link to="/">
    <div className="homeContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </Link>
)
export default Home
