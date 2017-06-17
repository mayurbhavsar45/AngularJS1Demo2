angular.module('sortApp', [])

    .controller('mainController', function ($scope) {
        $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false;  // set the default sort order
        $scope.search = '';     // set the default search/filter term

        // create the list of Data for Grid  
        
        $scope.GridData = [
          { image: 'images/item_image.PNG', name: 'Naan N Masala', Split: [{Action1:'Evently',Action2:'Custom',Action3:'Another Action'}], Price: 10, Participants: [{ name1: 'Bob', name2: 'Tom' }], YourShare: 13 },
          { image: 'images/item_image.PNG', name: 'KFC', Split: [{ Action1: 'Evently', Action2: 'Custom', Action3: 'Another Action' }], Price: 20, Participants: [{ name1: 'Bob', name2: 'Tom' }], YourShare: 15 },
          { image: 'images/item_image.PNG', name: 'Pizza Hut', Split: [{ Action1: 'Evently', Action2: 'Custom', Action3: 'Another Action' }], Price: 30, Participants: [{ name1: 'Bob', name2: 'Tom' }], YourShare: 25 },
          { image: 'images/item_image.PNG', name: 'MacDonalds', Split: [{ Action1: 'Evently', Action2: 'Custom', Action3: 'Another Action' }], Price: 40, Participants: [{ name1: 'Bob', name2: 'Tom' }], YourShare: 10 }
        ];
    });