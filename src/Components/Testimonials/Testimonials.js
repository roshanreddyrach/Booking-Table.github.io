import { TestimonialItem } from './TestimonialItem'

import { TESTIMONIALS } from '../../constants'

import './styles.css'

export const Testimonials = () => (
	<section id="testmonials-section" className="testimonials-section">
		<div className="container">
			<h2>Testimonials</h2>

			<div className="grid testimonials-grid">
				{TESTIMONIALS.map((item) => (
					<TestimonialItem item={item} key={item.name} />
				))}
			</div>
		</div>
	</section>
)
