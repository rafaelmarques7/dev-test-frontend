import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import BikeCard from "../components/BikeCard";
import FilterBikes from "../components/FilterBikes";
import { 
  fetchBikes, 
  setBikesFilter
 } from "../manager/actions";
import { 
  getCurrentFilter, 
  getFilteredBikes, 
  getAllCategories
} from "../manager/selectors";


class ProductList extends React.Component {
  
  componentDidMount() {
    this.props.fetchBikes();
  }

  render() {
    const { categories, filter, products, loading, error, setBikesFilter } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <FilterBikes 
          filter={filter}
          categories={categories}
          onSetFilter={(cat) => { setBikesFilter(cat)} }
        />
        <ul>
          {products.map(product =>
            <BikeCard
              key = {product.id}
              id = {product.id}
              name = {product.name}
              description = {product.description}
              categories = {product.class}
              imageSmall = {product.image.thumb}
              imageLarge = {product.image.large}
            />
          )}
        </ul>
      </div>
    );
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
)(ProductList);