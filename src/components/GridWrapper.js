/**
 * This component should wrap the BikeCard presentational component as to present a flexible layout.
 * We want 3 columns for Medium+ devices, and a single column for small ones.
 */


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});



function FullWidthGrid(props) {
  const { classes, children } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {
          children.map((child) => {
            return (
              <Grid item xs={12} md={4}>
                {child}
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(FullWidthGrid);