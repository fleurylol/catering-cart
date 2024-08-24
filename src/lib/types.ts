export type TrayCart = { TRAYID: string; qty: number; display: string };
export type BoxMeal = {
	id: string;
	qty: number;
	display: string;
	entree: string;
	side: string;
	premium: string;
};
export type PaperGoods = {
	napkins: boolean;
	plates: number;
	mintWipeKits: number;
	utensilsKits: number;
};

export type ProcessedOrder = {
	guestCount: number;
	tongsTotal: number;
	spoonTotal: number;
	free8oz: number;
	honey: number;
	honeyRoastedBBQ: number;
	roastedAlmonds: number;
	dressings: {
		avoRanch: number;
		ranch: number;
		zestyAppleCider: number;
		fatFreeHoneyMustard: number;
		lightBalsamicVinaigrette: number;
		lightItalian: number;
		creamySalsa: number;
	};
	paperGoods: {
		napkins: boolean;
		plates: number;
		mintWipeKits: number;
		utensilsKits: number;
	};
	boxMeals: BoxMeal[];
	saladKits: {
		cob: boolean;
		spicy: boolean;
		market: boolean;
	};
};
