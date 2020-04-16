import { useContext } from 'react';
import ColorContext from '../src/context/color/colorContext';
import {
  Typography,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

const changecolor = () => {
  const colorContext = useContext(ColorContext);
  const { setColors, clearColors } = colorContext;

  const handleSetColors = (event, primary, secondary) => {
    event.preventDefault();
    setColors(primary, secondary);
  };

  const handleClearColors = (event) => {
    event.preventDefault();
    clearColors();
  };

  return (
    <>
      <Container>
        <Box>
          <Typography>Change Color</Typography>
          <List>
            <ListItem
              button
              onClick={(event) => handleSetColors(event, '#9c27b0', '#3f51b5')}
            >
              <ListItemText primary='colors' />
            </ListItem>
            <ListItem button onClick={(event) => handleClearColors(event)}>
              <ListItemText primary='kill colors' />
            </ListItem>
          </List>
        </Box>
      </Container>
    </>
  );
};

export default changecolor;
