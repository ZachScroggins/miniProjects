import { useState, useContext } from 'react';
import Link from '../Link';
import ColorContext from '../../context/color/colorContext';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PaletteIcon from '@material-ui/icons/Palette';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import GitHubIcon from '@material-ui/icons/GitHub';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  AppBar,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
  Box,
  Container,
} from '@material-ui/core';

const drawerWidth = '18em';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    borderRight: 'none',
    boxShadow: theme.shadows[3],
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0),
    },
  },
  grow: {
    flex: '1 1 auto',
  },
  shadow: {
    boxShadow: theme.shadows[10],
  },
}));

function Layout(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const colorContext = useContext(ColorContext);
  const { setType, type } = colorContext;
  let prefersDarkMode;

  if (type === 'light') {
    prefersDarkMode = false;
  } else {
    prefersDarkMode = true;
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDarkLight = () => {
    prefersDarkMode = !prefersDarkMode;
    setType(prefersDarkMode);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Hidden mdDown>
          <Box
            p={1.7}
            display='flex'
            justifyContent='center'
            bgcolor='primary.main'
            color='primary.contrastText'
          >
            <Typography variant='h4' component='h1' color='inherit'>
              miniProjects
            </Typography>
          </Box>
        </Hidden>
        <Hidden lgUp>
          <Box
            display='flex'
            flexDirection='row-reverse'
            bgcolor='primary.main'
            color='primary.contrastText'
          >
            <IconButton onClick={handleDrawerToggle} color='inherit'>
              <ChevronLeftIcon color='inherit' fontSize='large' />
            </IconButton>
          </Box>
        </Hidden>
      </div>
      <List component='nav'>
        <ListItem button component={Link} naked href='#home'>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText disableTypography={true}>
            <Typography variant='h6'>Home</Typography>
          </ListItemText>
        </ListItem>
        <ListItem button component={Link} naked href='#changecolor'>
          <ListItemIcon>
            <PaletteIcon />
          </ListItemIcon>
          <ListItemText disableTypography={true}>
            <Typography variant='h6'>Color Changer</Typography>
          </ListItemText>
        </ListItem>
        <ListItem button component={Link} naked href='#tasklist'>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText disableTypography={true}>
            <Typography variant='h6'>Task List</Typography>
          </ListItemText>
        </ListItem>
        <ListItem button component={Link} naked href='#calorietracker'>
          <ListItemIcon>
            <FastfoodIcon />
          </ListItemIcon>
          <ListItemText disableTypography={true}>
            <Typography variant='h6'>Calorie Tracker</Typography>
          </ListItemText>
        </ListItem>
        <ListItem button component={Link} naked href='#loancalculator'>
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText disableTypography={true}>
            <Typography variant='h6'>Loan Calculator</Typography>
          </ListItemText>
        </ListItem>
        <ListItem button component={Link} naked href='#jokegenerator'>
          <ListItemIcon>
            <EmojiEmotionsIcon />
          </ListItemIcon>
          <ListItemText disableTypography={true}>
            <Typography variant='h6'>Joke Generator</Typography>
          </ListItemText>
        </ListItem>
        <ListItem button onClick={handleDarkLight}>
          <ListItemIcon>
            {type === 'light' ? <Brightness4Icon /> : <Brightness5Icon />}
          </ListItemIcon>
          <ListItemText disableTypography={true}>
            <Typography variant='h6'>Dark/Light</Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List component='nav'>
        <ListItem
          button
          component='a'
          href='https://github.com/ZachScroggins/miniProjects/tree/master'
        >
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText disableTypography={true}>
            <Typography variant='h6'>Github</Typography>
          </ListItemText>
        </ListItem>
        <ListItem button component='a' href='https://zachscroggins.com'>
          <ListItemIcon>
            <ArrowBackIcon />
          </ListItemIcon>
          <ListItemText disableTypography={true}>
            <Typography variant='h6'>My Work</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Hidden lgUp>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h5' noWrap>
              miniProjects
            </Typography>
            <div className={classes.grow} />
            <Hidden lgUp>
              <Tooltip title='Blog' enterDelay={300}>
                <IconButton
                  color='inherit'
                  aria-label='blog'
                  component={Link}
                  naked
                  href='#home'
                >
                  <HomeIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Github' enterDelay={300}>
                <IconButton
                  color='inherit'
                  aria-label='github'
                  component={Link}
                  naked
                  href='https://github.com/ZachScroggins/miniProjects/tree/master'
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Dark/Light' enterDelay={300}>
                <IconButton
                  color='inherit'
                  aria-label='darkLight'
                  onClick={handleDarkLight}
                >
                  {type === 'light' ? <Brightness4Icon /> : <Brightness5Icon />}
                </IconButton>
              </Tooltip>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Hidden>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden lgUp>
          <Drawer
            container={container}
            variant='persistent'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            onClick={handleDrawerToggle}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container maxWidth='md'>{props.children}</Container>
      </main>
    </div>
  );
}

export default Layout;
