import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import Link from 'next/link';
import Link from '../Link';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PaletteIcon from '@material-ui/icons/Palette';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grow: {
    flex: '1 1 auto',
  },
}));

function Layout(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let appBarTitle;

  if (selectedIndex === 0) {
    appBarTitle = 'Blog';
  }

  if (selectedIndex === 1) {
    appBarTitle = 'Add Post';
  }

  if (selectedIndex === 2) {
    appBarTitle = 'Change Color';
  }

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Box p={1} pt={2} pl={2} display='flex'>
          <Box pr={3}>
            <EmojiPeopleIcon />
          </Box>
          <Typography variant='h5'>miniCMS</Typography>
        </Box>
      </div>
      <Divider />
      <List component='nav'>
        <ListItem
          button
          component={Link}
          naked
          href='/'
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Blog' />
        </ListItem>
        <ListItem
          button
          component={Link}
          naked
          href='/addpost'
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary='Add Post' />
        </ListItem>
        <ListItem
          button
          component={Link}
          naked
          href='/changecolor'
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <PaletteIcon />
          </ListItemIcon>
          <ListItemText primary='Change Color' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            {theme.palette.type === 'light' ? (
              <Brightness4Icon />
            ) : (
              <Brightness5Icon />
            )}
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
          <ListItemText primary='Portfolio' />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
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
                onClick={(event) => handleListItemClick(event, 0)}
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
                onClick={(event) => handleListItemClick(event, 1)}
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
                onClick={(event) => handleListItemClick(event, 2)}
                color={selectedIndex === 2 ? 'secondary' : 'inherit'}
              >
                <PaletteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Dark/Light' enterDelay={300}>
              <IconButton color='inherit' aria-label='darkLight'>
                {theme.palette.type === 'light' ? (
                  <Brightness4Icon />
                ) : (
                  <Brightness5Icon />
                )}
              </IconButton>
            </Tooltip>
          </Hidden>
        </Toolbar>
      </AppBar>
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
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
