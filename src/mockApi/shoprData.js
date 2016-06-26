'use strict'

module.exports = {
	stores: [
		{
			id: 0,
			storeName: 'Walmart',
			sections: [
				{
					id: 0,
					name: 'Produce',
					items: [
						{
							id: 0,
							item: 'lettuce',
							checked: false
						},
						{
							id: 1,
							item: 'tomatoes',
							checked: true
						},
						{
							id: 2,
							item: 'apples',
							checked: true
						},
					]
				},
				{
					id: 1,
					name: 'Meat',
					items: [
						{
							id: 0,
							item: 'hamburger',
							checked: false
						},
						{
							id: 1,
							item: 'chicken',
							checked: false
						},
						{
							id: 2,
							item: 'pork chops',
							checked: false
						},
					]
				},
			]
		},
		{
			id: 1,
			storeName: 'Costco',
			sections: [
				{
					id: 0,
					name: 'Bakery',
					items: [
						{
							id: 0,
							item: 'bread',
							checked: false
						},{
							id: 1,
							item: 'croissants',
							checked: false
						},
					]
				},
				{
					id: 1,
					name: 'Supplies',
					items: [
						{
							id: 0,
							item: 'paper towels',
							checked: false
						},
						{
							id: 1,
							item: 'tide',
							checked: false
						},
						{
							id: 2,
							item: 'dishwasher detergent',
							checked: false
						},
					]
				},
			]
		},
	]
};
