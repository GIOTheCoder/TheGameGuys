import sony from '../images/sony.png'
import microsoft from '../images/microsoft.png'
import nintendo from '../images/nintendo.png'
import nvidia from '../images/nvidia.png'

const Footer =()=> {
    return (
        <footer className="footer">
        <section className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-6 address">
                        <p>2205 Santa Monica Blvd</p>
                        <p>Los Angeles, CA 90025</p>
                    </div>
                    <div className="col-6 sponsors text-end">
                        <img src={sony} alt="sony logo" className="sponsor-logo sony img-fluid" width="75"/>
                        <img src={microsoft} alt="microsoft logo" className="sponsor-logo microsoft img-fluid" width="75"/>
                        <img src={nintendo} alt="nintendo logo" className="sponsor-logo nintendo img-fluid" width="75"/>
                        <img src={nvidia} alt="nvidia logo" className="sponsor-logo nintendo img-fluid" width="75"/>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    )
}

export default Footer