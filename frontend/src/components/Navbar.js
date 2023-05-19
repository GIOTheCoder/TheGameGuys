import { Outlet, Link } from "react-router-dom"

const Navbar =()=> {
    return (
        <nav className="nav">
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/store' className="nav-link">Store</Link>
        <Link to='/contact' className="nav-link">Contact</Link>
        
    
        <Outlet />
    </nav>
    )
}

export default Navbar