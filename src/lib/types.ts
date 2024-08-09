export type TrayType = {
	id: `${string}-${string}-${string}-${string}-${string}`;
	utensil: string;
	notes: string;
	trayQty: number;
	tray: string;
	size: string;
}[];

export type Notes = {
	note: string;
}[];

export type OrderType = {
	tongCount: number;
	spoonCount: number;
	notes: Notes;
	serving_size: number;
	honey: number;
	free8oz: number;
	roasted_almonds: number;
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

export type Tray = Array<{
	type: string;
	img: string;
	name: string;
	variants: string[] | null;
	utensil: string;
	notes: string | null;
	sizes: {
		S: {
			serving_size: number;
			quantity: number | null;
			honey: number | null;
			free8oz: number | null;
			roasted_almonds: number | null;
			dressings: {
				avoRanch: number;
				ranch: number;
				zestyAppleCider: number;
				fatFreeHoneyMustard: number;
				lightBalsamicVinaigrette: number;
				lightItalian: number;
				creamySalsa: number;
			};
		} | null;
		M: {
			serving_size: number;
			quantity: number | null;
			honey: number | null;
			free8oz: number | null;
			roasted_almonds: number | null;
			dressings: {
				avoRanch: number;
				ranch: number;
				zestyAppleCider: number;
				fatFreeHoneyMustard: number;
				lightBalsamicVinaigrette: number;
				lightItalian: number;
				creamySalsa: number;
			};
		} | null;
		L: {
			serving_size: number;
			quantity: number | null;
			honey: number | null;
			free8oz: number | null;
			roasted_almonds: number | null;
			dressings: {
				avoRanch: number;
				ranch: number;
				zestyAppleCider: number;
				fatFreeHoneyMustard: number;
				lightBalsamicVinaigrette: number;
				lightItalian: number;
				creamySalsa: number;
			};
		} | null;
	};
}>;

export interface TrayInfoProps {
	tray: {
		type: string;
		img: string;
		name: string;
		variants: string[] | null;
		utensil: string;
		notes: string | null;
		sizes: {
			S: {
				serving_size: number;
				quantity: number | null;
				honey: number | null;
				free8oz: number | null;
				roasted_almonds: number | null;
				dressings:
					| {
							avoRanch: number;
							ranch: number;
							zestyAppleCider: number;
							fatFreeHoneyMustard: number;
							lightBalsamicVinaigrette: number;
							lightItalian: number;
							creamySalsa: number;
					  }
					| number;
			} | null;
			M: {
				serving_size: number;
				quantity: number | null;
				honey: number | null;
				free8oz: number | null;
				roasted_almonds: number | null;
				dressings:
					| {
							avoRanch: number;
							ranch: number;
							zestyAppleCider: number;
							fatFreeHoneyMustard: number;
							lightBalsamicVinaigrette: number;
							lightItalian: number;
							creamySalsa: number;
					  }
					| number;
			} | null;
			L: {
				serving_size: number;
				quantity: number | null;
				honey: number | null;
				free8oz: number | null;
				roasted_almonds: number | null;
				dressings:
					| {
							avoRanch: number;
							ranch: number;
							zestyAppleCider: number;
							fatFreeHoneyMustard: number;
							lightBalsamicVinaigrette: number;
							lightItalian: number;
							creamySalsa: number;
					  }
					| number;
			} | null;
		};
	};
}
