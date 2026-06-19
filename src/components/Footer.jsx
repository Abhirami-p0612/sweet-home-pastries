import Logo from "../images/logo.png";
import Facebook from "../images/Facebook.png";
import Instagram from "../images/Instagram Circle.png";
import Linkedin from "../images/l.png";
export default function Footer({
    footerBackground
}) {
    return (
        <>
            <div className="footer"
                // key={currentCake}
                style={{
                background: footerBackground
            }}>
                <div className="logo-text">
                    <img src={Logo} alt="Logo" className="logo-f" />
                    <p>© 2024 Sweet Home. All rights reserved.</p>
                    <div className="social-icons">
                        <img src={Instagram} alt="Instagram" />
                        <img src={Facebook} alt="Facebook" />
                        <img src={Linkedin} alt="LinkedIn" />
                    </div>
                </div>
                <div className="footer-nav">
                    <a href="#sweethome">Sweet Home</a>
                    <a href="#collection">Collection</a>
                    <a href="#Story">Story</a>
                </div>

            </div>
        </>
    )
}