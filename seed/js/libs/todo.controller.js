function TodoController() {
    this.list = [{
        title: 'First todo item!',
        completed: false,
        difficulty: 5,
        category: "sport"
    },{
        title: 'Second todo item!',
        completed: true,
        difficulty: 4,
        category: "sport"
    },{
        title: 'Third todo item!',
        completed: false,
        difficulty: 2,
        category: "work"
    },{
        title: 'Forth todo item!',
        completed: true,
        difficulty: 6
    }];
}

// MainController.$inject = ['$scope'];

angular
    .module('app')
    .controller('TodoController', TodoController);