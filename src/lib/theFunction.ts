export const createBoxMeal = (id: string) => {
	const boxMealLabel = {
		id: id,
		entree: id.split('|')[0],
		treat: id.split('|')[1],
		side: id.split('|')[2]
	};

	return boxMealLabel;
};
