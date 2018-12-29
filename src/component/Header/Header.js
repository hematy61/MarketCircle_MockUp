import React from "react";
import { 
  header,
  header_content,
  header_brand,
  header_button,
  header_nav,
  hamburger_icon,
  close,
  header_nav_isOpen,
  activeLink,
  nav_hamburger_container
 } from '../../styles/Header/Header.scss';
 import { Link } from 'react-scroll';


class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isClosed: true
    }
  }

  handleClick = () => {
    if (this.state.isClosed) {
      this.setState(() => ({ isClosed: false}))
    } else{
      this.setState( () => ({ isClosed: true}))
    }
  };
  
  render(){
    return(
      <header className={header}>
        <div className={header_content}> 
          <div className={header_brand}>
          </div>
          <div className={nav_hamburger_container}>
            <div
              className={this.state.isClosed ? hamburger_icon : `${hamburger_icon} ${close}`}
              onClick={this.handleClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              className={this.state.isClosed ? header_nav : `${header_nav} ${header_nav_isOpen}`}
            >
              <Link
                to="lorem1"
                spy={true}
                smooth={true}
                duration={500}
                onClick={this.handleClick}
                activeClass={`${activeLink}`}
              >
                Lorem
            </Link>
              <Link
                to="lorem2"
                spy={true}
                smooth={true}
                duration={500}
                onClick={this.handleClick}
                activeClass={`${activeLink}`}
              >
                Lorem
            </Link>
              <Link
                to="lorem3"
                spy={true}
                smooth={true}
                duration={500}
                onClick={this.handleClick}
                activeClass={`${activeLink}`}
              >
                Lorem
            </Link>
              <Link
                to="lorem4"
                spy={true}
                smooth={true}
                duration={500}
                onClick={this.handleClick}
                activeClass={`${activeLink}`}
              >
                Lorem
            </Link>
            </div>
            <div className={header_button}>
              <button>Lorem</button>
            </div>
          </div>
        </div>
      </header>

    );
  }
}



export default Header;