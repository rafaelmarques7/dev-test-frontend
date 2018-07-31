import React from "react";
import { connect } from "react-redux";
import { 
  fetchBikes, 
  setBikesFilter
 } from "../manager/actions";
import { 
  getCurrentFilter, 
  getFilteredBikes, 
  getAllCategories
} from "../manager/selectors";
import FilterBikes from "../components/FilterBikes";
import BikeCard from "../components/BikeCard";


class ProductList extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchBikes());
  }

  render() {
    const { categories, filter, products, loading, error, onSetFilter } = this.props;
    console.log("Bikes props: ", this.props)

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
          onSetFilter={(cat) => { this.props.dispatch(setBikesFilter(cat))} }
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


// const mapDispatchToProps = dispatch => ({
//   onSetFilter: setBikesFilter,
// })


export default connect(
  mapStateToProps, 
  //mapDispatchToProps
)(ProductList);