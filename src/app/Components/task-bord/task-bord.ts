import { Component, computed, effect, signal } from '@angular/core';

//  TaskBord Interface
export interface Task {
  id: string,
  title: string,
  status: string
}

// TaskBord Component
@Component({
  selector: 'app-task-bord',
  standalone: true,
  imports: [],
  templateUrl: './task-bord.html',
  styleUrl: './task-bord.css',
})
export class TaskBord {

  title = signal("My task bordss");

  // TaskObjects

  initialTask: Task[] = [
    {
      id: "task-1",
      title: "Design to web page",
      status: "Todo"
    },
    {
      id: "task-2",
      title: "LayOut Design",
      status: "in-progress"
    },
    {
      id: "task-3",
      title: "Developy the projects",
      status: "done"
    },
    {
      id: "task-4",
      title: "Read all documentaction",
      status: "Todo"
    }

  ];

  tasks = signal<Task[]>(this.initialTask);  // singnal of task array

  // Computed Singnal 
  remainingTasks = computed(() => {
    const allTasks = this.tasks();

    const todotasks = allTasks.filter(task => task.status === "To Do");
    return todotasks.length;
  })


  // constroctor

  constructor() {
    effect(() => {
      const curentTasks = this.tasks();
      console.log(`The task list changed  . current task is `, curentTasks);

    })
  }

  // Add Task Method
  addTasks(inputElement: HTMLInputElement) {
    // Receive the all task  from input element

    const title = inputElement.value.trim();
    if (title) {
      const newtasks: Task = {
        id: `task-${Date.now()}`,
        title: title,
        status: "Todo"
      }
      // Immutale logic for update the task list
      this.tasks.update(currentTask => {
        return [...currentTask, newtasks]
      })
      inputElement.value = ""; // Clear the input field after adding the task        
    }

  

  }

  //Implement the delete logic
  deleteTasks(idtodelte: string) {
    this.tasks.update(curenttask=>{
      return curenttask.filter(task=>task.id!==idtodelte);
    })
    console.log(`User wants to delete task with id ${idtodelte}`);

  }

  // Implement the update logic
  updateTasks(idtoupdate: string,newstatus:Task['status'])
  {
    this.tasks.update(currentTask=>{
      return currentTask.map(task=>{
        if(task.id===idtoupdate)
        {
          return {...task,status:newstatus}
        }
        return task;
      })
    })
  } 

}


