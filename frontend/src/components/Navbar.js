import { Outlet, Link } from "react-router-dom"
import { Cart3, Cart4 } from "react-bootstrap-icons"

const Navbar =()=> {
    return (
        <nav className="nav">
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/store' className="nav-link">Store</Link>
        <Link to='/contact' className="nav-link">Contact</Link>
        <Link to='/checkout' className="nav-link"><Cart4 size={20}/></Link>
        
    
        <Outlet />
    </nav>
    )
}

export default Navbar