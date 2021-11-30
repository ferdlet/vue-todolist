const app = new Vue({
	el: '#root',
	data: {
		items: [],
		inputValue: ''
	},
	methods: {
		addItem: function() {
			if (this.inputValue !== "") {
				this.items.push({
					todo: this.inputValue, 
					check: false
				});
				this.inputValue = "";
			}
		},
		removeItem: function(index) {
			this.items.splice(index, 1);
		},
	}
});