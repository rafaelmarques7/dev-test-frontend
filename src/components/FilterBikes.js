/**
 * FilterBikes.js 
 * This is a presentational component to display a dropdown menu, displaying all bikes Categories, 
 * which can be used to set a filter to constrain the presented list.
 * This component is implemeneted using the DropDown menu 
 * provided by Material-ui.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const propTypes = {
  /**
   * the currently selected filter 
   * default: "all" - (provided by initial state)
   */
  filter: PropTypes.string.isRequired,
  /**
   * categories to be presented as items in a dropdown menu
   */
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Action to be dispatched when an item is clicked
   * @param {string} category representing the filter to be applied
   */
  setBikesFilter: PropTypes.func.isRequired,
}


// set defaultProps to avoid passing them in the test files
const defaultProps = {
    filter: "all",
    categories: [],
    setBikesFilter: () => {},
}


class FilterBikes extends React.Component {

  constructor(props) {
    super(props);
    this.state = { anchorEl: null };
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
    //this.props.onSetFilter(cat)
    this.props.setBikesFilter(cat)
  }

  render() {
    const { anchorEl } = this.state; 
    const { filter, categories } = this.props;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Show {filter}
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


// apply the propTypes and defaultProps
FilterBikes.propTypes = propTypes;
FilterBikes.defaultProps = defaultProps;



// export the component
export default FilterBikes;
