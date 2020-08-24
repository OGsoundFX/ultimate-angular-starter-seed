function TodoController() {
    this.newTodo = "";
    this.newTodoDifficulty = "";
    this.newTodoCategory = "";
    this.favoriteActivity = [];
    this.addToFavorite = item => {
        this.favoriteActivity.push(item);
    };
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

    this.addTodo = () => {
        this.list.unshift({
            title: this.newTodo,
            difficulty: this.newTodoDifficulty,
            category: this.newTodoCategory,
            completed: false
        });
        this.newTodo = "";
        this.newTodoCategory = "";
        this.newTodoDifficulty = "";
    };
    this.removeTodo = (item, index) => {
        this.list.splice(index, 1);
    };
    this.getRemaining = () => {
        let n = 0;
        this.list.forEach((item) => {
            item.completed != true ? n +=1 : n += 0; 
        });
        return n;
    };
    this.time = new Date();
}

// MainController.$inject = ['$scope'];

angular
    .module('app')
    .controller('TodoController', TodoController);