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
        sx={{ mb: 2, width: '49ch' }}
        id="standard-basic" 
        label="Имя новой задачи" 
        variant="standard" 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <IconButton aria-label="add"
        sx={{ mt: 2, ml: 2 }}
        onClick={handleAddText}
        disabled = {text === ''}
      >
        <AddIcon />
      </IconButton>
    </>
  );
}
