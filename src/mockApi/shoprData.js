'use strict'

module.exports = {
	stores: [
		{
			id: 0,
			storeName: 'Walmart',
			selected: false,
			sections: [
				{
					id: 0,
					name: 'Produce',
					items: [
						{
							id: 0,
							item: 'lettuce',
							selected: false
						},
						{
							id: 1,
							item: 'tomatoes',
							selected: true
						},
						{
							id: 2,
							item: 'apples',
							selected: true
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
							selected: false
						},
						{
							id: 1,
							item: 'chicken',
							selected: false
						},
						{
							id: 2,
							item: 'pork chops',
							selected: false
						},
					]
				},
			]
		},
		{
			id: 1,
			storeName: 'Costco',
			selected: true,
			sections: [
				{
					id: 0,
					name: 'Bakery',
					items: [
						{
							id: 0,
							item: 'bread',
							selected: false
						},{
							id: 1,
							item: 'croissants',
							selected: false
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
							selected: false
						},
						{
							id: 1,
							item: 'tide',
							selected: false
						},
						{
							id: 2,
							item: 'dishwasher detergent',
							selected: false
						},
					]
				},
			]
		},
	]
};
