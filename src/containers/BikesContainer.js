/** 
 * BikesContainer.js
 * This is a container for our app.
 * It has access and is continuously connected the Redux store.
 * It dispatches the asynch fetchBikes() action, which calls the API,
 * on the componentDidMount() lifecycle method.
 * Since this container is only called once, the API call is also only called once.
 * This container also invokes the FilterBikes and BikesList presentational components. 
*/
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { 
  fetchBikes, 
  setBikesFilter
} from "../manager/actions";
import { 
  getCurrentFilter, 
  getFilteredBikes, 
  getAllCategories
} from "../manager/selectors";
import BikesList from "../components/BikesList";
import FilterBikes from "../components/FilterBikes";


class BikesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBikes();
  }
  
  render() {
    return(
      <div>
        <FilterBikes {...this.props} />
        <BikesList {...this.props} />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  categories: getAllCategories(state),
  filter: getCurrentFilter(state),
  products: getFilteredBikes(state, getCurrentFilter(state)),
  loading: state.loading,
  error: state.error,
});


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchBikes, 
    setBikesFilter   
  }, dispatch);
};


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BikesContainer);