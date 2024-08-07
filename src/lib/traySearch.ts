import type { Tray } from '$lib/types';
export const allTrays: Tray = [
	{
		type: 'Hot',
		img: 'https://www.cfacdn.com/img/order/menu/Online/Trays/nuggetTray_sm_PDP.png',
		name: 'Nugget Tray',
		variants: ['Chilled'],
		utensil: 'Tong',
		notes: null,
		sizes: {
			S: {
				serving_size: 8,
				quantity: 64,
				honey: null,
				free8oz: 1,
				roasted_almonds: null,
				dressings: null
			},
			M: {
				serving_size: 15,
				quantity: 120,
				honey: null,
				free8oz: 1,
				roasted_almonds: null,
				dressings: null
			},
			L: {
				serving_size: 25,
				quantity: 200,
				honey: null,
				free8oz: 2,
				roasted_almonds: null,
				dressings: null
			}
		}
	},
	{
		type: 'Hot',
		img: 'https://www.cfacdn.com/img/order/menu/Online/Trays/StripsTray_S_CFASauce_BBQSauce_PDP.png',
		name: 'Strip Tray',
		variants: [],
		utensil: 'Tong',
		notes: null,
		sizes: {
			S: {
				serving_size: 8,
				quantity: 24,
				honey: null,
				free8oz: 1,
				roasted_almonds: null,
				dressings: null
			},
			M: {
				serving_size: 15,
				quantity: 45,
				honey: null,
				free8oz: 1,
				roasted_almonds: null,
				dressings: null
			},
			L: {
				serving_size: 25,
				quantity: 75,
				honey: null,
				free8oz: 2,
				roasted_almonds: null,
				dressings: null
			}
		}
	},
	{
		type: 'Hot',
		img: 'https://www.cfacdn.com/img/order/COM/Menu_Refresh/Catering/Catering%20PDP/031417_MacnCheese_SmTray_CateringSize_Prod_CMYK_0038-V4_2880px.png',
		name: 'Mac Tray',
		variants: null,
		utensil: 'Spoon',
		notes: null,
		sizes: {
			S: {
				serving_size: 10,
				quantity: null,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: null
			},
			M: null,
			L: {
				serving_size: 20,
				quantity: null,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: null
			}
		}
	},
	{
		type: 'Hot',
		img: 'https://www.cfacdn.com/img/order/menu/Online/Trays/minisTray_lg_PDP_Desk.png',
		name: 'Chick-n-Minis Tray',
		variants: null,
		utensil: 'Tong',
		notes: null,
		sizes: {
			S: {
				serving_size: 5,
				quantity: 20,
				honey: 10,
				free8oz: null,
				roasted_almonds: null,
				dressings: null
			},
			M: null,
			L: {
				serving_size: 10,
				quantity: 40,
				honey: 20,
				free8oz: null,
				roasted_almonds: null,
				dressings: null
			}
		}
	},
	{
		type: 'Hot',
		img: 'https://www.cfacdn.com/img/order/COM/Menu_Refresh/Catering/Catering%20Desktop/GrilledFiletChick_Bundle_Desk.png',
		name: 'Grilled Bundle',
		variants: null,
		utensil: 'Tong 3x',
		notes:
			'Includes 10 multigrain buns (repacked in ice bag), 30 half strips of bacon (packed day of), and 10 Honey Roasted BBQ Sauce',
		sizes: {
			S: null,
			M: {
				serving_size: 10,
				quantity: 10,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: null
			},
			L: null
		}
	},
	{
		type: 'Cold',
		img: 'https://www.cfacdn.com/img/order/menu/Online/Trays/saladTrayS_PDP.png',
		name: 'Salad Tray',
		variants: null,
		utensil: 'Tong',
		notes: 'If guest does no specify dressing, we will provide Avocado Lime Ranch',
		sizes: {
			S: {
				serving_size: 5,
				quantity: null,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: [
					'Avocado Lime Ranch - 2',
					'Garden Herb Ranch - 2',
					'Zesty Apple Cider Vinaigrette - 1',
					'Fat-Free Honey Mustard - 1',
					'Light Italian - 1',
					'Light Balsamic Vinaigrette - 1',
					'Creamy Salsa - 1'
				]
			},
			M: null,
			L: {
				serving_size: 10,
				quantity: null,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: [
					'Avocado Lime Ranch - 3',
					'Garden Herb Ranch - 3',
					'Zesty Apple Cider Vinaigrette - 2',
					'Fat-Free Honey Mustard - 2',
					'Light Italian - 2',
					'Light Balsamic Vinaigrette - 2',
					'Creamy Salsa - 1'
				]
			}
		}
	},
	/// spacing
	{
		type: 'Cold',
		img: 'https://www.cfacdn.com/img/order/menu/Mobile/Trays/030719_FruitTray_L_Product_LowAngle_0960_1200x1200.png',
		name: 'Fruit Tray',
		variants: null,
		utensil: 'Spoon',
		notes: null,
		sizes: {
			S: {
				serving_size: 12,
				quantity: null,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: null
			},
			M: null,
			L: {
				serving_size: 26,
				quantity: null,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: null
			}
		}
	},
	/// spacing
	{
		type: 'Cold',
		img: 'https://www.cfacdn.com/img/order/menu/Online/Trays/kaleCrunchTray_sm_pdp.png',
		name: 'Kale Tray',
		variants: null,
		utensil: 'Tong',
		notes: null,
		sizes: {
			S: {
				serving_size: 10,
				quantity: null,
				honey: null,
				free8oz: null,
				roasted_almonds: 10,
				dressings: null
			},
			M: null,
			L: {
				serving_size: 20,
				quantity: null,
				honey: null,
				free8oz: null,
				roasted_almonds: 20,
				dressings: null
			}
		}
	},
	/// spacing
	{
		type: 'Cold',
		img: 'https://www.cfacdn.com/img/order/menu/Online/Trays/wrapTrayS_PDP.png',
		name: 'Grilled Wrap Tray',
		variants: ['Spicy Grilled Wrap Tray', 'Veggie Wrap Tray'],
		utensil: 'Tong',
		notes: 'If guest does no specify dressing, we will provide Avocado Lime Ranch',
		sizes: {
			S: {
				serving_size: 6,
				quantity: 6,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: ['Avocado Lime Ranch - 6']
			},
			M: {
				serving_size: 10,
				quantity: 10,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: [
					'Avocado Lime Ranch - 1',
					'Garden Herb Ranch - 1',
					'Zesty Apple Cider Vinaigrette - 1',
					'Fat-Free Honey Mustard - 1',
					'Light Italian - 1',
					'Light Balsamic Vinaigrette - 1',
					'Creamy Salsa - 1'
				]
			},
			L: {
				serving_size: 14,
				quantity: 14,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: [
					'Avocado Lime Ranch - 1',
					'Garden Herb Ranch - 1',
					'Zesty Apple Cider Vinaigrette - 1',
					'Fat-Free Honey Mustard - 1',
					'Light Italian - 1',
					'Light Balsamic Vinaigrette - 1',
					'Creamy Salsa - 1'
				]
			}
		}
	},
	{
		type: 'Cold',
		img: 'https://www.cfacdn.com/img/order/COM/Menu_Refresh/Catering/Catering%20PDP/_0002sPDP-Chilled-Chicken-Sub-Tray.png',
		name: 'Chilled Grilled Tray',
		variants: ['Spicy Grilled Wrap Tray', 'Veggie Wrap Tray'],
		utensil: 'Tong',
		notes: 'If guest does no specify dressing, we will provide Avocado Lime Ranch',
		sizes: {
			S: {
				serving_size: 6,
				quantity: 6,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: [
					'Avocado Lime Ranch - 1',
					'Garden Herb Ranch - 1',
					'Zesty Apple Cider Vinaigrette - 1',
					'Fat-Free Honey Mustard - 1',
					'Light Italian - 1',
					'Light Balsamic Vinaigrette - 1',
					'Creamy Salsa - 1'
				]
			},
			M: {
				serving_size: 10,
				quantity: 10,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: [
					'Avocado Lime Ranch - 1',
					'Garden Herb Ranch - 1',
					'Zesty Apple Cider Vinaigrette - 1',
					'Fat-Free Honey Mustard - 1',
					'Light Italian - 1',
					'Light Balsamic Vinaigrette - 1',
					'Creamy Salsa - 1'
				]
			},
			L: {
				serving_size: 14,
				quantity: 14,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: [
					'Avocado Lime Ranch - 1',
					'Garden Herb Ranch - 1',
					'Zesty Apple Cider Vinaigrette - 1',
					'Fat-Free Honey Mustard - 1',
					'Light Italian - 1',
					'Light Balsamic Vinaigrette - 1',
					'Creamy Salsa - 1'
				]
			}
		}
	},
	{
		type: 'Dry',
		img: 'https://www.cfacdn.com/img/order/menu/Online/Trays/cookieTrayL_Desk.png',
		name: 'Cookie Tray',
		variants: null,
		utensil: 'Tong',
		notes: null,
		sizes: {
			S: {
				serving_size: 12,
				quantity: 12,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: null
			},
			M: null,
			L: {
				serving_size: 24,
				quantity: 24,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: null
			}
		}
	},
	//spacing
	{
		type: 'Dry',
		img: 'https://www.cfacdn.com/img/order/menu/Online/Trays/Brownies_L_800x800.png',
		name: 'Brownie Tray',
		variants: null,
		utensil: 'Tong',
		notes: null,
		sizes: {
			S: {
				serving_size: 12,
				quantity: 12,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: null
			},
			M: null,
			L: {
				serving_size: 24,
				quantity: 24,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: null
			}
		}
	},
	{
		type: 'Dry',
		img: 'https://www.cfacdn.com/img/order/menu/Online/Trays/BrownieCookieTray_pdp.png',
		name: 'Cookie/Brownie Tray',
		variants: null,
		utensil: 'Tong',
		notes: null,
		sizes: {
			S: {
				serving_size: 12,
				quantity: 6,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: null
			},
			M: null,
			L: {
				serving_size: 24,
				quantity: 12,
				honey: null,
				free8oz: null,
				roasted_almonds: null,
				dressings: null
			}
		}
	}
];
