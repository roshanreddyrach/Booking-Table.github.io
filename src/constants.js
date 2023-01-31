export const NAV_ITEMS = [
	{ name: 'Home', link: '/' },
	{ name: 'About', link: '/about' },
	{ name: 'Menu', link: '/menu' },
	{ name: 'Reservations', link: '/booking' },
	{ name: 'Order Online', link: '/order' },
	{ name: 'Login', link: '/login' },
]

export const ACTION_TYPES = {
	DATE_CHANGE: 'DATE_CHANGE',
	ADD_BOOKING: 'ADD_BOOKING',
}

export const SPECIALS = [
	{
		id: 1,
		name: 'Greek Salad',
		image: 'assets/images/greek salad.jpg',
		description:
			'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
		price: 12.99,
	},
	{
		id: 2,
		name: 'Bruchetta',
		image: 'assets/images/bruchetta.svg',
		description:
			'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
		price: 19.99,
	},

	{
		id: 3,
		name: 'Lemon Dessert',
		image: 'assets/images/lemon dessert.jpg',
		description:
			"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
		price: 15.99,
	},
]

export const TESTIMONIALS = [
	{
		name: 'John Doe',
		image: 'assets/images/avatar.jpg',
		rating: 4,
		text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	},
	{
		name: 'Sam Doe',
		image: 'assets/images/avatar.jpg',
		rating: 5,
		text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	},
	{
		name: 'Mark Doe',
		image: 'assets/images/avatar.jpg',
		rating: 5,
		text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	},
	{
		name: 'Ben Doe',
		image: 'assets/images/avatar.jpg',
		rating: 3,
		text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	},
]

export const OCCASIONS = [
	{ value: 'birthday', label: 'Birthday' },
	{ value: 'anniversary', label: 'Anniversary' },
	{ value: 'engagement', label: 'Engagement' },
]
