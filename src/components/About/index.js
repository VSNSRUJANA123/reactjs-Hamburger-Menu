// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const About = () => (
  <Link to="/about">
    <div className="homeContainers">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="home"
      />
    </div>
  </Link>
)
export default About
