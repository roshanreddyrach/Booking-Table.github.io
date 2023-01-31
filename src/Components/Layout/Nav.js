import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from '../Common'
import { NAV_ITEMS } from '../../constants'

import './styles.css'

export const Nav = () => {
	const [showNav, setShowNav] = useState(false)

	const ref = useRef(null)

	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setShowNav(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref])

	return (
		<nav ref={ref}>
			<Button
				variant="primary"
				classes="toggle-menu"
				handleClick={() => setShowNav((prev) => !prev)}
				aria-label="toggles navigation on click">
				<img src="/assets/images/hamburger.svg" alt="hamburger menu" />
			</Button>

			<ul className={`nav-list flex ${showNav && 'active'}`}>
				{NAV_ITEMS.map((item) => (
					<li key={item.name}>
						<NavLink to={item.link} onClick={() => setShowNav(false)}>
							{item.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
