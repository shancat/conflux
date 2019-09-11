var app = angular.module('confluxApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state({
		name: 'browse',
		url: '/',
		controller: 'browseCtrl',
		templateUrl: 'app/views/browse.html'
	});
	$stateProvider.state({
		name: 'collections',
		url: '/collections',
		controller: 'collectionsCtrl',
		templateUrl: 'app/views/collections.html'
	});
		$stateProvider.state({
			name: 'collection',
			parent: 'collections',
			url: '/{collectionId}',
			params: {
				collectionObj: null
			},
			controller: 'collectionCtrl',
			templateUrl: 'app/views/collection.html'
		});
		$stateProvider.state({
			name: 'collectionEdit',
			parent: 'collections',
			url: '/{collectionId}/edit',
			controller: 'collectionEditCtrl',
			templateUrl: 'app/views/collection-edit.html'
		});
	$stateProvider.state({
		name: 'sync',
		url: '/sync',
		controller: 'syncCtrl',
		templateUrl: 'app/views/sync.html'
	});
	$stateProvider.state({
		name: 'wayfinder',
		url: '/wayfinder',
		controller: 'wayfinderCtrl',
		templateUrl: 'app/views/wayfinder.html'
	});
	$urlRouterProvider.otherwise('/');
});

app.controller('indexCtrl', function($scope, $rootScope, $state, dataSvc) {
	$scope.primaryNav = dataSvc.primaryNav;
	$scope.secondaryNav = dataSvc.secondaryNav;
	$scope.filterTypes = dataSvc.filterTypes;
	$scope.filters = dataSvc.filters;
	$scope.searchQuery = '';
	$scope.videos = [];
	$scope.isSearchActive = false;
	$scope.isSearchOpen = false;
	
	var containerElm = document.getElementById('container');
	var searchElm = document.getElementById('search-outer');
	var inputElm = document.getElementById('search-input');
	
	$scope.openSearch = function () {
		containerElm.classList.add('search-open');
		searchElm.classList.add('visible');
		$scope.isSearchOpen = true;
		inputElm.focus();

		$rootScope.$broadcast('openSearch');
		// window.onclick = function (event) {
		// 	if (isSearchOpen && !(event.target.classList.contains('bottom') || event.target.classList.contains('search'))) {
		// 		$scope.closeSearch();
		// 	}	
		// }
	};
	
	$scope.closeSearch = function () {
		$rootScope.$broadcast('closeSearch');
		containerElm.classList.remove('search-open');
		searchElm.classList.remove('visible');
		$scope.isSearchOpen = false;
		$scope.isSearchActive = false;
		$scope.searchQuery = '';
		$scope.videos = [];
	};
	
	$scope.$watch('searchQuery', function(newValue, oldValue) {
		if ($scope.searchQuery.length >= 2) {
			if (!$scope.isSearchActive) $scope.isSearchActive = true;
			$scope.videos = dataSvc.getSearchResults($scope.searchQuery);
		} else {
			$scope.videos = [];
		}
	});
});

app.controller('browseCtrl', function($scope, dataSvc) {
	$scope.categories = dataSvc.categories;
	$scope.videos = null;
	
	$scope.$on('filterVideos', function (event, args) {
	    $scope.categories = null;
	    $scope.videos = dataSvc.getFilteredVideos(args.filters);
	});
	
	$scope.$on('resetFilters', function (event, args) {
	    dataSvc.resetActiveFilters();
	    $scope.categories = dataSvc.categories;
	    $scope.videos = null;
	});
});

app.controller('collectionsCtrl', function($scope, $state, dataSvc) {
	$scope.collections = dataSvc.collections;
	$scope.createCollection = function () {
		$state.go('collectionEdit', { collectionId: dataSvc.getNewCollectionId() });
	}
});

app.controller('collectionCtrl', function($scope, $stateParams, dataSvc) {
	$scope.collection = dataSvc.getCollectionById($stateParams.collectionId);
});

app.controller('collectionEditCtrl', function($scope, $stateParams, dataSvc) {
	$scope.activeCollection = dataSvc.getCollectionById($stateParams.collectionId);
	$scope.myCollections = dataSvc.collections.slice(2,5);

	if (!$scope.activeCollection) {
		$scope.activeCollection = dataSvc.createCollection($stateParams.collectionId, "Collection Name", "");
	}
	
	$scope.saveCollection = function () {
		var index = $scope.myCollections.findIndex(function (collection) {
			return collection.id == $scope.activeCollection.id;
		});
		if (index > -1) {
			// update
			$scope.myCollections[index] = $scope.activeCollection;
		} else {
			// add
			$scope.myCollections.push($scope.activeCollection);
		}
	};
	
});

app.controller('wayfinderCtrl', function($scope, $stateParams, dataSvc) {
	$scope.questionTypes = dataSvc.questionTypes;
	$scope.questions = dataSvc.generateQuiz();
	$scope.showResults = false;
	$scope.question = $scope.questions[0];
	$scope.questionNum = 0;
	var activeIndex = 0;
	
	$scope.nextQuestion = function () {
		console.log("$scope.question 1",$scope.question)
		activeIndex += 1;
		$scope.questionNum += 1;
		$scope.question = $scope.questions[activeIndex];
		console.log("$scope.question 2",$scope.question)
		
		if (!$scope.question) {
			$scope.showResults = true;
		}
	}
});

app.controller('syncCtrl', function($scope, dataSvc) {
	$scope.syncGroups = dataSvc.syncGroups;
	$scope.activeSyncGroup = $scope.syncGroups.length ? $scope.syncGroups[0] : [];
	
	$scope.setActiveGroup = function (group) {
		$scope.activeSyncGroup = group;
	};
	
	$scope.addGroup = function () {
		var newGroup = {
        id: $scope.syncGroups[$scope.syncGroups.length-1] ? $scope.syncGroups[$scope.syncGroups.length-1].id + 1 : 1,
        name: 'My Sync Group',
        syncedVideos: [],
        users: [
            {
                id: 1,
                name: 'Me',
                avatar: '/assets/images/icons/user-r2d2.png'
            }
        ]
    };
		$scope.syncGroups.push(newGroup);
		$scope.activeSyncGroup = newGroup;
	};
	
	var confirmDeleteElm = document.querySelector('.sync-groups .confirm-delete');
	$scope.confirmDeleteGroup = function (group) {
		confirmDeleteElm.classList.add('show');
	};
	var nameElm = document.querySelector('.sync-groups h2 .name');
	var inputElm = document.querySelector('.sync-groups h2 input');
	$scope.editGroupName = function () {
		nameElm.classList.toggle('hide');
		inputElm.classList.toggle('show');
	};
	
	$scope.deleteGroup = function (groupToDelete) {
		var i = $scope.syncGroups.findIndex(function (group) { return group.id == groupToDelete.id });

		$scope.syncGroups.splice(i,1);
		confirmDeleteElm.classList.remove('show');
		
		if ($scope.syncGroups.length < 1) {
			$scope.addGroup();
		} else {
			$scope.activeSyncGroup = $scope.syncGroups[0];
		}
	};
	
	$scope.toggleDelete = function () {
		confirmDeleteElm.classList.remove('show');
	};
	
	$scope.openDropdown = function () {
	  document.getElementById("dropdown").classList.toggle("show");
	};
	
	$scope.addUser = function () {
		console.log("Add user");
	};
	
	window.onclick = function(event) {
	  if (!event.target.matches('.dropdown-btn')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    for (var i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
	  }
	}
});

function preload () {
    var imageArray = [
    	"/assets/images/icons/smile-1.png",
    	"/assets/images/icons/smile-2.png",
    	"/assets/images/icons/smile-3.png",
    	"/assets/images/icons/thumbs-up.png",
    	"/assets/images/icons/thumbs-down.png",
	    "assets/images/lifeofpi.png",
	    "assets/images/americanbeauty.png",
	    "assets/images/et.png",
	    "assets/images/theshining.png",
	    "assets/images/lordoftherings.png",
	    "assets/images/breakfastattiffanys.png",
	    "assets/images/thematrix.png",
	    "assets/images/interstellar.png",
	    "assets/images/panslabyrinth-scene.png",
	    "assets/images/memiors.png",
	    "assets/images/harryp.png",
	    "assets/images/avatar.png",
	    "assets/images/madmax.png",
	    "assets/images/ModernFamily.png",
	    "assets/images/Parenthood.png",
	    "assets/images/FullerHouse.png",
	    "assets/images/FreshOffTheBoat.png",
	    "assets/images/thelastfiveyears.png",
	    "assets/images/littlemisssunshine.png",
	    "assets/images/sunshinecleaning.png",
	    "assets/images/awaywego.png",
	    "assets/images/matrix.png",
	    "assets/images/inception.png",
	    "assets/images/shutterisland.png",
	    "assets/images/memento.png",
	    "assets/images/twilight.png",
	    "assets/images/harrypotter.png",
	    "assets/images/thecraft.png",
	    "assets/images/eragon.png",
	    "assets/images/ladybird.png",
	    "assets/images/Us.png",
        "assets/images/vice.png",
        "assets/images/Juno.png",
        "assets/images/Moonlight.png",
        "assets/images/heathers.png",
        "assets/images/TICKLED.png",
        "assets/images/Joy.png",
        "assets/images/lalaland.png",
        "assets/images/ParanormalActivity.png",
        "assets/images/littlemisssunshine.png",
        "assets/images/inception.png"
	];
    var imageObj = new Image();
    for (var i = 0; i <= imageArray.length - 1; i++) {
        document.write('<img style="position:absolute;left:-99999999999999px;" src="' + imageArray[i] + '" />');// Write to page (uncomment to check images)
        imageObj.src = imageArray[i];
    }
};
preload();