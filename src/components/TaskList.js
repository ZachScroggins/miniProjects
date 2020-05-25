import { useState, useEffect, forwardRef } from 'react';
import { uuid } from 'uuidv4';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Box,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Button,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  checked: {
    textDecoration: 'line-through',
  },
  unChecked: {
    textDecoration: 'none',
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const TaskList = () => {
  const classes = useStyles();
  const [newTask, setNewTask] = useState('');
  const [addErr, setAddErr] = useState(false);
  const [fabOpen, setFabOpen] = useState(false);
  const [currentTaskValue, setCurrentTaskValue] = useState('');
  const [currentTask, setCurrentTask] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [editErr, setEditErr] = useState(false);
  const [tasks, setTasks] = useState([
    { id: uuid(), value: 'Walk dog (click to edit)', checked: false },
    { id: uuid(), value: 'Get groceries', checked: true },
    { id: uuid(), value: 'Water plants', checked: false },
  ]);

  useEffect(() => {
    if (currentTask) {
      setCurrentTaskValue(currentTask.value);
    }
  }, [currentTask]);

  const handleFabOpen = () => {
    setFabOpen(true);
  };

  const handleFabClose = () => {
    setFabOpen(false);
  };

  const handleCancelAdd = () => {
    handleFabClose();
    setNewTask('');
    setAddErr(false);
  };

  const handleAddTask = () => {
    if (newTask === '') {
      setAddErr(true);
    } else {
      setTasks([...tasks, { id: uuid(), value: newTask, checked: false }]);
      setNewTask('');
      setAddErr(false);
      handleFabClose();
    }
  };

  const handleEditOpen = task => {
    setCurrentTask(task);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleCancelUpdate = () => {
    handleEditClose();
    setCurrentTask(null);
    setEditErr(false);
  };

  const handleUpdateTask = () => {
    if (currentTaskValue === '') {
      setEditErr(true);
    } else {
      const updatedTask = {
        id: currentTask.id,
        value: currentTaskValue,
        checked: currentTask.checked,
      };
      setTasks(
        tasks.map(task =>
          task.id === currentTask.id ? (task = updatedTask) : task
        )
      );
      setCurrentTaskValue('');
      setCurrentTask(null);
      setEditErr(false);
      handleEditClose();
    }
  };

  const handleDeleteTask = () => {
    setTasks(tasks.filter(task => task.id !== currentTask.id));
    setCurrentTaskValue('');
    setCurrentTask(null);
    setEditErr(false);
    handleEditClose();
  };

  const handleCheck = task => {
    const newTask = {
      id: task.id,
      value: task.value,
      checked: !task.checked,
    };
    setTasks(
      tasks.map(item => (item.id === task.id ? (item = newTask) : item))
    );
  };

  return (
    <Box>
      <List>
        {tasks.map(task => (
          <ListItem key={task.id} button onClick={() => handleEditOpen(task)}>
            <ListItemText
              primary={task.value}
              className={task.checked ? classes.checked : classes.unChecked}
            />
            <ListItemSecondaryAction>
              <Checkbox
                edge='end'
                checked={task.checked}
                onChange={() => handleCheck(task)}
                disableRipple
                inputProps={{ 'aria-label': `${task.checked}` }}
                color='primary'
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Box display='flex' justifyContent='center' pt={2}>
        <Button
          id='calorietracker'
          aria-label='add-task'
          color='primary'
          onClick={handleFabOpen}
          variant='contained'
        >
          Add Task
        </Button>
      </Box>
      <Dialog
        open={fabOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleFabClose}
        aria-labelledby='add-slide-title'
        maxWidth='sm'
        fullWidth
      >
        <DialogTitle id='add-slide-title'>Add a Task</DialogTitle>
        <DialogContent>
          <TextField
            id='newTask'
            label='Task'
            type='text'
            fullWidth
            error={addErr}
            helperText={addErr && 'Please add a task.'}
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelAdd} color='primary' variant='contained'>
            Cancel
          </Button>
          <Button onClick={handleAddTask} color='primary' variant='contained'>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={editOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleEditClose}
        aria-labelledby='edit-slide-title'
        maxWidth='sm'
        fullWidth
      >
        <DialogTitle id='edit-slide-title'>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            id='currentTask'
            label='Task'
            type='text'
            fullWidth
            error={editErr}
            helperText={editErr && 'No empty tasks.'}
            value={currentTaskValue}
            onChange={e => setCurrentTaskValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleDeleteTask}>
            <DeleteIcon color='primary' />
          </IconButton>
          <Button
            onClick={handleCancelUpdate}
            color='primary'
            variant='contained'
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdateTask}
            color='primary'
            variant='contained'
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TaskList;
