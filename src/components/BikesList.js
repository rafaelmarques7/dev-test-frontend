/**
 * BikesList.js
 * Presentational component to display a grid/list of "Bikes".
 * Each "Bike" corresponds to a BikeCard component.
 * It also displays errors and loading information, if that is the case.
 */
import React from "react";
import BikeCard from "./BikeCard";
import GridWrapper from "./GridWrapper";
import PropTypes from 'prop-types';


const propTypes = {
  // Array with bikes information
  products: PropTypes.array.isRequired,
  // Bool object to inform user if data is loading or not
  loading: PropTypes.bool.isRequired,
  // Object with information regarding a possible error. Has falsy value if there are no errors.
  error: PropTypes.object,
}

const defaultProps = {
  products: [],
}


const BikesList = ({ products, loading, error }) => {
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <GridWrapper>
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
    </GridWrapper>
  );
}


BikesList.propTypes = propTypes;
BikesList.defaultProps = defaultProps;

export default BikesList;