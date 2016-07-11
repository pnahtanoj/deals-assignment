(function () {

'use strict';


function DealsCtrl(DealsApi,$filter) {
	var _this = this;

	this.interval = 10;
	this.scores = [];
	for( var i = 100; i > 0; i = i - this.interval) {
		this.scores.push(i);
	}

	// WOULD NORMALLY ACCESS THROUGH A SERVICE //
	DealsApi.fetch()
		.then(function(deals) { _this.deals = deals; })
		.catch(function(error) {console.log(error); });

	// WOULD NORMALLY ACCESS THESE THROUGH A SERVICE, TOO //
	this.getRange = function(score) {
		_this = this;

		return $filter('filter')(this.deals, function(deal) {
			return 	(deal.metacriticScore <= score && deal.metacriticScore > score - _this.interval) || 
					(deal.metacriticScore === 0 && score === _this.interval);
		});
	};
}

DealsCtrl.$inject = ['DealsApi','$filter'];

angular
	.module('dealsAssignmentApp')
	.component('deals', {
		templateUrl: 'scripts/deals.html',
		bindings: {},
		controller: DealsCtrl
	});


})();