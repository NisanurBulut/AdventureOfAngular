export class Model {
    user;
    items;
    constructor() {
        this.user = 'Nisanur';
        this.items = [
            new TodoItem("Breakfast", false),
            new TodoItem("Drink Coffee", false),
            new TodoItem("Take Daily Notes", false),
            new TodoItem("Coding Forever", false),
        ];
    }
}
export class TodoItem {
    description;
    action;
    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}
