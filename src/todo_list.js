import { format } from "date-fns";


class Todo_list {
    todo_check = false;

    constructor(title, description, dueDates, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDates = dueDates;
        this.priority = priority;
        this.project = project;
    }

    set todo_check(check) {
        this.todo_check = check;
    }



}

export { Todo_list };