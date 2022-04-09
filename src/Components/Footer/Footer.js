import React from "react";
import "./Footer.css"; //import css style
import logo from "../../images/logo.png";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
	return (
		<footer>
			<ScrollToTop smooth top="1000" style={{ backgroundColor: "#f7d919" }} />
			<ul className="footer-list">
				<li className="footer-item">
					<p>
						{"   "}
						<img id="f" src={logo} alt="" /> {"   "}E-ggle is the biggest online platform for courses and education. 
					</p>
				</li>
				<li className="footer-item">
					<h4>Address</h4>
					<p>Chennai,TamilNadu</p>
				</li>
				<li className="footer-item">
					<h4>Contact</h4>
					<p>
						Mobile: (+91) - 80721 - 05077 <br /> Hotline: (+91) - 76039 - 73479{" "}
						<br /> Mail: abiauthority@gmail.com
					</p>
				</li>
				<li className="footer-item">
					<h4>Hour of operation</h4>
					<p>
						Monday - Friday: 09:00 - 20:00 <br /> Sunday & Saturday: 10:30 -
						22:00
					</p>
				</li>
			</ul>
			<p className="copyright-text">
				<small>Copyright &copy; All Rights Reserved by VM & Abhi.</small>
			</p>
		</footer>
	);
};

export default Footer;
