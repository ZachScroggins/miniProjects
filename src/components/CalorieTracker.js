import { useState, useEffect, forwardRef } from 'react';
import { v4 as uuid } from 'uuid';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Button,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Slide,
  IconButton,
} from '@material-ui/core';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const CalorieTracker = () => {
  const [fabOpen, setFabOpen] = useState(false);
  const [newMeal, setNewMeal] = useState('');
  const [newCalories, setNewCalories] = useState('');
  const [addMealErr, setAddMealErr] = useState(false);
  const [addCaloriesErr, setAddCaloriesErr] = useState(false);
  const [currentMeal, setCurrentMeal] = useState(null);
  const [currentMealValue, setCurrentMealValue] = useState('');
  const [currentCaloriesValue, setCurrentCaloriesValue] = useState('');
  const [editMealErr, setEditMealErr] = useState(false);
  const [editCaloriesErr, setEditCaloriesErr] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [totalCalories, setTotalCalories] = useState(0);
  const [meals, setMeals] = useState([
    { id: uuid(), meal: 'Eggs', calories: 156 },
    { id: uuid(), meal: 'Sandwich', calories: 340 },
    { id: uuid(), meal: 'Steak', calories: 679 },
  ]);

  useEffect(() => {
    countCalories();
  }, [meals]);

  useEffect(() => {
    if (currentMeal) {
      setCurrentMealValue(currentMeal.meal);
      setCurrentCaloriesValue(currentMeal.calories);
    }
  }, [currentMeal]);

  let count;
  const countCalories = () => {
    count = 0;

    meals.map(item => (count += item.calories));

    setTotalCalories(count);
  };

  const clearAll = () => {
    setMeals([]);
  };

  const handleFabOpen = () => {
    setFabOpen(true);
  };

  const handleFabClose = () => {
    setFabOpen(false);
  };

  const handleCancelAddMeal = () => {
    handleFabClose();
    setNewMeal('');
    setNewCalories('');
    setAddMealErr(false);
    setAddCaloriesErr(false);
  };

  const handleAddMeal = () => {
    let newCalFloat = parseFloat(newCalories);

    if (newMeal === '') {
      setAddMealErr(true);
    } else if (
      newCalFloat === '' ||
      newCalFloat === 0 ||
      Math.sign(newCalFloat) === -1 ||
      isNaN(newCalFloat)
    ) {
      setAddCaloriesErr(true);
    } else {
      setMeals([
        ...meals,
        { id: uuid(), meal: newMeal, calories: newCalFloat },
      ]);
      setNewMeal('');
      setNewCalories('');
      setAddMealErr(false);
      setAddCaloriesErr(false);
      handleFabClose();
    }
  };

  const handleEditOpen = meal => {
    setCurrentMeal(meal);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleCancelUpdate = () => {
    handleEditClose();
    setCurrentMeal(null);
    setEditMealErr(false);
    setEditCaloriesErr(false);
  };

  const handleUpdateMeal = () => {
    let updCalFloat = parseFloat(currentCaloriesValue);

    if (currentMealValue === '') {
      setEditMealErr(true);
    } else if (
      updCalFloat === '' ||
      updCalFloat === 0 ||
      Math.sign(updCalFloat) === -1 ||
      isNaN(updCalFloat)
    ) {
      setEditCaloriesErr(true);
    } else {
      const updatedMeal = {
        id: currentMeal.id,
        meal: currentMealValue,
        calories: updCalFloat,
      };
      setMeals(
        meals.map(meal =>
          meal.id === currentMeal.id ? (meal = updatedMeal) : meal
        )
      );
      setCurrentMealValue('');
      setCurrentCaloriesValue('');
      setCurrentMeal(null);
      setEditMealErr(false);
      setEditCaloriesErr(false);
      handleEditClose();
    }
  };

  const handleDeleteMeal = () => {
    setMeals(meals.filter(meal => meal.id !== currentMeal.id));
    setCurrentMealValue('');
    setCurrentCaloriesValue('');
    setCurrentMeal(null);
    setEditMealErr(false);
    setEditCaloriesErr(false);
    handleEditClose();
  };

  return (
    <Box>
      <Box pb={2}>
        <Typography variant='h5' component='h3' align='center'>
          Calories: {totalCalories}
        </Typography>
      </Box>
      <Box pb={2}>
        <List>
          {meals.map(meal => (
            <ListItem
              key={meal.id}
              button
              onClick={() => handleEditOpen(meal)}
              component='li'
            >
              <ListItemText
                primary={`${meal.meal}: ${meal.calories} Calories`}
              />
              <EditIcon color='secondary' />
            </ListItem>
          ))}
        </List>
      </Box>
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Grid item>
          <Button
            color='secondary'
            variant='contained'
            size='large'
            onClick={clearAll}
          >
            Clear
          </Button>
        </Grid>
        <Grid item>
          <Fab
            color='secondary'
            onClick={handleFabOpen}
            id='loancalculator'
            aria-label='add meal'
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
      <Dialog
        open={fabOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleFabClose}
        aria-labelledby='add-slide-title'
        maxWidth='sm'
        fullWidth
      >
        <DialogTitle id='add-slide-title'>Add a Meal</DialogTitle>
        <DialogContent>
          <Box pb={1}>
            <TextField
              id='newMeal'
              label='Meal'
              type='text'
              fullWidth
              color='secondary'
              error={addMealErr}
              helperText={addMealErr && 'Please add a meal.'}
              value={newMeal}
              onChange={e => setNewMeal(e.target.value)}
            />
          </Box>
          <TextField
            id='newCalories'
            label='Calories'
            type='number'
            fullWidth
            color='secondary'
            error={addCaloriesErr}
            helperText={addCaloriesErr && 'Please add calories.'}
            value={newCalories}
            onChange={e => setNewCalories(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCancelAddMeal}
            color='secondary'
            variant='contained'
          >
            Cancel
          </Button>
          <Button onClick={handleAddMeal} color='secondary' variant='contained'>
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
        <DialogTitle id='edit-slide-title'>Edit Meal</DialogTitle>
        <DialogContent>
          <Box pb={1}>
            <TextField
              id='currentMeal'
              label='Meal'
              type='text'
              fullWidth
              color='secondary'
              error={editMealErr}
              helperText={editMealErr && 'No empty meals.'}
              value={currentMealValue}
              onChange={e => setCurrentMealValue(e.target.value)}
            />
          </Box>
          <TextField
            id='currentCalories'
            label='Calories'
            type='number'
            fullWidth
            color='secondary'
            error={editCaloriesErr}
            helperText={editCaloriesErr && 'No empty calories.'}
            value={currentCaloriesValue}
            onChange={e => setCurrentCaloriesValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleDeleteMeal}>
            <DeleteIcon color='secondary' />
          </IconButton>
          <Button
            onClick={handleCancelUpdate}
            color='secondary'
            variant='contained'
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdateMeal}
            color='secondary'
            variant='contained'
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CalorieTracker;
