import './Nav.css';

function Nav() {
    return (
      <nav>
       <a href='/'><span id='home-logo'>Roman Azimov</span></a>
        <div>
          <a href="/">Home</a>
          <span className='seperator'>|</span>
          <a href="/css/">Blog</a>
          <span className='seperator'>|</span>
          <a href="/js/">Contact</a>
        </div>
      </nav>
    );
  }

export default Nav;