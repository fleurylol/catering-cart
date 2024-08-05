export type TrayType = {
	id: `${string}-${string}-${string}-${string}-${string}`;
	trayQty: number;
	tray: string;
	size: string;
}[];

export type Tray = Array<{
	type: string;
	img: string;
	name: string;
	variants: string[] | null;
	utensil: string;
	notes: string | null;
	sizes: {
		small: {
			serving_size: number;
			quantity: number | null;
			honey: number | null;
			free8oz: number | null;
			roasted_almonds: number | null;
			dressings: string[] | null;
		} | null;
		medium: {
			serving_size: number;
			quantity: number | null;
			honey: number | null;
			free8oz: number | null;
			roasted_almonds: number | null;
			dressings: string[] | null;
		} | null;
		large: {
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
			small: {
				serving_size: number;
				quantity: number | null;
				honey: number | null;
				free8oz: number | null;
				roasted_almonds: number | null;
				dressings: string[] | null;
			} | null;
			medium: {
				serving_size: number;
				quantity: number | null;
				honey: number | null;
				free8oz: number | null;
				roasted_almonds: number | null;
				dressings: string[] | null;
			} | null;
			large: {
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
