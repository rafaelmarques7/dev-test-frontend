/**
 * FilterBikes.js is a component to select a filter
 * which will be used to constrain the displayed Bikes list.
 * This component is implemeneted using the DropDown menu 
 * provided by Material-ui.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


// list the necessary props
const FilteredBikesProps = {
  // the currently selected filter
  filter: PropTypes.string.isRequired,
  // array of categories to be presented as items in a list
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Action to be dispatched when an item is clicked
   * Function arguments:
   *    category ("all" or one of the provided by categories )
   */
  onSetFilter: PropTypes.func.isRequired,
}


// Define the presentational component and its logic
class FilterBikes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      currCategory: "all",
    };
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = (cat) => {
    this.setState({ anchorEl: null });
  }

  handleMenuItemClick = (event, cat) => {
    this.setState({
      currCategory: cat,
      anchorEl: null,
    })
    this.props.onSetFilter(cat)
  }

  render() {
    const { categories } = this.props;
    const { anchorEl, currCategory } = this.state; 

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Show {currCategory}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem key={0} onClick={event => this.handleMenuItemClick(event, "all")}>
            All
          </MenuItem>
          {
            categories.map((cat, i) => {
              return (
                <MenuItem key={i} onClick={event => this.handleMenuItemClick(event, cat)}>
                  {cat}
                </MenuItem>
              )
            })
          }
        </Menu>
      </div>
    );
  }
}


// apply the props
FilterBikes.propTypes = FilteredBikesProps;


// export the component
export default FilterBikes;
