import React, { useState } from 'react';

import Link from 'next/link';

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
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
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
}));

function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}

function Layout(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>text</div>
      <Divider />
      <List component='nav'>
        <Link href='/'>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Blog' />
          </ListItem>
        </Link>
        <Link href='/addpost'>
          <ListItem button>
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary='Add Post' />
          </ListItem>
        </Link>
        <Link href='/changecolor'>
          <ListItem button>
            <ListItemIcon>
              <PaletteIcon />
            </ListItemIcon>
            <ListItemText primary='Change Color' />
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemIcon>
            <Brightness4Icon />
          </ListItemIcon>
          <ListItemText primary='Day/Night' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItemLink href='https://www.github.com'>
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary='GitHub' />
        </ListItemLink>
        <ListItemLink href='https://codesandbox.io'>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary='CodeSandbox' />
        </ListItemLink>
        <ListItemLink href='https://zachscroggins.com'>
          <ListItemIcon>
            <ArrowBackIcon />
          </ListItemIcon>
          <ListItemText primary='Portfolio' />
        </ListItemLink>
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
          <Container>
            <Typography variant='h6' noWrap>
              YourBlog
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
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
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
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
