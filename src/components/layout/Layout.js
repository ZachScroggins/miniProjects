import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import Link from '../Link';
import ColorContext from '../../context/color/colorContext';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PaletteIcon from '@material-ui/icons/Palette';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  AppBar,
  CssBaseline,
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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
      width: `calc(100% - ${drawerWidth}px)`,
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
}));

function Layout(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const colorContext = useContext(ColorContext);
  const { setType, type } = colorContext;
  let appBarTitle;
  let prefersDarkMode;

  useEffect(() => {
    if (router.pathname === '/') {
      setSelectedIndex(0);
    }
    if (router.pathname === '/addpost') {
      setSelectedIndex(1);
    }
    if (router.pathname === '/changecolor') {
      setSelectedIndex(2);
    }
  }, [router.pathname]);

  if (type === 'light') {
    prefersDarkMode = false;
  } else {
    prefersDarkMode = true;
  }

  if (selectedIndex === 0) {
    appBarTitle = 'Blog';
  }
  if (selectedIndex === 1) {
    appBarTitle = 'Add Post';
  }
  if (selectedIndex === 2) {
    appBarTitle = 'Change Color';
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
        <Box
          p={1}
          display='flex'
          justifyContent='center'
          bgcolor='primary.main'
          color='primary.contrastText'
        >
          <Typography variant='h5' component='h1' color='inherit'>
            miniProjects
          </Typography>
        </Box>
      </div>
      <List component='nav'>
        <ListItem button component={Link} naked href='/'>
          <ListItemIcon>
            <HomeIcon color={selectedIndex === 0 ? 'secondary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary='Blog' />
        </ListItem>
        <ListItem button component={Link} naked href='/addpost'>
          <ListItemIcon>
            <AddBoxIcon color={selectedIndex === 1 ? 'secondary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary='Add Post' />
        </ListItem>
        <ListItem button component={Link} naked href='/changecolor'>
          <ListItemIcon>
            <PaletteIcon
              color={selectedIndex === 2 ? 'secondary' : 'inherit'}
            />
          </ListItemIcon>
          <ListItemText primary='Change Color' />
        </ListItem>
        <ListItem button onClick={handleDarkLight}>
          <ListItemIcon>
            {type === 'light' ? <Brightness4Icon /> : <Brightness5Icon />}
          </ListItemIcon>
          <ListItemText primary='Dark/Light' />
        </ListItem>
      </List>
      <Divider />
      <List component='nav'>
        <ListItem button component='a' href='https://www.github.com'>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary='GitHub' />
        </ListItem>
        <ListItem button component='a' href='https://www.codesandbox.io'>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary='CodeSandbox' />
        </ListItem>
        <ListItem button component='a' href='https://www.zachscroggins.com'>
          <ListItemIcon>
            <ArrowBackIcon />
          </ListItemIcon>
          <ListItemText primary='My Work' />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
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
            <Hidden xsDown>
              <Typography variant='h6' noWrap>
                {appBarTitle}
              </Typography>
            </Hidden>
            <div className={classes.grow} />
            <Hidden lgUp>
              <Tooltip title='Blog' enterDelay={300}>
                <IconButton
                  color='inherit'
                  aria-label='blog'
                  component={Link}
                  naked
                  href='/'
                  color={selectedIndex === 0 ? 'secondary' : 'inherit'}
                >
                  <HomeIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Add Post' enterDelay={300}>
                <IconButton
                  color='inherit'
                  aria-label='addPost'
                  component={Link}
                  naked
                  href='/addpost'
                  color={selectedIndex === 1 ? 'secondary' : 'inherit'}
                >
                  <AddBoxIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Change Colors' enterDelay={300}>
                <IconButton
                  color='inherit'
                  aria-label='changeColors'
                  component={Link}
                  naked
                  href='/changecolor'
                  color={selectedIndex === 2 ? 'secondary' : 'inherit'}
                >
                  <PaletteIcon />
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
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
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
        <Hidden mdDown implementation='css'>
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
        <Container maxWidth='lg'>{props.children}</Container>
      </main>
    </div>
  );
}

export default Layout;
