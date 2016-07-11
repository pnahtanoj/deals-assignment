(function () {

'use strict';

function DealsApi( $http, $q) {

	function transformResponse(data) {
		var deals = JSON.parse(data);

		angular.forEach(deals, function(deal) {
			deal.metacriticScore = Number(deal.metacriticScore);
			deal.score = (deal.metacriticScore > 0) ? Math.ceil(deal.metacriticScore / 10) * 10 : 10;
		});

		return deals;
	}	

	function fetch() {
		let d = $q.defer();

		$http({
			method: 'get',
			url: 'http://www.cheapshark.com/api/1.0/deals',
			transformResponse: transformResponse
		})
		.then(function(response) { d.resolve(response.data); })
		.catch(function(error) { d.reject(error); });

		return d.promise;
	}	

	return {
		fetch: fetch
	};

}

DealsApi.$inject = [ '$http', '$q', '$timeout' ];

angular
    .module('dealsAssignmentApp')
    .factory( 'DealsApi', DealsApi );


})();