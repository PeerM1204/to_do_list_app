#! /usr/bin/env node

import inquirer from "inquirer";
let todos: string[] = ["Tariq Khan", "Sajjad Khan"];

async function createTodo(todos: string[]) {
  let playAgain = true;
  while (playAgain) {
    let todo = await inquirer.prompt([
      {
        name: "select",
        type: "list",
        message: "Select an operation",
        choices: ["Add", "update", "view", "Delete"],
      },
    ]);
    //for Add:
    if (todo.select === "Add") {
      let addTodo = await inquirer.prompt([
        {
          name: "todo",
          type: "input",
          message: "Add the items in the list:",
        },
      ]);
      //for add in Array:
      todos.push(addTodo.todo);
      console.log(todos);

      //for each loop to print:
      todos.forEach((todos) => {
        console.log(todos);
      });
    }
    //for an UPDATE:
    if (todo.select === "update") {
      let update = await inquirer.prompt([
        {
          name: "update",
          type: "list",
          message: "Select the item for an Update",
          choices: todos.map((item) => item),
        },
      ]);
      let addTodo = await inquirer.prompt([
        {
          name: "todo",
          type: "input",
          message: "Add the items in the list to Update:",
        },
      ]);

      let newTodos = todos.filter((val) => val !== update.update);
      todos = [...newTodos, addTodo.todo];
      console.log(todos);

      // for each loop :
      todos.forEach((update) => {
        console.log(update);
      });
    }

    // for view:
    if (todo.select === "view") {
      console.log(todos);
      todos.forEach((todos) => {
        console.log(todos);
      });
      //loop for print:
      todos.forEach((view) => {
        console.log(view);
      });
    }
    // for Delete:
    if (todo.select === "Delete") {
      let deleteTodo = await inquirer.prompt([
        {
          name: "delete",
          type: "list",
          message: "Select an Item for Delete",
          choices: todos.map((item) => item),
        },
      ]);
      let newTodos = todos.filter((val) => val !== deleteTodo.delete);
      todos = [...newTodos];
      console.log(todos);
      // loop for print :
      todos.forEach((deleteTodo) => {
        console.log(deleteTodo);
      });
    }

    // Code for play again:
    let confirm = await inquirer.prompt([
      {
        name: "confirm",
        type: "confirm",
        message: "Do you want to perform another operation?",
        default: true,
      },
    ]);

    playAgain = confirm.confirm;
  }
  {
    console.log("Thank You!");
  }
}
// call  the function:
createTodo(todos);
