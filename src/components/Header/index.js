// Write your code here
import './index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

const overlayStyles = {
  margin: '0',
  padding: '0',
  display: 'flex',
  flexDirection: 'column',
}
const Header = () => (
  <div className="hamburgerContainer">
    <img
      src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      alt="website logo"
    />
    <Popup
      modal
      trigger={
        <div>
          <GiHamburgerMenu className="menu" alt="Hamburger Icon" />
        </div>
      }
      overlayStyles={overlayStyles}
    >
      {close => (
        <div className="navbarContainer">
          <div className="trigger-button">
            <button type="button" onClick={() => close()}>
              Close
            </button>
          </div>
          <div>
            <p>React is a popular and widely used programming language</p>
          </div>
        </div>
      )}
    </Popup>
  </div>
)
export default Header
