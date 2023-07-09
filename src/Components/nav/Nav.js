import './Nav.css';

function Nav() {
    return (
      <nav>
       <a href='/'><span id='home-logo'>Roman Azimov</span></a>
        <div>
          <a href="/">Home</a>
          <span className='seperator'>|</span>
          <a href="/blog/">Blog</a>
          <span className='seperator'>|</span>
          <a href="/contact/">Contact</a>
        </div>
      </nav>
    );
  }

export default Nav;