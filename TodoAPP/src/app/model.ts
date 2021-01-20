export class Model {
    user;
    items;
    constructor() {
        this.user = 'Nisanur';
        this.items = [
            new TodoItem("kahvaltı", false),
            new TodoItem("kahve içmek", false),
            new TodoItem("günlük not okumak", false),
            new TodoItem("kodlama", false),
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
