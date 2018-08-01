/**
 * This component wraps around any list of children nodes
 * and presents them in a flexible grid system.
 * It displays 3 columns for Medium+ devices, and a single column for small ones.
 * This component is supported by the material-ui Grid system.
 */


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const propTypes = {
  /**
   * children are the targets around which this component wraps itself
   * building a fluid grid system
   */
  children: PropTypes.node.isRequired,
  /**
   * default prop necessary to style component
   */
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
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

FullWidthGrid.propTypes = propTypes;

export default withStyles(styles)(FullWidthGrid);