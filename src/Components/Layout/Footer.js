import { NavLink } from 'react-router-dom'

import { NAV_ITEMS } from '../../constants'

export const Footer = () => (
	<footer>
		<div className="container">
			<div className="footer-content">
				<img src="assets/images/hero.jpg" alt="hero" />

				<nav className="footer-nav">
					<div className="footer-nav-column">
						<h5>Links</h5>
						<ul className="footer-nav-list">
							{NAV_ITEMS.map((item) => (
								<li className="footer-nav-item" key={item.name}>
									<NavLink to={item.link}>{item.name}</NavLink>
								</li>
							))}
						</ul>
					</div>

					<div className="footer-nav-column">
						<h5>Contact</h5>
						<ul className="footer-nav-list">
							<li className="footer-nav-item"></li>
							<li className="footer-nav-item">
								<a href="tel:+1 1234 123">+1 1234 123</a>
							</li>
							<li className="footer-nav-item">
								<a href="mailto:help@littlelemon.food">help@littlelemon.food</a>
							</li>
						</ul>
					</div>

					<div className="footer-nav-column">
						<h5>Social Media</h5>
						<ul className="footer-nav-list">
							<li className="footer-nav-item">
								<a href="#!">Facebook</a>
							</li>
							<li className="footer-nav-item">
								<a href="#!">Instagram</a>
							</li>
							<li className="footer-nav-item">
								<a href="#!">Pinterest</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>

			<p className="copyright">Little Lemon&copy; 2022</p>
		</div>
	</footer>
)
