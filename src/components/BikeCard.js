import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const BikeCardProps = {
 id: PropTypes.number.isRequired,
 name: PropTypes.string.isRequired,
 description: PropTypes.string.isRequired,
 class: PropTypes.arrayOf(PropTypes.string),
 imageSmall: PropTypes.string.isRequired,
 imageLarge: PropTypes.string.isRequired,
}


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  },
});


class BikeCard extends React.Component {
  render() {
    const { classes, id, name, description, imageSmall, imageLarge } = this.props; 
    
    return (
      <div>
        <Card className="Bike-Card">
          <CardHeader 
            className="Bike-Card-Header" 
            title={name}
            //subheader={class}
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


BikeCard.propTypes = BikeCardProps;


export default withStyles(styles)(BikeCard);