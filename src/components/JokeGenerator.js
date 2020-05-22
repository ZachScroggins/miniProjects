import { useState } from 'react';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { Box, Button, List, ListItem, ListItemText } from '@material-ui/core';

const JokeGenerator = () => {
  const [jokes, setJokes] = useState([]);

  const getJokes = async () => {
    let res = await fetch('https://api.icndb.com/jokes/random/5');

    let data = await res.json();

    setJokes(data.value);
  };

  return (
    <Box>
      <Box pb={2}>
        <Button
          variant='contained'
          fullWidth
          color='primary'
          size='large'
          startIcon={<SentimentVerySatisfiedIcon />}
          onClick={getJokes}
        >
          Get Jokes
        </Button>
      </Box>
      <List>
        {jokes.map(joke => (
          <ListItem key={joke.id}>
            <ListItemText primary={joke.joke} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default JokeGenerator;
