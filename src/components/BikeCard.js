/**
 * BikeCard.js
 * Presentational component for the display of the Bike information 
 * Component follows an "Instagram" style
 * The heavy lifting is enabled by Material-ui library
 * in particular the "Card" component
 */

import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import blue from "@material-ui/core/colors/blue";
import { withStyles } from '@material-ui/core/styles';


const BikeCardProps = {
  // Used to override or extend the styles of the components
  classes: PropTypes.object.isRequired,
  // Identification number
  id: PropTypes.number.isRequired,
  // Name of the Bike
  name: PropTypes.string.isRequired,
  // Description of the Bike
  description: PropTypes.string.isRequired,
  // List describing the categories(classes) of the bikes
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  // URL's pointing to the images
  imageSmall: PropTypes.string.isRequired,
  imageLarge: PropTypes.string.isRequired,
}


// Overwrite styles
const styles = theme => ({
  card: {
    maxWidth: 500,
    marginLeft: "auto",
    marginRight: "auto",
  },
  media: {
    height: 0,
    paddingTop: '60%', // different value tested, 60% fits the image in the best way
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[400],
  },
});


class BikeCard extends React.PureComponent {
  render() {
    const { 
      name, 
      classes, 
      categories, 
      imageSmall, 
      imageLarge, 
      description, 
    } = this.props; 
    
    return (
      <div>
        <Card 
          className={classes.card}>             {/* className using classes prop object is necessary for applying CSS styles*/}
          <CardHeader  
            title={name}
            subheader={categories.join(', ')}        // Use .join() to create a string from an array
            avatar = {
              <Avatar
                className={classes.avatar}
                src={imageSmall}
              />
            }
          />
          <CardMedia 
            className={classes.media}
            image={imageLarge} 
            src={imageLarge}
          />
          <CardContent>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

/**
 * Apply propTypes to the component
 * Note: propTypes are defined as a const in the top of the file
 * in order to increase their visibility
 */
BikeCard.propTypes = BikeCardProps;


/**
 * Exports the component;
 * Overwrites/Extends the component styles 
 */
export default withStyles(styles)(BikeCard);