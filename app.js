import chalk from "chalk";
import readlineSync from "readline-sync";

const taskList = [];

const showTasks = () => {
  console.clear();
  console.log(chalk.greenBright.bold("___Tasks List___\n"));
  taskList.forEach((task, index) => {
    console.log(
      `${task.completed ? "✔️" : "⏳"}, ${index + 1}, ${task.description}`
    );
  });
  console.log(chalk.greenBright.bold("________________________\n"));
};

const addTask = (description) => {
  taskList.push({ description, completed: false });
  console.log(chalk.green("La tarea se agrego"));
};

const removeTask = (index) => {
  if (index >= 0 && index <= taskList.length) {
    taskList.splice(index, 1);
    console.log(chalk.red("La tarea se elminino X"));
  } else {
    console.log("El index que ingreso no es valido");
  }
};

const taskCompleted = (index) => {
  if (index >= 0 && index <= taskList.length) {
    taskList[index].completed = true;
    console.log(chalk.cyanBright("La tarea ha sido completada"));
  } else {
    console.log("El index que ingreso no es valido");
  }
};

const main = () => {
  while (true) {
    console.log(chalk.cyanBright("▀▀▀▀▀▀▀▀▀▀▀▀▀"));
    console.log(chalk.cyanBright.bold("MAIN MENU"));
    console.log(chalk.cyanBright("▄▄▄▄▄▄▄▄▄▄▄▄▄"));
    console.log(chalk.greenBright.bold("1. ") + chalk.whiteBright.italic("Add Task"));
    console.log(chalk.greenBright.bold("2. ") + chalk.whiteBright.italic("Show Tasks"));
    console.log(chalk.greenBright.bold("3. ") + chalk.whiteBright.italic("Delete Task"));
    console.log(chalk.greenBright.bold("4. ") + chalk.whiteBright.italic("Complete Task"));
    console.log(chalk.greenBright.bold("5. ") + chalk.whiteBright.italic("Exit"));

    const options = readlineSync.questionInt(
      chalk.blueBright("Pick a number for an option: \n")
    );

    switch (options) {
      case 1:
        const description = readlineSync.question(
          "Type a description for your task:   "
        );
        addTask(description);
        console.clear();
        break;

      case 2:
        showTasks();
        break;

      case 3:
        const indexDeleted = readlineSync.questionInt(
          "Type index for the task to delete:   "
        );
        removeTask(indexDeleted - 1);
        console.clear();
        break;

      case 4:
        const indexCompleted = readlineSync.questionInt(
          "Type index for the task to complete:   "
        );
        taskCompleted(indexCompleted - 1);
        console.clear();
        break;

      case 5:
        return;
      default:
        console.log("Error: Unknown");
        console.clear();
    }
  }
};

main();
