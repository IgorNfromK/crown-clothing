//import './collection-item.styles.scss';

import {Button, CollectionFooter, CollectionItemStyle, Image, Name, Price} from './collection-item.styles'

import React from 'react';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemStyle>
      <Image
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>
      <Button
        onClick={() => addItem(item)}
        inverted
      >
        Add to cart
      </Button>
    </CollectionItemStyle>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);