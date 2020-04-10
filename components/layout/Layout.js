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
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

let rendered = 0;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
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

function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}

function Layout(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    rendered++;
    console.log(`rendered ${rendered} times`);
  });

  const drawer = (
    <div>
      <div className={classes.toolbar}>text</div>
      <Divider />
      <List component='nav'>
        <ListItem
          button
          component={Link}
          naked
          href='/'
          // selected={selectedIndex === 0}
          // onClick={(event) => handleListItemClick(event, 0)}
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
          // selected={selectedIndex === 1}
          // onClick={(event) => handleListItemClick(event, 1)}
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
          // selected={selectedIndex === 2}
          // onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <PaletteIcon />
          </ListItemIcon>
          <ListItemText primary='Change Color' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Brightness4Icon />
          </ListItemIcon>
          <ListItemText primary='Day/Night' />
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
          <div className={classes.grow} />
          <Tooltip title='Blog' enterDelay={300}>
            <IconButton
              color='inherit'
              aria-label='blog'
              component={Link}
              naked
              href='/'
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>
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
        <Hidden smDown implementation='css'>
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
