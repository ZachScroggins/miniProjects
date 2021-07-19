import { useState } from 'react';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from '@material-ui/core';

const JokeGenerator = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getJokes = async () => {
    setLoading(true);

    let res = await fetch('https://api.icndb.com/jokes/random/5');

    let data = await res.json();

    setJokes(data.value);

    setLoading(false);
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
      {loading ? (
        <Box display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>
      ) : (
        <List>
          {jokes.map(joke => (
            <ListItem key={joke.id}>
              <ListItemText>
                <p
                  style={{ margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: joke.joke }}
                />
              </ListItemText>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default JokeGenerator;
