export default {
	users: [
		{ username: "regular", accessLevel: 1, password: "password" },
		{ username: "admin", accessLevel: 0, password: "password" },
	],
	recipes: [
		{
			id: 1,
			recipeName: "Tea",
			image: "1-tea.jpg",
			liquidUnit: "milliLitre",
			solidUnit: "gram",
			servings: "1pax",
			description:
				"A hot drink made by infusing the dried crushed leaves of the tea plant in boiling water.",
			prepTime: "10 mins",
			totalTime: "10 mins",
			categories: [
				{
					id: 1,
					name: "Hot Beverage",
				},
			],
			ingredients: [
				{
					id: 1,
					IngredientName: "Water",
					Quantity: 100,
				},
				{
					id: 2,
					IngredientName: "Milk",
					Quantity: 100,
				},
				{
					id: 3,
					IngredientName: "Sugar",
					Quantity: 10,
				},
				{
					id: 4,
					IngredientName: "Tea Powder",
					Quantity: 5,
				},
			],
			steps: [
				{
					Step1: "Keep the Water and Milk in a bowl and boil",
				},
				{
					Step2: "Once it boils add Tea Powder",
				},
				{
					Step3: "Reduce the flame and stir. Let it boil for some more time",
				},
				{
					Step4: "Turn off the gas and strain the tea powder",
				},
				{
					Step5: "Add Sugar to taste and serve hot in a cup",
				},
			],
			Benefits: [],
			variants: [
				{
					id: 2,
					recipeName: "Black Tea",
				},
				{
					id: 3,
					recipeName: "Masala Tea",
				},
			],
			recipesWithSameIngredients: [
				{
					id: 2,
					recipeName: "Black Tea",
				},
				{
					id: 3,
					recipeName: "Masala Tea",
				},
			],
			MaterialsRequired: [
				{
					id: 150,
					Name: "Tea Strainer",
					amazonUrl: "",
				},
			],
			popularity: {
				totalPersonsTried: 10,
			},
		},
		{
			id: 4,
			recipeName: "Coffee",
			image: "4-coffee.jpg",
			liquidUnit: "milliLitre",
			solidUnit: "gram",
			servings: "1pax",
			description: "Let’s get a coffee!",
			prepTime: "5 mins",
			totalTime: "5 mins",
			categories: [
				{
					id: 1,
					name: "Hot Beverage",
				},
			],
			ingredients: [
				{
					id: 2,
					IngredientName: "Milk",
					Quantity: 100,
				},
				{
					id: 3,
					IngredientName: "Sugar",
					Quantity: 10,
				},
				{
					id: 4,
					IngredientName: "Ground Coffee Powder",
					Quantity: 5,
				},
			],
			steps: [
				{
					Step2: "Heat water for two minutes and add coffee powder",
				},
				{
					Step3: "Reduce the flame and stir. Let it boil for some more time",
				},
				{
					Step4: "Add Milk to get desired thickness",
				},
				{
					Step5: "Add Sugar to taste and serve hot in a cup",
				},
			],
			Benefits: [],
			variants: [
				{
					id: 5,
					recipeName: "Filter Coffee",
				},
				{
					id: 6,
					recipeName: "Mocha",
				},
			],
			recipesWithSameIngredients: [
				{
					id: 7,
					recipeName: "Espresso",
				},
			],
			MaterialsRequired: [
				{
					id: 1500,
					Name: "Coffee Powder",
					amazonUrl: "",
				},
			],
			popularity: {
				totalPersonsTried: 5,
			},
		},
	],
};
