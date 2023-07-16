import './style/App.css'
import React from "react";
import Box from '@mui/material/Box';
import { useReducer } from 'react';
import AddTask from './components/AddTask/AddTask';
import  { TasksInProcess, TasksComlete }  from './components/TaskList/TaskList';
import Typography from "@mui/material/Typography";

const REDUCER_CASES = {
  add: 'added',
  edit: 'changed',
  delete: 'deleted',
}

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <div className="main-container">
      <Box
        sx={{
          width: 500,
          height: 630,
          borderRadius: '20px',
          border: "solid 2px blue"
        }}
        p={3}
      >
        <Typography color="secondary" variant="h4" gutterBottom>ToDo</Typography>
        <AddTask onAddTask={handleAddTask} />
        <TasksInProcess
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
        <TasksComlete
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </Box>
    </div>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case REDUCER_CASES.add: {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case REDUCER_CASES.edit: {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case REDUCER_CASES.delete: {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      return {...tasks};
    }
  }
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Выполнить кросс-ревью проектов ToDo', done: true},
  {id: 1, text: 'Написать в свой канал рефлексию по текущему положению дел', done: false},
  {id: 2, text: 'Посмотреть фильм', done: false},
];

