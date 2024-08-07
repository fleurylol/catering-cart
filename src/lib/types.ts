export type TrayType = {
	id: `${string}-${string}-${string}-${string}-${string}`;
	utensil: string;
	trayQty: number;
	tray: string;
	size: string;
}[];

export type OrderType = {
	tongCount: number;
	SpoonCount: number;
	serving_size: number;
	honey: number;
	free8oz: number;
	roasted_almonds: number;
	dressings: string[] | null;
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
			dressings: string[] | null;
		} | null;
		M: {
			serving_size: number;
			quantity: number | null;
			honey: number | null;
			free8oz: number | null;
			roasted_almonds: number | null;
			dressings: string[] | null;
		} | null;
		L: {
			serving_size: number;
			quantity: number | null;
			honey: number | null;
			free8oz: number | null;
			roasted_almonds: number | null;
			dressings: string[] | null;
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
				dressings: string[] | null;
			} | null;
			M: {
				serving_size: number;
				quantity: number | null;
				honey: number | null;
				free8oz: number | null;
				roasted_almonds: number | null;
				dressings: string[] | null;
			} | null;
			L: {
				serving_size: number;
				quantity: number | null;
				honey: number | null;
				free8oz: number | null;
				roasted_almonds: number | null;
				dressings: string[] | null;
			} | null;
		};
	};
}
