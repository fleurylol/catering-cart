export type Order = {
	tongTotal: number;
	spoonTotal: number;
	free8oz: number;
	honey: number;
	roasted_almonds: number;
	honeyRoastedBBQ: number;
	dressings: {
		avoRanch: number;
		ranch: number;
		zestyAppleCider: number;
		fatFreeHoneyMustard: number;
		lightBalsamicVinaigrette: number;
		lightItalian: number;
		creamySalsa: number;
	};
};

export type CartType = {
	trayID: string;
	trayQTY: number;
}[];
