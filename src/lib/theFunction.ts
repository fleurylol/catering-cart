import type { TrayCart, BoxMeal, PaperGoods } from '$lib/types';

export const submitCart = (trayCart: TrayCart[], paperGoods: boolean, guestCount: number) => {
	const order = {
		guestCount: guestCount,
		tongsTotal: 0,
		spoonTotal: 0,
		free8oz: 0,
		honey: 0,
		honeyRoastedBBQ: 0,
		roastedAlmonds: 0,
		dressings: {
			avoRanch: 0,
			ranch: 0,
			zestyAppleCider: 0,
			fatFreeHoneyMustard: 0,
			lightBalsamicVinaigrette: 0,
			lightItalian: 0,
			creamySalsa: 0
		},
		paperGoods: {} as PaperGoods,
		boxMeals: [] as BoxMeal[],
		saladKits: {
			cob: false,
			spicy: false,
			market: false
		}
	};
	trayCart.forEach((tray) => {
		const type = tray.TRAYID.split('|')[0];
		const item = tray.TRAYID.split('|')[1];
		const size = tray.TRAYID.split('|')[2];
		const premium = tray.TRAYID.split('|')[3];

		if (type === 'HT' || type === 'CT' || type === 'DG') {
			switch (item) {
				// HOT TRAYS
				case 'NUG':
				case 'STR': {
					order.tongsTotal += tray.qty;
					if (size === 'L') {
						order.free8oz += tray.qty * 2;
					} else {
						order.free8oz += tray.qty;
					}
					break;
				}
				case 'MAC': {
					if (size === 'L') {
						order.spoonTotal += tray.qty * 2;
					} else {
						order.spoonTotal += tray.qty;
					}
					break;
				}
				case 'MINI': {
					order.tongsTotal += tray.qty;
					if (size === 'L') {
						order.honey += tray.qty * 20;
					} else {
						order.honey += tray.qty * 10;
					}
					break;
				}
				case 'GRBUNDLE': {
					order.tongsTotal += tray.qty * 3;
					order.honeyRoastedBBQ += tray.qty * 10;
					break;
				}
				// COLD TRAYS
				case 'SALAD': {
					order.tongsTotal += tray.qty;
					if (size === 'L') {
						order.dressings.avoRanch += 3 * tray.qty;
						order.dressings.ranch += 3 * tray.qty;
						order.dressings.zestyAppleCider += 2 * tray.qty;
						order.dressings.fatFreeHoneyMustard += 2 * tray.qty;
						order.dressings.lightBalsamicVinaigrette += 2 * tray.qty;
						order.dressings.lightItalian += 2 * tray.qty;
						order.dressings.creamySalsa += 2 * tray.qty;
					} else {
						order.dressings.avoRanch += 2 * tray.qty;
						order.dressings.ranch += 2 * tray.qty;
						order.dressings.zestyAppleCider += 1 * tray.qty;
						order.dressings.fatFreeHoneyMustard += 1 * tray.qty;
						order.dressings.lightBalsamicVinaigrette += 1 * tray.qty;
						order.dressings.lightItalian += 1 * tray.qty;
						order.dressings.creamySalsa += 1 * tray.qty;
					}
					break;
				}
				case 'WRAP': {
					order.tongsTotal += tray.qty;
					if (size === 'L') {
						order.dressings.avoRanch += 7 * tray.qty;
					}
					if (size === 'M') {
						order.dressings.avoRanch += 5 * tray.qty;
					} else {
						order.dressings.avoRanch += 3 * tray.qty;
					}
					break;
				}
				case 'SUB': {
					order.tongsTotal += tray.qty;
					if (size === 'L') {
						order.honeyRoastedBBQ += 16 * tray.qty;
					}
					if (size === 'M') {
						order.honeyRoastedBBQ += 12 * tray.qty;
					} else {
						order.honeyRoastedBBQ += 6 * tray.qty;
					}
					break;
				}
				case 'FRUIT': {
					order.spoonTotal += tray.qty;
					break;
				}
				case 'KALE': {
					order.spoonTotal += tray.qty;
					if (size === 'L') {
						order.roastedAlmonds += 20 * tray.qty;
					} else {
						order.roastedAlmonds += 10 * tray.qty;
					}
					break;
				}
				// DESSERT TRAYS
				case 'COOKIE':
				case 'BROWNIE':
				case 'COOKIEBROWNIE': {
					order.tongsTotal += tray.qty;
					break;
				}

				default: {
					console.log('default');
					break;
				}
			}
		}
		if (type === 'BM') {
			const index = order.boxMeals.findIndex((item) => item.id === tray.TRAYID);
			if (index === -1) {
				order.boxMeals.push({
					id: tray.TRAYID,
					qty: tray.qty,
					display: tray.display,
					entree: item,
					side: size,
					premium: premium
				});
			} else {
				order.boxMeals[index].qty += tray.qty;
			}
		}
		if (type === 'SK') {
			switch (item) {
				case 'COB': {
					order.saladKits.cob = true;
					break;
				}
				case 'SPICY': {
					order.saladKits.spicy = true;
					break;
				}
				case 'MARKET': {
					order.saladKits.market = true;
					break;
				}
				default: {
					console.log('default');
					break;
				}
			}
		}
	});
	if (paperGoods) {
		if (trayCart.length > 0) {
			const mintWipeNum = Math.floor(order.guestCount / 25) + (order.guestCount % 25 > 0 ? 1 : 0);
			const containsItem = trayCart.some((tray) => {
				const item = tray.TRAYID.split('|')[1];
				return item === 'MAC' || item === 'SALAD' || item === 'KALE' || item === 'FRUIT';
			});
			if (containsItem) {
				order.paperGoods.utensilsKits = guestCount;
			}
			order.paperGoods.mintWipeKits = mintWipeNum;
			order.paperGoods.plates = guestCount;
			order.paperGoods.napkins = true;
		}
	}
	return order;
};
