import { useState } from 'react';
import './TaskList.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CheckIcon from '@mui/icons-material/Check';


export function TasksInProcess({tasks, onChangeTask, onDeleteTask}) {
    let countTaskInProcess = tasks.reduce((count, element) => {
        if(!element.done){
            count = count + 1;
        }
        return count;
    }, 0);
    return (
        <>
            <h5>ПЛАН ({countTaskInProcess})</h5>
            <ul>
                {tasks.filter(task => task.done === false).map(filteredTask => (
                    <li key={filteredTask.id}>
                        <Task task={filteredTask} onChange={onChangeTask} onDelete={onDeleteTask} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export function TasksComlete({tasks, onChangeTask, onDeleteTask}) {
    let countTasksComlete = tasks.reduce((count, element) => {
        if(element.done){
            count = count + 1;
        }
        return count;
    }, 0);
    return (
        <>
            <h5>ГОТОВО ({countTasksComlete})</h5>
            <ul>
                {tasks.filter(task => task.done === true).map(filteredTask => (
                    <li key={filteredTask.id}>
                        <Task task={filteredTask} onChange={onChangeTask} onDelete={onDeleteTask} />
                    </li>
                ))}
            </ul>
        </>
    );
}

function Task({task, onChange, onDelete}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <div className='task-edit'>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <IconButton 
            onClick={() => setIsEditing(false)}
        >
            <CheckIcon />
        </IconButton>
      </div>
    );
  } else {
    taskContent = (
      <div className='task-edit'>
        <div className='task-text'>
          {task.text}
        </div>

        <IconButton 
            onClick={() => setIsEditing(true)}
            disabled={task.done}
        >
            <ModeEditIcon />
        </IconButton>
        
      </div>
    );
  }
  return (
    <div className='task'>
        <div className='task-check'>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                    onChange({
                        ...task,
                        done: e.target.checked,
                    });
                }}
            />
            {taskContent}
        </div>
      
      <IconButton 
        aria-label="delete"
        onClick={() => onDelete(task.id)}
      >
        <DeleteIcon color="secondary" />
      </IconButton>
    </div>
  );
}