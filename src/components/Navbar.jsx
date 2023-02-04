import  './Navbar.css'

export default function Navbar(){
    return (      <nav className="navbar">

    <div className="logo">Enagic</div>
    
    <ul className="nav-links">
    
    <div className="menu">
    
    <li><a href="/">HOME</a></li>
    
    <li><a href="/">ABOUT</a></li>
    
    <li className="services">
    <a href="/">SERVICES</a>
    <ul className="dropdown">
    
    <li><a href="/">CUSTOMER SUPPORT</a></li>
    
    <li><a href="/">PLAN</a></li>
    
    <li><a href="/">STORE</a></li>
   
    </ul>
    
    </li>
    <li><a href="/">MODELS</a></li>
    
    <li><a href="/">CONTACT US</a></li>
    
    </div>
    
    </ul>
    </nav>

    )
    }