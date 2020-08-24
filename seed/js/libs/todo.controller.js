function TodoController(TodoService) {
    var ctrl = this;
    ctrl.list = [];
// TodoService
    getTodos = () => {
        TodoService
            .retrieve()
            .then(function (response) {
                ctrl.list = response;
            });
    }
// End of TodoService

    ctrl.newTodo = "";
    ctrl.newTodoDifficulty = "";
    ctrl.newTodoCategory = "";
    ctrl.favoriteActivity = [];
    ctrl.addToFavorite = item => {
        ctrl.favoriteActivity.push(item);
    };
    
    ctrl.addTodo = () => {
        ctrl.list.unshift({
            title: ctrl.newTodo,
            difficulty: ctrl.newTodoDifficulty,
            category: ctrl.newTodoCategory,
            completed: false
        });
        ctrl.newTodo = "";
        ctrl.newTodoCategory = "";
        ctrl.newTodoDifficulty = "";
    };
    ctrl.removeTodo = function (item, index) {
        console.log("something");
        TodoService
            .remove(item)
            .then(function (response) {
                ctrl.list.splice(index, 1);
        });
    };
    
    ctrl.updateTodo = (item, index) => {
        TodoService
            .update(item);
    };
    
    ctrl.getRemaining = () => {
        let n = 0;
        ctrl.list.forEach((item) => {
            item.completed != true ? n +=1 : n += 0; 
        });
        return n;
    };
    ctrl.time = new Date();
    
    // ctrl.list = [{
    //     title: 'First todo item!',
    //     completed: false,
    //     difficulty: 5,
    //     category: "sport"
    // },{
    //     title: 'Second todo item!',
    //     completed: true,
    //     difficulty: 4,
    //     category: "sport"
    // },{
    //     title: 'Third todo item!',
    //     completed: false,
    //     difficulty: 2,
    //     category: "work"
    // },{
    //     title: 'Forth todo item!',
    //     completed: true,
    //     difficulty: 6
    // }];
    getTodos();
}

// MainController.$inject = ['$scope'];

angular
    .module('app')
    .controller('TodoController', TodoController);