/* global angular */
//var app = angular.module('confluxApp');

app.directive('filters', function($rootScope) {
	return {
		restrict: 'E',
		templateUrl: 'app/views/shared/filters.html',
		link: function (scope) {
			scope.activeFilters = [];
			scope.filterPaneOpen = false;
			scope.searchOpen = false;
			scope.expandedFilter = null;
			
			scope.toggleFilterPane = function (filter) {
				scope.expandedFilter = filter;
				scope.filterPaneOpen = !scope.filterPaneOpen;
			};
			scope.filterVideos = function (filter, value, valueIndex) {
				var newFilter = angular.copy(filter);
				var activeFilterIndex = getActiveFilterIndex(newFilter);
				
				if (activeFilterIndex == -1) {
					
					// Add new filter to list
					newFilter.active = filter.active = true;
					if (value) {
						value.active = true;
						newFilter.values = [value];
					}
					scope.activeFilters.push(newFilter);
					
				} else if (value) {
					
					// MULTISELECT
					var activeValueIndex = scope.activeFilters[activeFilterIndex].values.findIndex(function (v) { return v.name == value.name });
					
					if (activeValueIndex == -1) {
						// Add new value to filter
						value.active = true;
						scope.activeFilters[activeFilterIndex].values.push(angular.copy(value));
					} else {
						// Remove duplicate value
						value.active = false;
						scope.activeFilters[activeFilterIndex].values.splice(activeValueIndex, 1);
						if (scope.activeFilters[activeFilterIndex].values.length < 1) {
							removeActiveFilter(filter, activeFilterIndex);
						}
					}
				} else {
					// TOGGLE
					removeActiveFilter(filter, activeFilterIndex);
				}
				
				$rootScope.$broadcast('filterVideos', {
					filters: scope.activeFilters
				});
				
				if (scope.activeFilters.length < 1) scope.clearFilters(true);
			};			

			scope.clearFilters = function (keepPanelOpen) {
				scope.activeFilters = [];
				if (!keepPanelOpen) scope.filterPaneOpen = false;
				$rootScope.$broadcast('resetFilters');
			};
			
			scope.clearSelections = function (filter) {
				var activeFilterIndex = getActiveFilterIndex(filter);
				
				if (activeFilterIndex > -1) {
					filter.values.forEach(function (value) { value.active = false; });
					removeActiveFilter(filter, activeFilterIndex);
				}
				
				$rootScope.$broadcast('filterVideos', {
					filters: scope.activeFilters
				});
			};
			
			scope.$on('openSearch', function (event) {
				scope.searchOpen = true;
				scope.toggleFilterPane();
				scope.clearFilters();
			});
			
			scope.$on('closeSearch', function (event) {
				scope.searchOpen = false;
			});
				
			function removeActiveFilter (filter, i) {
				filter.active = false;
				scope.activeFilters.splice(i, 1);
			}
			
			function getActiveFilterIndex (filter) {
				return scope.activeFilters.findIndex(function (f) { return f.propName == filter.propName});
			}
		}
	};
});

app.directive('videos', function(animationSvc, dataSvc) {
	return {
		restrict: 'E',
		templateUrl: 'app/views/shared/videos.html',
		scope: {
			videos: '=',
			categories: '=',
			syncedVideos: '=',
			collectionVideos: '=',
			searchResults: '=',
			query: '=',
			edit: '@?',
			relatedVideoId: '='
		},
		link: function (scope, elm, attrs) {
			scope.ROW_LENGTH = 6;
			scope.showConfirmationMsg = false;
			scope.showingRelatedVideos = (attrs.relatedVideoId ? true : false);
			scope.openVideo = animationSvc.openVideo;
			scope.filterQuery = "";
			
			scope.$on('filterVideos', function (event, args) {
				
				// Get filter query
				
				var result = "";
				var term = "movies and tv shows";
				var filterStrStart = [];
				var filterStrEnd = [];
				var filterStrFinal = [];
				var filters = angular.copy(args.filters);
				
				filters.sort(function (a, b) {
					  if ( a.stringOrder < b.stringOrder ){ return -1; }
					  if ( a.stringOrder > b.stringOrder ){ return 1; }
					  return 0;
				});
				
				filters.forEach(function (filter) {
					
					if (filter.values) {
						
						var vals = [];
						var joinedStr = "";
						
						filter.values.forEach(function (value, i) {
							
							var str = "";
							
							switch (filter.propName) {
								case 'year':
									str += (i == 0 ? "released in " : "") + (value.name);
									break;
								case 'rating':
									str += (value.name) + (i == filter.values.length-1 ? " rated" : "");
									break;
								case 'length':
									str += (value.name) + (i == filter.values.length-1 ? " in length" : "");
									break;
								case 'userRating':
									str += (value.name) + (i == filter.values.length-1 ? " star" : "");
									break;
								case 'color':
									str += (i == 0 ? "with a " : "") + (value.name) + (i == filter.values.length-1 ? " poster" : "");
									break;
								case 'content':
									str += (i == 0 ? "excluding " : "") + (value.name);
									break;
								case 'language':
									str += (value.name) + (i == filter.values.length-1 ? " language " : "");
									break;
								case 'price':
									str += (i == 0 ? "that are " : "") + (value.name.toLowerCase());
									break;
								case 'quality':
									str += (i == 0 ? "available in " : "") + (value.name);
									break;
								default:
									str += value.name;
							}
							vals.push(str);
						});
						if (vals.length > 1) {
							var andOr = (vals.length > 2 ? ',' : '') + (filter.propName == 'color' || filter.propName == 'price' ? ' or ' : ' and ');
							
							joinedStr = vals.slice(0, vals.length-1).join(', ');
							joinedStr += andOr + vals[vals.length - 1];
						} else {
							joinedStr += vals.join(', ');
						}
						
						if (filter.stringOrder < 5) {
							filterStrStart.push(joinedStr);
						} else {
							filterStrEnd.push(joinedStr);
						}
						
					} else {
						var str = "";
						switch (filter.name.toLowerCase()) {
							case 'watchlist':
								str += "on your watchlist";
								break;
							case 'movies':
								term = "movies";
								break;
							case 'tv':
								term = "tv shows";
								break;
							default:
								// do nothing
						}
						
						if (filter.stringOrder < 5) {
							filterStrStart.push(str);
						} else if (filter.stringOrder > 6 ) {
							filterStrEnd.push(str);
						}
					}
				})
				
				filterStrStart.push(term);
				filterStrFinal = filterStrStart.concat(filterStrEnd);
				
				var query = filterStrFinal.join(' ');
				
				scope.filterQuery = query.charAt(0).toUpperCase() + query.substring(1);
			});
			
			scope.cancelConfirmation = function (category) {
				category.showConfirmationMsg = false;
			};
			scope.showMore = function (category, amount) {
				if (amount) {
					category.limit += amount;
				} else {
					category.limit += scope.ROW_LENGTH;
				}
			};
			scope.showAll = function (category) {
				category.limit = category.videos.length;
			};
			scope.collapse = function (category) {
				category.limit = scope.ROW_LENGTH;
			};
			scope.hide = function (category) {
				category.isVisible = false;
			};
			scope.getShowMoreNum = function (category) {
				return category.videos.length - scope.ROW_LENGTH < scope.ROW_LENGTH
										? category.videos.length - scope.ROW_LENGTH
										: (category.videos.length - category.limit < scope.ROW_LENGTH
										 		? category.videos.length - category.limit
										 		: scope.ROW_LENGTH);
			};
		}
	};
});

app.directive('singleVideo', function(animationSvc, dataSvc, $rootScope) {
	return {
		restrict: 'E',
		templateUrl: 'app/views/shared/video.html',
		link: function (scope) {
			scope.$on('openVideo', function(event, args) {
				scope.video = dataSvc.getVideoById(args.videoId);
				scope.categories = [dataSvc.getCategoryById(scope.video.category)];
			});
			scope.openPlayer = function (url) {
				window.open(url,'_blank');
			}
			scope.close = animationSvc.closeVideo;
		}
	};
});

app.directive('collections', function(dataSvc) {
	return {
		restrict: 'E',
		templateUrl: 'app/views/shared/videos-collections.html',
		scope: {
			collections: '='
		},
		link: function (scope) {
			scope.openCollection = function () {
				//
			};
		}
	};	
})

app.directive('starRating', function(animationSvc, dataSvc, $rootScope) {
	return {
		restrict: 'E',
		scope: {
			count: '='
		},
		template: '<span class="star-rating" ng-repeat="star in [0,1,2,3,4]"><span ng-if="count > $index">&#9733;</span><span ng-if="count <= $index">&#9734;</span></span>'
	};
});