'use strict'

module.exports = {
	stores: [
		{
			id: 0,
			storeName: 'Walmart',
			sections: [
				{
					storeSection: 'Produce',
					items: [
						{
							itemName: 'lettuce',
							selected: false
						},
						{
							itemName: 'tomatoes',
							selected: true
						},
						{
							itemName: 'apples',
							selected: true
						},
					]
				},
				{
					storeSection: 'Meat',
					items: [
						{
							itemName: 'hamburger',
							selected: false
						},
						{
							itemName: 'chicken',
							selected: false
						},
						{
							itemName: 'pork chops',
							selected: false
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
					storeSection: 'Bakery',
					items: [
						{
							itemName: 'bread',
							selected: false
						},{
							itemName: 'croissants',
							selected: false
						},
					]
				},
				{
					storeSection: 'Supplies',
					items: [
						{
							itemName: 'paper towels',
							selected: false
						},
						{
							itemName: 'tide',
							selected: false
						},
						{
							itemName: 'dishwasher detergent',
							selected: false
						},
					]
				},
			]
		},
	]
};
