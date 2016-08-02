angular.module('groceryApp', [])
		.controller('groceryController', GroceryController); 

		function GroceryController() {
			this.newItem = {};
			this.items = [
				{name: "green apples"},
				{name: "blueberries"},
				{name: "seed butter"},
				{name: "chicken breasts"},
				{name: "red bell peppers"}
			];
			this.createNewItem = createNewItem;

			function createNewItem() {
				this.items.push(this.newItem);
				this.newItem = {}; //reset the form
			};
		};