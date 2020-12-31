import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import EuroIcon from '@material-ui/icons/Euro';
import { withStyles } from '@material-ui/core/styles';

const useStyles = {
  root: {
    padding: '10px',
  },
};

const CustomAppBar = ({classes}) => {
  return (

    <AppBar position="static" className={classes.root}>
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <EuroIcon />
        </IconButton>
        <Typography variant="h5" color="inherit">
          Currency Converter
    </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(useStyles)(CustomAppBar);
