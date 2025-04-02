/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
];

// ============================================
// 🔍 Tasks
// ============================================

/*
🔹 Task 1: Filter Incomplete Tasks
Use `filter()` with an anonymous function to extract all tasks that are not completed.
*/
// const incompleteTasks = todos.filter(function(todo) {
//     return !todo.completed;
// });

/*
🔹 Task 2: Sort Tasks by Priority
Use `sort()` with an anonymous function to arrange tasks by priority (1 = highest).
*/
// const sortedByPriority = todos.sort(function(a, b) {
//     return a.priority - b.priority;
// });

/*
🔹 Task 3: Mark All Tasks as Completed
Use `map()` with an anonymous function to return a new array where all tasks are marked completed.
*/
// const allCompleted = todos.map(function(todo) {
//     return { ...todo, completed: true };
// });

/*
🔹 Task 4: Combine Filters
First, filter incomplete tasks, then sort them by priority.
*/
// const sortedIncomplete = todos
//     .filter(function(todo) {
//         return !todo.completed;
//     })
//     .sort(function(a, b) {
//         return a.priority - b.priority;
//     });

// ✅ Use console.log() to test each result
// console.log(incompleteTasks);
// console.log(sortedByPriority);
// console.log(allCompleted);
// console.log(sortedIncomplete);
