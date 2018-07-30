import React from "react";
import { connect } from "react-redux";
import { fetchBikes } from "../manager/actions";
import BikeCard from "../components/BikeCard";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchBikes());
  }

  render() {
    const { error, loading, products } = this.props;
    console.log("Bikes props: ", this.props)

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {products.map(product =>
          <BikeCard
            key = {product.id}
            id = {product.id}
            name = {product.name}
            description = {product.description}
            types = {product.class}
            imageSmall = {product.image.thumb}
            imageLarge = {product.image.large}
          />
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: state.bikes.items,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(ProductList);