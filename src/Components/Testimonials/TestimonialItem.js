export const TestimonialItem = (props) => {
	const { name, image, rating, text } = props.item

	return (
		<div className="testimonials-card">
			<div className="testimonials-rating">Rating: {rating}</div>

			<div className="testmonial-user">
				<img src={image} alt={name} />
				<div className="testimonials-name">{name}</div>
			</div>

			<div className="testimonials-description">{text}</div>
		</div>
	)
}
