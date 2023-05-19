import Navbar from "./Navbar"
import logo from "../images/TheGameGuysLogo.png"
const Header =()=> {
    return (
    
    <header className="header">
        <div className="container">
            <div className="row  align-items-center">
                <div className="col-6 brand">
                    <img src={logo} className="brand-logo" alt="The Game Guys Logo" width="150"/>
                    
                </div>
                <div className="col-6 header-nav d-flex flex-column flex-md-row justify-content-center justify-content-md-end">
                    <Navbar />
                </div>
            </div>
        </div>
    </header>

    
    )
}

export default Header