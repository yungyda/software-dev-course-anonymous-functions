const todos = [
    { task: "Do laundry", completed: false, priority: 2 },
    { task: "Read a book", completed: true, priority: 3 },
    { task: "Finish project", completed: false, priority: 1 },
    { task: "Call mom", completed: true, priority: 2 },
    { task: "Buy groceries", completed: false, priority: 1 }
  ];
  
  // 1. Filter Incomplete Tasks
  const incompleteTasks = todos.filter(todo => !todo.completed);
  console.log("Incomplete Tasks:", incompleteTasks);
  
  // 2. Sort Tasks by Priority
  const sortedByPriority = [...todos].sort((a, b) => a.priority - b.priority);
  console.log("Sorted by Priority:", sortedByPriority);
  
  // 3. Mark All Tasks as Completed
  const allCompleted = todos.map(todo => ({ ...todo, completed: true }));
  console.log("All Tasks Completed:", allCompleted);
  
  // 4. Filter and Sort Incomplete by Priority
  const filteredAndSorted = todos
    .filter(todo => !todo.completed)
    .sort((a, b) => a.priority - b.priority);
  console.log("Filtered and Sorted:", filteredAndSorted);
  