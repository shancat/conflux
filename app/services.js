var app = angular.module('confluxApp');

app.factory('dataSvc', function() {
	var factory = {};
	
	factory.primaryNav = [
		{
			name: "Browse",
			state: "browse"
		},
		{
			name: "Collections",
			state: "collections"
		},
		{
			name: "Sync",
			state: "sync"
		},
		{
			name: "Wayfinder",
			state: "wayfinder"
		}
	];
	
	factory.filterTypes = {
		toggle: 1,
		multiselect: 2,
		slider: 3,
		exclude: 4
	};
	
    factory.filters = [
        {
        	name: "TV",
        	propName: "movie",
        	type: factory.filterTypes.toggle,
        	stringOrder: 5,
        	activeCondition: false,
        	active: false
        },
        {
        	name: "Movies",
        	propName: "movie",
        	type: factory.filterTypes.toggle,
        	stringOrder: 6,
        	activeCondition: true,
        	active: false
        },
        {
        	name: "Watchlist",
        	propName: "watchlist",
        	type: factory.filterTypes.toggle,
        	stringOrder: 13,
        	activeCondition: true,
        	active: false
        },
        {
        	name: "Genre",
        	propName: "genre",
        	stringOrder: 3,
        	type: factory.filterTypes.multiselect,
        	active: false,
        	values: [
        		{name: "comedy", active: false},
        		{name: "drama", active: false},
        		{name: "mystery", active: false},
        		{name: "competition", active: false},
        		{name: "tutorial", active: false},
        		{name: "animated", active: false},
        		{name: "horror", active: false},
        		{name: "thriller", active: false},
        		{name: "action", active: false},
        		{name: "adventure", active: false},
        		{name: "science-fiction", active: false},
        		{name: "romance", active: false},
        		{name: "history", active: false},
        		{name: "crime", active: false},
        	]
        },
        {
        	name: "Year",
        	propName: "year",
        	type: factory.filterTypes.multiselect,
        	stringOrder: 7,
        	active: false,
        	values: [
        		{name: 1968, active: false},
        		{name: 1973, active: false},
        		{name: 1980, active: false},
        		{name: 1996, active: false},
        		{name: 1997, active: false},
        		{name: 1998, active: false},
        		{name: 2000, active: false},
        		{name: 2001, active: false},
        		{name: 2003, active: false},
        		{name: 2005, active: false},
        		{name: 2006, active: false},
        		{name: 2007, active: false},
        		{name: 2008, active: false},
        		{name: 2009, active: false},
        		{name: 2010, active: false},
        		{name: 2011, active: false},
        		{name: 2012, active: false},
        		{name: 2013, active: false},
        		{name: 2015, active: false},
        		{name: 2016, active: false},
        		{name: 2017, active: false},
        		{name: 2018, active: false},
        		{name: 2019, active: false}
            ]
        },
        {
        	name: "Rating",
        	propName: "rating",
        	type: factory.filterTypes.multiselect,
        	stringOrder: 1,
        	active: false,
        	values: [
        		{name: "G", active: false},
        		{name: "PG", active: false},
        		{name: "PG-13", active: false},
        		{name: "R", active: false},
        		{name: "NC-17", active: false},
        		{name: "Unrated", active: false},
        		{name: "TV-Y", active: false},
        		{name: "TV-Y7", active: false},
        		{name: "TV-G", active: false},
        		{name: "TV-PG", active: false},
        		{name: "TV-14", active: false},
        		{name: "TV-MA", active: false}
        	]
        },
        {
        	name: "Runtime",
        	propName: "length",
        	stringOrder: 9,
        	type: factory.filterTypes.slider,
        	active: false,
        	values: [
        		{name: "30 mins and under", active: false},
        		{name: "31–60 mins", active: false},
        		{name: "61—90 mins", active: false},
        		{name: "91–120 mins", active: false},
        		{name: "120–180 mins", active: false},
        		{name: "180 mins and over", active: false}
        	]
        },
        {
        	name: "User Rating",
        	propName: "userRating",
        	active: false,
        	stringOrder: 1,
        	type: factory.filterTypes.multiselect,
        	values: [
        		{name: 1, active: false},
        		{name: 2, active: false},
        		{name: 3, active: false},
        		{name: 4, active: false},
        		{name: 5, active: false}
        	]
        },
        {
        	name: "Poster Color",
        	propName: "color",
        	active: false,
        	stringOrder: 12,
        	type: factory.filterTypes.multiselect,
        	values: [
        	    {name: "pink", active: false},
        		{name: "yellow", active: false},
        		{name: "brown", active: false},
        		{name: "white", active: false},
        		{name: "orange", active: false},
        		{name: "grey", active: false},
        		{name: "green", active: false},
        		{name: "blue", active: false},
        		{name: "multi", active: false},
        		{name: "black", active: false},
        		{name: "red", active: false},
        		{name: "purple", active: false},
        		{name: "neutral", active: false}
            ]
        },
        {
        	name: "Content",
        	propName: "content",
        	active: false,
        	stringOrder: 8,
        	type: factory.filterTypes.exclude,
        	values: [
        		{name: "profanity", active: false},
        		{name: "sexual content", active: false},
        		{name: "gore", active: false},
        		{name: "blood", active: false},
        		{name: "murder", active: false},
        		{name: "violence", active: false},
        		{name: "stabbing", active: false},
        		{name: "paranormal", active: false},
        		{name: "satanic", active: false},
        		{name: "witchcraft", active: false},
        		{name: "gun", active: false},
        		{name: "drugs", active: false},
                {name: "language", active: false}
        	]
        },
        {
        	name: "Language",
        	propName: "language",
        	active: false,
        	stringOrder: 2,
        	type: factory.filterTypes.multiselect,
        	values: [
        		{name: "English", active: false},
        		{name: "Spanish", active: false},
        		{name: "French", active: false},
        		{name: "Mandarin", active: false},
        		{name: "Danish", active: false},
        		{name: "Russian", active: false},
        		{name: "Korean", active: false},
        		{name: "Portuguese", active: false}
        	]
        },
        {
        	name: "Price",
        	propName: "price",
        	active: false,
        	stringOrder: 11,
        	type: factory.filterTypes.multiselect,
        	values: [
                {name: "Free with Subscription", active: false},
                {name: "Under $5", active: false},
                {name: "$5-$20", active: false},
                {name: "Over $20", active: false}
            ]
        },
        {
        	name: "Quality",
        	propName: "quality",
        	active: false,
        	stringOrder: 10,
        	type: factory.filterTypes.multiselect,
        	values: [
        		{name: "720 SD", active: false},
        		{name: "1080 HD", active: false},
        		{name: "4K", active: false},
        		{name: "Dolby Vision", active: false}
        	]
        }
    ];
	
    factory.videos = [
        {
            id: 1,
            title:"Jane the Virgin",
            poster:"/conflux/assets/images/JaneTheVirgin.png",
            rating: "TV-PG",
            userRating:5,
            description:"",
            category:"4",
            genre:["comedy"],
            movie: false,
            year: 2008,
            content: ["profanity"],
            length: null,
            language: ["English","Spanish"],
            color: ["pink","yellow"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 2,
            title:"Dear White People",
            poster:"/conflux/assets/images/DearWhitePeople.png",
            rating: "TV-PG13",
            userRating:4,
            description:"",
            category:"4",
            genre:["comedy", "drama"],
            movie: false,
            year: 2011,
            content: ["profanity","sexual content"],
            length: null,
            language: ["English","Spanish","French"],
            color: ["brown","white"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 3,
            title:"Parenthood",
            poster:"/conflux/assets/images/Parenthood.png",
            rating: "TV-PG",
            userRating:5,
            description:"",
            category:"4",
            genre:["comedy", "drama"],
            movie: false,
            year: 2009,
            content: ["profanity"],
            length: null,
            language: ["English","Spanish"],
            color: ["orange"],
            price: "Over $20",
            quality: "1080 HD"
        },
        {
            id: 4,
            title:"The Marvelous Mrs. Maisel",
            poster:"/conflux/assets/images/MarvelousMrsMaisel.png",
            rating: "TV-PG",
            userRating:3,
            description:"",
            category:"4",
            genre:["comedy"],
            movie: false,
            year: 2017,
            content: ["profanity"],
            length: null,
            language: ["English"],
            color: ["pink","grey"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 5,
            title:"Psych",
            poster:"/conflux/assets/images/psych.png",
            rating: "TV-PG",
            userRating:4,
            description:"",
            category:"4",
            genre:["comedy", "mystery"],
            movie: false,
            year: 2003,
            content: ["profanity"],
            length: null,
            language: ["English","Spanish"],
            color: ["green","brown"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 6,
            title:"Will and Grace",
            poster:"/conflux/assets/images/WillAndGrace.png",
            rating: "TV-PG13",
            userRating:3,
            description:"",
            category:"4",
            genre:["comedy"],
            movie: false,
            year: 2000,
            content: ["profanity"],
            length: null,
            language: ["English","Spanish"],
            color: ["white","brown"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 7,
            title:"The Great British Baking Show",
            poster:"/conflux/assets/images/GreatBritishBaking.png",
            rating: "TV-PG",
            userRating:5,
            description:"",
            category:"5",
            genre:["competition"],
            movie: false,
            year: 2010,
            content: [],
            length: null,
            language: ["English"],
            color: ["blue"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 8,
            title:"Bob Ross Painting Show",
            poster:"/conflux/assets/images/BobRoss.png",
            rating: "TV-PG",
            userRating:5,
            description:"",
            category:"5",
            genre:["tutorial"],
            movie: false,
            year: 1997,
            content: [],
            length: null,
            language: ["English"],
            color: ["white"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 9,
            title:"Fuller House",
            poster:"/conflux/assets/images/FullerHouse.png",
            rating: "TV-PG",
            userRating:3,
            description:"",
            category:"5",
            genre:["comedy"],
            movie: false,
            year: 2016,
            content: [],
            length: null,
            language: ["English","Spanish"],
            color: ["brown","yellow"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 10,
            title:"Adventure Time",
            poster:"/conflux/assets/images/AdventureTime.png",
            rating: "TV-PG",
            userRating:5,
            description:"",
            category:"5",
            genre:["animated","comedy"],
            movie: false,
            year: 2015,
            content: [],
            length: null,
            language: ["English","Spanish"],
            color: ["pink"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 11,
            title:"Modern Family",
            poster:"/conflux/assets/images/ModernFamily.png",
            rating: "TV-PG",
            userRating:4,
            description:"",
            category:"5",
            genre:["comedy"],
            movie: false,
            year: 2011,
            content: [],
            length: null,
            language: ["English","Spanish"],
            color: ["white"],
            price: "Over $20",
            quality: "1080 HD"
        },
        {
            id: 12,
            title:"Fresh Off the Boat",
            poster:"/conflux/assets/images/FreshOffTheBoat.png",
            rating: "TV-PG",
            userRating:5,
            description:"",
            category:"5",
            genre:["comedy"],
            movie: false,
            year: 2012,
            content: [],
            length: null,
            language: ["English","Spanish","Mandarin"],
            color: ["multi"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 13,
            title:"The Shining",
            poster:"/conflux/assets/images/TheShining.png",
            rating: "R",
            userRating:5,
            description:"",
            category:"1",
            genre:["horror"],
            movie: true,
            year: 1980,
            content: ["gore","blood","murder","violence", "stabbing"],
            length: 146,
            language: ["English","Spanish"],
            color: ["brown"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 14,
            title:"The Exorcist",
            poster:"/conflux/assets/images/TheExorcist.png",
            rating: "R",
            userRating:4,
            description:"",
            category:"1",
            genre:["horror"],
            movie: true,
            year: 1973,
            content: ["gore","blood","violence", "stabbing", "paranormal","satanic"],
            length: 158,
            language: ["English","Spanish"],
            color: ["black"],
            price: "Under $5",
            quality: "1080 HD"
        },
        {
            id: 15,
            title:"Rosemary's Baby",
            poster:"/conflux/assets/images/RosemarysBaby.png",
            rating: "R",
            userRating:4,
            description:"",
            category:"1",
            genre:["horror", "drama"],
            movie: true,
            year: 1968,
            content: ["gore","blood","violence", "stabbing"],
            length: 137,
            language: ["English"],
            color: ["green"],
            price: "Under $5",
            quality: "720 SD"
        },
        {
            id: 16,
            title:"Don't Look Now",
            poster:"/conflux/assets/images/DontLookNow.png",
            rating: "R",
            userRating:3,
            description:"",
            category:"1",
            genre:["horror", "drama", "thriller"],
            movie: true,
            year: 1973,
            content: ["gore","blood","violence", "murder"],
            length: 110,
            language: ["English","Spanish"],
            color: ["red","orange","black"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 17,
            title:"Inferno",
            poster:"/conflux/assets/images/Inferno.png",
            rating: "R",
            userRating:4,
            description:"",
            category:"1",
            genre:["horror"],
            movie: true,
            year: 1980,
            content: ["gore","blood","violence", "murder", "witchcraft"],
            length: 106,
            language: ["English"],
            color: ["black","pink"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 18,
            title:"Paranormal Activity",
            poster:"/conflux/assets/images/ParanormalActivity.png",
            rating: "R",
            userRating:2,
            description:"",
            category:"1",
            genre:["horror", "mystery", "thriller"],
            movie: true,
            year: 2007,
            content: ["gore","paranormal","violence", "murder", "witchcraft"],
            length: 86,
            language: ["English", "Danish", "Russian", "Spanish"],
            color: ["black","red","blue"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 19,
            title:"Looper",
            poster:"/conflux/assets/images/Looper.png",
            rating: "R",
            userRating:3,
            description:"",
            category:"2",
            genre:["action", "mystery", "thriller", "adventure"],
            movie: true,
            year: 2012,
            content: ["gore","violence", "murder"],
            length: 120,
            language: ["English"],
            color: ["white"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 20,
            title:"Space Between Us",
            poster:"/conflux/assets/images/SpaceBetweenUs.png",
            rating: "PG-13",
            userRating:3,
            description:"",
            category:"2",
            genre:["action", "drama", "science-fiction","adventure"],
            movie: true,
            year: 2016,
            content: ["violence"],
            length: 120,
            language: ["English"],
            color: ["black","green"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 21,
            title:"Us",
            poster:"/conflux/assets/images/Us.png",
            rating: "R",
            userRating:3,
            description:"",
            category:"2",
            genre:["horror", "mystery", "thriller"],
            movie: true,
            year: 2019,
            content: ["gore","paranormal","violence", "murder"],
            length: 120,
            language: ["English", "Spanish", "Korean"],
            color: ["red"],
            price: "$5-$20",
            quality: "4k"
        },
        {
            id: 22,
            title:"All the Money in the World",
            poster:"/conflux/assets/images/AllTheMoney.png",
            rating: "R",
            userRating:3,
            description:"",
            category:"2",
            genre:["drama", "mystery", "thriller"],
            movie: true,
            year: 2017,
            content: ["violence"],
            length: 150,
            language: ["English","Korean","Portuguese"],
            color: ["blue","green"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 23,
            title:"Hard Candy",
            poster:"/conflux/assets/images/HardCandy.png",
            rating: "R",
            userRating:3,
            description:"",
            category:"2",
            genre:["drama", "mystery", "thriller"],
            movie: true,
            year: 2005,
            content: ["violence"],
            length: 110,
            language: ["English", "Spanish"],
            color: ["white","red"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 24,
            title:"Joy",
            poster:"/conflux/assets/images/Joy.png",
            rating: "PG-13",
            userRating:5,
            description:"",
            category:"3",
            genre:["comedy", "drama", "thriller"],
            movie: true,
            year: 2015,
            content: ["gun","violence"],
            length: 122,
            language: ["English","French"],
            color: ["blue"],
            price: "Free with Subscription",
            quality: "4k"
        },
        {
            id: 25,
            title:"The Lobster",
            poster:"/conflux/assets/images/Lobster.png",
            rating: "R",
            userRating:2,
            description:"",
            category:"3",
            genre:["comedy", "drama","romance","mystery","thriller"],
            movie: true,
            year: 2015,
            content: ["sexual content"],
            length: 142,
            language: ["English","French","Spanish","Danish","Korean"],
            color: ["white"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 26,
            title:"Moonlight",
            poster:"/conflux/assets/images/Moonlight.png",
            rating: "R",
            userRating:5,
            description:"",
            category:"3",
            genre:["comedy", "drama"],
            movie: true,
            year: 2016,
            content: ["sexual content","gun","drugs"],
            length: 110,
            language: ["English","French","Spanish"],
            color: ["blue","pink","purple"],
            price: "Under $5",
            quality: "4k"
        },
        {
            id: 27,
            title:"Dismissed",
            poster:"/conflux/assets/images/Dismissed.png",
            rating: "PG-13",
            userRating:3,
            description:"",
            category:"3",
            genre:["comedy", "horror", "thriller"],
            movie: true,
            year: 2017,
            content: ["sexual content","violence"],
            length: 130,
            language: ["English","Spanish"],
            color: ["blue","green"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 28,
            title:"The Assassin",
            poster:"/conflux/assets/images/Assassin.png",
            rating: "R",
            userRating:4,
            description:"",
            category:"3",
            genre:["comedy", "drama", "history"],
            movie: true,
            year: 2015,
            content: ["sexual content","violence","murder","stabbing"],
            length: 130,
            language: ["English","Spanish","Mandarin"],
            color: ["red"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 29,
            title:"Snatch",
            poster:"/conflux/assets/images/Snatch.png",
            rating: "R",
            userRating:3,
            description:"",
            category:"2",
            genre:["comedy", "crime", "mystery","thriller"],
            movie: true,
            year: 2000,
            content: ["sexual content","violence","murder","gun"],
            length: 110,
            language: ["English","Spanish","French"],
            color: ["multi"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 30,
            title:"August: Osage County",
            poster:"/conflux/assets/images/august.png",
            rating: "R",
            userRating:4,
            description:"",
            category:"3",
            genre:["drama","romance"],
            movie: true,
            year: 2013,
            content: ["sexual content, language, violence"],
            length: 122,
            language: ["English","French","Spanish"],
            color: ["neutral"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 31,
            title:"Juno",
            poster:"/conflux/assets/images/Juno.png",
            rating: "PG-13",
            userRating:5,
            description:"",
            category:"6",
            genre:["comedy", "drama","romance"],
            movie: true,
            year: 2007,
            content: ["sexual content"],
            length: 122,
            language: ["English","French","Spanish"],
            color: ["orange"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 32,
            title:"Suspiria",
            poster:"/conflux/assets/images/suspiria.png",
            rating: "R",
            userRating:2,
            description:"",
            category:"1",
            genre:["thriller","horror"],
            movie: true,
            year: 2018,
            content: ["violence","blood","paranormal"],
            length: 122,
            language: ["English","French","Spanish"],
            color: ["red"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 33,
            title:"Ringu",
            poster:"/conflux/assets/images/ringu.png",
            rating: "R",
            userRating:3,
            description:"",
            category:"1",
            genre:["thriller","horror","mystery"],
            movie: true,
            year: 1998,
            content: ["violence","blood"],
            length: 122,
            language: ["English","French"],
            color: ["black","red"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 34,
            title:"Jacob's Ladder",
            poster:"/conflux/assets/images/jacobsladder.png",
            rating: "R",
            userRating:5,
            description:"",
            category:"1",
            genre:["thriller","horror","mystery"],
            movie: true,
            year: 1990,
            content: ["violence","blood"],
            length: 182,
            language: ["English","Spanish"],
            color: ["white","red"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 35,
            title:"The Love Witch",
            poster:"/conflux/assets/images/lovewitch.png",
            rating: "R",
            userRating:4,
            description:"",
            category:"1",
            genre:["thriller","horror","mystery"],
            movie: true,
            year: 2016,
            content: ["violence","blood"],
            length: 102,
            language: ["English","Spanish"],
            color: ["red"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 36,
            title:"Dark Water",
            poster:"/conflux/assets/images/darkwater.png",
            rating: "R",
            userRating:1,
            description:"",
            category:"1",
            genre:["thriller","horror","mystery"],
            movie: true,
            year: 2005,
            content: ["violence","blood","stabbing"],
            length: 102,
            language: ["English","Spanish"],
            color: ["red"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 37,
            title:"A Monster Calls",
            poster:"/conflux/assets/images/amonstercalls.png",
            rating: "R",
            userRating:4,
            description:"",
            category:"2",
            genre:["thriller","horror","mystery"],
            movie: true,
            year: 2016,
            content: ["violence","blood"],
            length: 132,
            language: ["English","Spanish","Danish"],
            color: ["brown"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 38,
            title:"The Omen",
            poster:"/conflux/assets/images/theomen.png",
            rating: "R",
            userRating:4,
            description:"",
            category:"2",
            genre:["thriller","horror","mystery"],
            movie: true,
            year: 2016,
            content: ["violence","blood"],
            length: 132,
            language: ["English","Spanish","Danish"],
            color: ["black","red"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 39,
            title:"Pan's Labyrinth",
            poster:"/conflux/assets/images/panslabyrinth.png",
            rating: "R",
            userRating:5,
            description:"",
            category:"2",
            genre:["thriller","horror","mystery"],
            movie: true,
            year: 2006,
            content: ["violence","blood","witchcraft"],
            length: 101,
            language: ["English","Spanish"],
            color: ["blue","grey"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 40,
            title:"Donnie Darko",
            poster:"/conflux/assets/images/donniedarko.png",
            rating: "R",
            userRating:5,
            description:"",
            category:"2",
            genre:["thriller","mystery"],
            movie: true,
            year: 2001,
            content: ["violence","blood","witchcraft"],
            length: 98,
            language: ["English","Spanish","Korean"],
            color: ["black"],
            price: "Free with Subscription",
            quality: "720 SD"
        },
        {
            id: 41,
            title:"The Craft",
            poster:"/conflux/assets/images/thecraft.png",
            rating: "R",
            userRating:4,
            description:"",
            category:"2",
            genre:["thriller","drama"],
            movie: true,
            year: 1996,
            content: ["violence","blood","witchcraft", "sexual content"],
            length: 108,
            language: ["English","Spanish","Korean","Mandarin"],
            color: ["black","neutral"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 42,
            title:"The Dead Zone",
            poster:"/conflux/assets/images/deadzone.png",
            rating: "R",
            userRating:4,
            description:"",
            category:"2",
            genre:["thriller","drama"],
            movie: true,
            year: 1983,
            content: ["violence","blood", "sexual content"],
            length: 108,
            language: ["English","Spanish","Korean","Mandarin"],
            color: ["black","blue"],
            price: "Free with Subscription",
            quality: "1080 HD"
        },
        {
            id: 43,
            title:"Bohemian Rhapsody",
            poster:"/conflux/assets/images/bohemianrhapsody.png",
            rating: "PG-13",
            userRating:5,
            description:"",
            category:"3",
            genre:["drama","history"],
            movie: true,
            year: 2018,
            content: ["profanity", "sexual content"],
            length: 128,
            language: ["English","Spanish"],
            color: ["orange","pink","yellow"],
            price: "Free with Subscription",
            quality: "4k"
        },
        {
            id: 44,
            title:"A Star is Born",
            poster:"/assets/images/astarisborn.png",
            rating: "R",
            userRating:5,
            description:"",
            category:"3",
            genre:["drama","romance"],
            movie: true,
            year: 2018,
            content: ["profanity", "sexual content","suicide"],
            length: 128,
            language: ["English","Spanish"],
            color: ["grey","gold"],
            price: "Free with Subscription",
            quality: "4k"
        },
        {
            id: 45,
            title:"Vice",
            poster:"/conflux/assets/images/vice.png",
            rating: "R",
            userRating:5,
            description:"",
            category:"3",
            genre:["drama","history","comedy"],
            movie: true,
            year: 2018,
            content: ["profanity"],
            length: 128,
            language: ["English","Spanish"],
            color: ["black","yellow"],
            price: "Free with Subscription",
            quality: "4k"
        },
        {
            id: 46,
            title:"Eighth Grade",
            poster:"/assets/images/eighthgrade.png",
            rating: "R",
            userRating:5,
            description:"",
            category:"3",
            genre:["drama","comedy"],
            movie: true,
            year: 2018,
            content: ["profanity"],
            length: 128,
            language: ["English","Spanish"],
            color: ["yellow"],
            price: "Free with Subscription",
            quality: "4k"
        },
        {
            id: 47,
            title:"A Simple Favor",
            poster:"/conflux/assets/images/asimplefavor.png",
            rating: "R",
            userRating:5,
            description:"",
            category:"6",
            genre:["drama","comedy","mystery"],
            movie: true,
            year: 2018,
            content: ["profanity","murder"],
            length: 128,
            language: ["English","Spanish"],
            color: ["blue","pink"],
            price: "Free with Subscription",
            quality: "4k"
        },
        {
            id: 48,
            title:"Lady Bird",
            poster:"/conflux/assets/images/ladybird.png",
            rating: "R",
            userRating:5,
            description:"",
            category:"6",
            genre:["drama","comedy"],
            movie: true,
            year: 2018,
            content: ["profanity"],
            length: 128,
            language: ["English","Spanish"],
            color: ["orange","red"],
            price: "Free with Subscription",
            quality: "4k"
        },
        {
    		id: 49,
    		title:"Heathers",
    		poster:"/conflux/assets/images/heathers.png",
    		rating: "R",
    		userRating:2,
    		description:"",
    		category:"6",
    		genre:["drama","comedy","mystery","thriller"],
    		movie: true,
    		year: 2018,
    		content: ["profanity","murder","suicide"],
    		length: 128,
    		language: ["English","Spanish"],
    		color: ["pink","blue","white"],
    		price: "Free with Subscription",
    		quality: "1080 HD"
    	},
    	{
    		id: 50,
    		title:"Fargo",
    		poster:"/conflux/assets/images/fargo.png",
    		rating: "R",
    		userRating:5,
    		description:"",
    		category:"6",
    		genre:["drama","comedy"],
    		movie: true,
    		year: 1996,
    		content: ["profanity","murder","suicide"],
    		length: 128,
    		language: ["English","Spanish"],
    		color: ["red","white"],
    		price: "Free with Subscription",
    		quality: "1080 HD"
    	},
    	{
    		id: 51,
    		title:"Little Miss Sunshine",
    		poster:"/conflux/assets/images/littlemisssunshine.png",
    		rating: "R",
    		userRating:5,
    		description:"",
    		category:"6",
    		genre:["drama","comedy"],
    		movie: true,
    		year: 2006,
    		content: ["profanity","violence"],
    		length: 128,
    		language: ["English","Spanish"],
    		color: ["yellow"],
    		price: "Free with Subscription",
    		quality: "1080 HD"
    	},
    	{
    		id: 52,
    		title:"Office Space",
    		poster:"/conflux/assets/images/officespace.png",
    		rating: "R",
    		userRating:4,
    		description:"",
    		category:"6",
    		genre:["drama","comedy"],
    		movie: true,
    		year: 1999,
    		content: ["profanity","violence"],
    		length: 128,
    		language: ["English","Spanish"],
    		color: ["yellow","red"],
    		price: "Free with Subscription",
    		quality: "1080 HD"
    	}
    ];
	
    factory.categories = [
        {
           id: 1,
           name: "Paranormal and Occult Horror",
           videos: getVideosByCategoryId(1),
           isVisible: true,
           limit: 6,
           sortOrder: 3
        },
        {
           id: 2,
           name: "Urban Fantasy Thriller",
           videos: getVideosByCategoryId(2),
           isVisible: true,
           limit: 6,
           sortOrder: 2
        },
        {
           id: 3,
           name: "Dramas That Stick with You",
           videos: getVideosByCategoryId(3),
           isVisible: true,
           limit: 6,
           sortOrder: 1
        },
        {
           id: 4,
           name: "Binge-worthy TV Comedies",
           videos: getVideosByCategoryId(4),
           isVisible: true,
           limit: 6,
           sortOrder: 5
        },
        {
           id: 5,
           name: "Family Time TV",
           videos: getVideosByCategoryId(5),
           isVisible: true,
           limit: 6,
           sortOrder: 6
        },
        {
           id: 6,
           name: "Dark Comedies",
           videos: getVideosByCategoryId(6),
           isVisible: true,
           limit: 6,
           sortOrder: 4
        }
    ];
    
    factory.collections = [
    	{
    		id: 1,
    		name: 'So You Got Dumped',
    		description: "So you got dumped. Your world is ending and you don't know where your life is headed. Don't try to figure that out right now. Watch these movies instead.",
    		videos: getVideosByIds([24,30,35,43,44,46,47,48]),
    		likes: 12,
    		comments: [
    			{
    				id: 1,
    				userId: 1,
    				text: 'Seriously, this just happened to me and each of these movies exactly hit my mood. They were lighthearted and distracting.'
    			},
                {
    				id: 2,
    				userId: 2,
    				text: "I've never been dumped before, but I don't think these movies would be what I want..."
    			},
                {
    				id: 3,
    				userId: 3,
    				text: "Haha, this is so dramatic! :P"
    			}
    		]
    	},
        {
    		id: 2,
    		name: 'Movies to Scare the Crap Out of You',
    		description: "I made this collections of movies because sometimes I feel so numb I just want something that actually makes me jump. Trust me, you will not sleep after these movies.",
    		videos: getVideosByIds([42,40,41,39,37,32,21]),
    		likes: 12,
    		comments: [
    			{
    				id: 4,
    				userId: 3,
    				text: 'Okay, no joke, these actually had me jump out of my chair and spill my movie snacks everywhere. They were NO JOKE!'
    			},
                {
    				id: 5,
    				userId: 2,
    				text: "I can't say these movies made me lose sleep, but my heartrate was definitely going while the movie was on."
    			},
                {
    				id: 6,
    				userId: 1,
    				text: "I really hate scary movies, I shouldn't have even tried that list!"
    			}
    		]
    	},
        {
    		id: 3,
    		name: 'Chill TV shows to watch during dinner',
    		description: "I live alone and I always want to watch something while I eat my dinner. I picked these shows because they are short and don't have anything gross or overly emotional. Bon appetit!",
    		videos: getVideosByIds([1,4,5,9,10,11,12]),
    		likes: 12,
    		comments: [
    			{
    				id: 7,
    				userId: 2,
    				text: "Haha! I'm glad to know that I'm not the only one who eats dinner while watching TV!"
    			},
                {
    				id: 8,
    				userId: 3,
    				text: "I've tried to stop watching so much TV, but I loved these selections for my dinner and lunch break during the day."
    			},
                {
    				id: 9,
    				userId: 1,
    				text: "I love that this list had nothing gross! Haha, I tried to watch Grey's Anatomy during dinner... it was nasty."
    			}
    		]
    	},
        {
    		id: 4,
    		name: "Close Up Aesthetics",
    		description: "I picked these movies because their aesthetic, style, and posters capture my artistic style.",
    		videos: getVideosByIds([26,27,13,45,46]),
    		likes: 12,
    		comments: [
    			{
    				id: 16,
    				userId: 3,
    				text: "Ooh! I love a good aesthetic collection!"
    			},
                {
    				id: 17,
    				userId: 2,
    				text: "Lol, I don't always base my life on style, but when I do, it effects what movies I watch...?!"
    			},
                {
    				id: 18,
    				userId: 1,
    				text: "This is dumb. These movies have nothing to do with eachother."
    			}
    		]
    	},
        {
    		id: 5,
    		name: 'A marathon of badass ladies',
    		description: "Sometimes you just want a movie with some badass ladies. Even when they are kind of... well... evil, at least they do what they want!",
    		videos: getVideosByIds([30,35,44,47,15,24,28,31]),
    		likes: 12,
    		comments: [
    			{
    				id: 10,
    				userId: 2,
    				text: "This seems like a dumb list. Who needs this?"
    			},
                {
    				id: 11,
    				userId: 1,
    				text: "Love this!! This is the 2019 energy I want to bring this year."
    			},
                {
    				id: 12,
    				userId: 3,
    				text: "Rosemary's baby? Odd flex, but okay!"
    			}
    		]
    	},
        {
    		id: 6,
    		name: "Classic 'Dad' Movies",
    		description: "Not to stereotype, but these are exactly the types of movies my Dad is obsessed with, so I assume most dads are kind of into.",
    		videos: getVideosByIds([50,40,39,29,23,17,45]),
    		likes: 12,
    		comments: [
    			{
    				id: 13,
    				userId: 1,
    				text: "Okay, that's crazy. These are literally my Dad's favorite movies."
    			},
                {
    				id: 14,
    				userId: 2,
    				text: "This is weird, I don't think my dad would watch anything besides Monty Python."
    			},
                {
    				id: 15,
    				userId: 3,
    				text: "Probably not exactly my Dad's style, but I see where you're coming from. #classicDads"
    			}
    		]
    	}
    ];
	
	factory.syncGroups = [
        {
            id: 1,
            name: 'Girlfriend Sync',
            syncedVideos: factory.categories[5].videos,
            users: [
                {
                    id: 1,
                    name: 'Me',
                    avatar: '/conflux/assets/images/icons/user-r2d2.png'
                },
                {
                    id: 2,
                    name: 'Emma',
                    avatar: '/conflux/assets/images/icons/user-unicorn.png'
                }
            ]
        },
        {
            id: 2,
            name: 'Study Group',
            syncedVideos: factory.categories[1].videos,
            users: [
                {
                    id: 1,
                    name: 'Me',
                    avatar: '/conflux/assets/images/icons/user-r2d2.png'
                },
                {
                    id: 2,
                    name: 'Jeremy',
                    avatar: '/conflux/assets/images/icons/user-unicorn.png'
                },
                {
                    id: 3,
                    name: 'Chrissy',
                    avatar: '/conflux/assets/images/icons/user-unicorn.png'
                }
            ]
        },
        {
            id: 3,
            name: 'Me and Mom',
            syncedVideos: factory.categories[4].videos,
            users: [
                {
                    id: 1,
                    name: 'Me',
                    avatar: '/conflux/assets/images/icons/user-r2d2.png'
                },
                {
                    id: 2,
                    name: 'Angela',
                    avatar: '/conflux/assets/images/icons/user-unicorn.png'
                }
            ]
        }
    ];
	
	factory.getFilteredVideos = function (filters) {
	    return factory.videos.filter(function (video) {
	        return filters.every(function (filter) {
	            if (filter.type == factory.filterTypes.multiselect) {
	                // MULTISELECT
	                return filter.values.some(function (value) {
	                    return angular.isArray(video[filter.propName]) ? video[filter.propName].includes(value.name) : video[filter.propName] == value.name;
	                });
	            } else if (filter.type == factory.filterTypes.exclude) {
	                // EXCLUDE
	                return filter.values.every(function (value) {
	                    return !video[filter.propName].includes(value.name);
	                });
	            } else if (filter.type == factory.filterTypes.toggle) {
	                // TOGGLE
	                return video[filter.propName] == filter.activeCondition;
	            } else {
	                // Fallback
	                return false;
	            }
	        });
	    });
	};

	factory.getSearchResults = function (query) {
	    query = query.replace(/comed\w+/,'comedy');
	    query = query.replace(/myster\w+/,'mystery');
	    query = query.replace('dramas','drama');
	    query = query.replace('thrillers','thriller');
	    var queryWordArr = query.toLowerCase().replace(/ +/g,' ').split(' ');
	    var results = angular.copy(factory.videos);
	    var excludedWords = ["with","the","language","movie","movies","rating","rated","poster","posters","a","and","released","in","under","over","from"];
	    
	    queryWordArr = queryWordArr.filter(function (queryWord) {
	        return !excludedWords.toString().toLowerCase().includes(queryWord);
	    });
	    
	    queryWordArr.forEach(function (queryWord) {
	        results = results.filter(function (video) {
                for (var property in video) {
                    if (video[property] && video[property].toString().toLowerCase().includes(queryWord)) {
                        return true;
                    }
                }
                return false;
	        });
	    });
	    return results;
	};
	
	factory.getNewCollectionId = function () {
	    return factory.collections[factory.collections.length-1].id+1;
	};
	
	factory.saveCollection = function (newCollection) {
	    var index = factory.collections.findIndex(function (collection) {
	        return collection.id == newCollection.id;
	    });
	    
	    if (index > -1) {
	        // save
	        factory.collections[index] = newCollection;
	    } else {
	        // add new
	        factory.collections.push(newCollection);
	    }
	};
	
	factory.getVideoById = function (id) {
		return factory.videos.find(function (video) {
			return video.id == id;
		});
	};
	
	factory.getCollectionById = function (id) {
		return factory.collections.find(function (collection) {
			return collection.id == id;
		});
	};
	
	factory.createCollection = function (id, name, desc) {
		return {
    		id: id,
    		name: name,
    		description: desc,
    		videos: [],
    		likes: 0,
    		comments: []
    	};
	};
	
	factory.getCategoryById = function (id) {
		return factory.categories.find(function (category) {
			return category.id == id;
		});
	};
	
	factory.resetActiveFilters = function () {
	    factory.filters.forEach(function (filter) {
	        filter.active = false;
	        if (filter.values) {
	            filter.values.forEach(function (value) {
	                value.active = false;
	            })
	        }
	    });
	};
	    
    factory.questionTypes = {
        QUIZTYPE: 1,
        MOVIETV: 2,
        AESTHETIC: 3,
        THUMBSUP: 4,
        MULTISELECT: 5,
        SLIDER: 6,
        QUALIFIERS: 7,
        VERSUS: 8
    };
	
	factory.generateQuiz = function () {
        var questionsA = [ //quiz alone or together prompt (This will probably never differ and doesn't need to be in this format)
            {
                id:1,
                questionType:1,
                options: ["Take quiz alone","Take quiz with group"],
                active: true
            }
        ];
        
        var questionsB = [ //this is the movies, tv, both quetion (This will probably never differ and doesn't need to be in this format)
            {
                id:2,
                questionType:2,
                stem:"What are you in the mood for?",
                options: ["Movies","TV","Either"],
                active: false
            }
        ];
        
        var questionsC = [ //one large aesthetic image with smiley face answer options (the prompt may change each time slightly I think)
            {
                id:3,
                questionType:3,
        		stem: "How does this make you feel?",
                image: "conflux/assets/images/lifeofpi.png"
            },
            {
                id:8,
                questionType:3,
        		stem: "How does this make you feel?",
                image: "conflux/assets/images/americanbeauty.png"
            },
            {
                id:9,
                questionType:3,
        		stem: "How does this make you feel?",
                image: "conflux/assets/images/et.png"
            },
            {
                id:10,
                questionType:3,
        		stem: "How does this make you feel?",
                image: "conflux/assets/images/theshining.png"
            },
            {
                id:11,
                questionType:3,
        		stem: "How does this make you feel?",
                image: "conflux/assets/images/lordoftherings.png"
            },
            {
                id:12,
                questionType:3,
        		stem: "How does this make you feel?",
                image: "conflux/assets/images/breakfastattiffanys.png"
            },
            {
                id:13,
                questionType:3,
        		stem: "How does this make you feel?",
                image: "conflux/assets/images/thematrix.png"
            },
            {
                id:14,
                questionType:3,
        		stem: "How does this make you feel?",
                image: "conflux/assets/images/interstellar.png"
            },
            {
                id:15,
                questionType:3,
        		stem: "How does this make you feel?",
                image: "conflux/assets/images/panslabyrinth-scene.png"
            },
        //     {
        //         id:16,
        //         questionType:3,
        // 		stem: "How does this make you feel?",
        //         image: "conflux/assets/images/pirates.png"
        //     },
            {
                id:17,
                questionType:3,
        		stem: "How does this make you feel?",
                image: "conflux/assets/images/memiors.png"
            },
            {
                id:18,
                questionType:3,
        		stem: "How does this make you feel?",
                image: "conflux/assets/images/harryp.png"
            },
        //     {
        //         id:19,
        //         questionType:3,
        // 		stem: "How does this make you feel?",
        //         image: "conflux/assets/images/soundofmusic.png"
        //     },
            {
                id:20,
                questionType:3,
        		stem: "How does this make you feel?",
                image: "conflux/assets/images/avatar.png"
            },
            {
                id:21,
                questionType:3,
        		stem: "How does this make you feel?",
                image: "conflux/assets/images/madmax.png"
            }
        ];
        
        var questionsD = [ //yes-no to a grouping of movie posters with a lable (the prompt may change each time slightly I think)
            {
                id:4,
                questionType:4,
                stem:"Go with your gut.",
                images: ["conflux/assets/images/ModernFamily.png","conflux/assets/images/Parenthood.png","conflux/assets/images/FullerHouse.png","conflux/assets/images/FreshOffTheBoat.png"],
                category: "The Epitome of Dysfunctional Family TV"
            },
            {
                id:35,
                questionType:4,
                stem:"Trust your instinct.",
                images: ["conflux/assets/images/ringu.png","conflux/assets/images/theomen.png","conflux/assets/images/TheExorcist.png","conflux/assets/images/RosemarysBaby.png"],
                category: "Slightly Vintage Scary Movies"
            },
            {
                id:22,
                questionType:4,
                stem:"Quick yes or no.",
                images: ["conflux/assets/images/astarisborn.png","conflux/assets/images/bohemianrhapsody.png","conflux/assets/images/thelastfiveyears.png","conflux/assets/images/lalaland.png"],
                category: "Modern movie musicals"
            },
            {
                id:23,
                questionType:4,
                stem:"Thumbs up, thumbs down.",
                images: ["conflux/assets/images/Juno.png","conflux/assets/images/littlemisssunshine.png","conflux/assets/images/sunshinecleaning.png","conflux/assets/images/awaywego.png"],
                category: "Artsy movies but not in a pretentious way"
            },
            {
                id:24,
                questionType:4,
                stem:"What does your gut say?",
                images: ["conflux/assets/images/matrix.png","conflux/assets/images/inception.png","conflux/assets/images/shutterisland.png","conflux/assets/images/memento.png"],
                category: "Movies you’ll need explained to you"
            },
            {
                id:25,
                questionType:4,
                stem:"Think quick!",
                images: ["conflux/assets/images/twilight.png","conflux/assets/images/harrypotter.png","conflux/assets/images/thecraft.png","conflux/assets/images/eragon.png"],
                category: "Some supernatural youths"
            }
        ];
        
        var questionsE = [ //multi-select of moods, i have the options embedded so that we can have slightly different prompts and options
            {
                id:5,
                questionType:5,
                stem:"What's the mood?",
                options: ["romance","action","horror","crime","mystery","drama","comedy","thriller","sci-fi"]
            },
            {
                id:26,
                questionType:5,
                stem:"Looking to...?",
                options: ["sing-along","gasp","cry","scream","laugh","dance","learn","cringe","zone-out"]
            },
            {
                id:27,
                questionType:5,
                stem:"What's the vibe?",
                options: ["goofy","peaceful","sleepy","joyous","spooky","bored","sparkly","dull","gorey"]
            }
        ];
        
        
        var questionsF = [ //This is the slidey scale question, we may have different comparisons they do for different versions
            {
                id:6,
                questionType:6,
                stem:"Follow your heart.",
                optionPairs: [["Sad","Happy"],["Scary","Fun"],["Historical","Modern"]]
            },
            {
                id:27,
                questionType:6,
                stem:"Weigh your options.",
                optionPairs: [["Artsy","Actiony"],["Animated","Live"],["Short","Long"]]
            },
            {
                id:28,
                questionType:6,
                stem:"Pick your poison.",
                optionPairs: [["Silly","Serious"],["Vintage","Recent"],["Glamorous","Simple"]]
            }
        ];
        
        var questionsG = [ // Pre filters test (This will probably never differ and doesn't need to be in this format)
            {
                id:7,
                questionType:7,
                stem:"Any of these a concern?",
                options: ["Ratings","Content","Runtime","Quality"]
            }
        ];
        
        var questionsH = [ // This versus that
            {
                id:29,
                questionType:8,
                stem:"This or that?",
                options: ["conflux/assets/images/ladybird.png","conflux/assets/images/Us.png"]
            },
            {
                id:30,
                questionType:8,
                stem:"This or that?",
                options: ["conflux/assets/images/vice.png","conflux/assets/images/Juno.png"]
            },
            {
                id:31,
                questionType:8,
                stem:"This or that?",
                options: ["conflux/assets/images/Moonlight.png","conflux/assets/images/heathers.png"]
            },
            {
                id:32,
                questionType:8,
                stem:"This or that?",
                options: ["conflux/assets/images/TICKLED.png","conflux/assets/images/Joy.png"]
            },
            {
                id:33,
                questionType:8,
                stem:"This or that?",
                options: ["conflux/assets/images/lalaland.png","conflux/assets/images/ParanormalActivity.png"]
            },
            {
                id:33,
                questionType:8,
                stem:"This or that?",
                options: ["conflux/assets/images/littlemisssunshine.png","conflux/assets/images/inception.png"]
            }
        ];
        
        function randomSort () {
            return 0.5 - Math.random();
        }
        
        // Add 1 random question of every type
        var allQuestions = []
            .concat(questionsC.sort(randomSort).slice(0,2))
            .concat(questionsD.sort(randomSort).slice(0,2))
            .concat(questionsE.sort(randomSort).slice(0,2))
            .concat(questionsF.sort(randomSort).slice(0,2))
            .concat(questionsG.sort(randomSort).slice(0,1))
            .concat(questionsH.sort(randomSort).slice(0,2))
        
        // Put questions in random order and add 
        allQuestions
            .sort(randomSort)
            .splice(0,0,questionsA[0],questionsB[0]);
            
        return allQuestions;
	};
	
	function getVideosByIds (ids) {
	    return ids.map(function (id) {
	        return factory.videos.find(function (video) {
    			return video.id == id;
    		});
	    });
	}
	
    function getVideosByCategoryId(id){
		return factory.videos.filter(function (video) {
			return video.category == id;
		})
    }
    
    function getListValues(){
        var masterList = [];
        for(var i = 0; i < factory.videos.length; i++){
            for(var j = 0; j < factory.videos[i].language.length; j++){
                masterList.push(factory.videos[i].language[j]);
            }
        }
        masterList = removeDuplicates(masterList);
        console.log(masterList);
    }
    
    function getValues(){
        var masterList = [];
        for(var i = 0; i < factory.videos.length; i++){
            masterList.push(factory.videos[i].rating);            
        }
        masterList = removeDuplicates(masterList);
        masterList = masterList.sort();
        console.log(masterList);
    }
    
    function removeDuplicates(arr){
	    let unique_array = []
	    for(let i = 0;i < arr.length; i++){
	        if(unique_array.indexOf(arr[i]) == -1){
	            unique_array.push(arr[i])
	        }
	    }
	    return unique_array
    }

	return {
		primaryNav: factory.primaryNav,
		secondaryNav: factory.secondaryNav,
		filterTypes: factory.filterTypes,
		filters: factory.filters,
		video: factory.videos,
		categories: factory.categories,
		collections: factory.collections,
		syncGroups: factory.syncGroups,
		getFilteredVideos: factory.getFilteredVideos,
		getSearchResults: factory.getSearchResults,
		getVideoById: factory.getVideoById,
		getNewCollectionId: factory.getNewCollectionId,
		getCategoryById: factory.getCategoryById,
		getCollectionById: factory.getCollectionById,
		questionTypes: factory.questionTypes,
		generateQuiz: factory.generateQuiz,
		createCollection: factory.createCollection,
		resetActiveFilters: factory.resetActiveFilters
	};
});

app.factory('animationSvc', function($rootScope) {
	var factory = {};
	var videoContainer = document.getElementById('single-video-container');
	var mainContainer = document.getElementById('container');
	
	factory.openVideo = function (video) {
		$rootScope.$broadcast('openVideo', {
			videoId: video.id
		});
		
		videoContainer.classList.add('active');
		mainContainer.classList.add('collapsed');
		mainContainer.onclick = function () {
		    this.onclick = function () {
		        factory.closeVideo();
		    }
		}
	};
	
	factory.closeVideo = function () {
		$rootScope.currentVideoId = null;
		
		videoContainer.classList.remove('active');
		mainContainer.classList.remove('collapsed');
	};
	
	return {
		openVideo: factory.openVideo,
		closeVideo: factory.closeVideo
	};
});
