import { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

export default function AddTask({onAddTask}) {
  const [text, setText] = useState('');
  function handleAddText() {
    setText('');
    onAddTask(text);
  }
  return (
    <>
      <TextField 
        // fullWidth sx={{ m: 1 }}
        sx={{ m: 1, width: '60ch' }}
        id="standard-basic" 
        label="Имя новой задачи" 
        variant="standard" 
        // placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        
      />
      <IconButton aria-label="add"
        onClick={handleAddText}
      >
        <AddIcon />
      </IconButton>
    </>
  );
}
