import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {
  Box,
  TextField,
  InputAdornment,
  Button,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  IconButton,
  Slide,
} from '@material-ui/core';

function SlideTransition(props) {
  return <Slide {...props} direction='down' />;
}

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(null);
  const [loanAmountErr, setLoanAmountErr] = useState(false);
  const [interest, setInterest] = useState(null);
  const [interestErr, setInterestErr] = useState(false);
  const [years, setYears] = useState(null);
  const [yearsErr, setYearsErr] = useState(false);
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalPayment, setTotalPayment] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [display, setDisplay] = useState('none');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const calculate = () => {
    if (
      loanAmount === null ||
      Math.sign(loanAmount) === -1 ||
      isNaN(loanAmount)
    ) {
      setLoanAmountErr(true);
      return;
    } else if (
      interest === null ||
      Math.sign(interest) === -1 ||
      isNaN(interest)
    ) {
      setInterestErr(true);
      return;
    } else if (years === null || Math.sign(years) === -1 || isNaN(years)) {
      setYearsErr(true);
      return;
    } else {
      const calculatedInterest = parseFloat(interest) / 100 / 12;
      const calculatedPayments = parseFloat(years) * 12;

      // Compute monthly payment
      const x = Math.pow(1 + calculatedInterest, calculatedPayments);
      const monthly = (loanAmount * x * calculatedInterest) / (x - 1);

      if (Number.isFinite(monthly)) {
        setMonthlyPayment(monthly.toFixed(2));
        setTotalPayment((monthly * calculatedPayments).toFixed(2));
        setTotalInterest(
          (monthly * calculatedPayments - loanAmount).toFixed(2)
        );
        setLoanAmountErr(false);
        setInterestErr(false);
        setYearsErr(false);
        setDisplay('block');
      } else {
        setSnackbarOpen(true);
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <Box>
      <Box pb={2}>
        <TextField
          label='Loan Amount'
          variant='outlined'
          fullWidth
          color='secondary'
          type='number'
          error={loanAmountErr}
          helperText={loanAmountErr && 'Please enter a positive number'}
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
          onChange={e => setLoanAmount(e.target.value)}
        />
      </Box>
      <Box pb={2}>
        <TextField
          label='Interest'
          variant='outlined'
          fullWidth
          color='secondary'
          type='number'
          error={interestErr}
          helperText={interestErr && 'Please enter a positive number'}
          InputProps={{
            startAdornment: <InputAdornment position='start'>%</InputAdornment>,
          }}
          onChange={e => setInterest(e.target.value)}
        />
      </Box>
      <Box pb={2}>
        <TextField
          label='Years to Repay'
          variant='outlined'
          fullWidth
          color='secondary'
          type='number'
          error={yearsErr}
          helperText={yearsErr && 'Please enter a positive number'}
          onChange={e => setYears(e.target.value)}
        />
      </Box>
      <Box pb={2}>
        <Button
          variant='contained'
          fullWidth
          color='secondary'
          size='large'
          onClick={calculate}
        >
          Calculate
        </Button>
      </Box>
      <Box display={display}>
        <List>
          <ListItem>
            <ListItemText primary={`Due Monthly: $${monthlyPayment}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Total Payment: $${totalPayment}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Total Interest: $${totalInterest}`} />
          </ListItem>
        </List>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleClose}
        message='Please check your numbers...'
        TransitionComponent={SlideTransition}
        action={
          <>
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={handleClose}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          </>
        }
      />
    </Box>
  );
};

export default LoanCalculator;
