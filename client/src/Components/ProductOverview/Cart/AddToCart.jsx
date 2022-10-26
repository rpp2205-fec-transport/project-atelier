import React from 'react';
import axios from 'axios';
import QuantitySelector from './QuantitySelector.jsx';
import SizeSelector from './SizeSelector.jsx';
import { FaHeart } from 'react-icons/fa';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      sizes: [],
      quantity: [],
      selectedSize: 0,
      reset: false
    }

    this.getQuantity = this.getQuantity.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.sendCart = this.sendCart.bind(this);
    this.favorite = this.favorite.bind(this);
  }

  componentDidMount() {
    this.getQuantity();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle !== prevProps.selectedStyle) {
      this.getQuantity();
    };
  }

  selectSize(size) {
    this.setState({ selectedSize: size });
  }

  getQuantity() {
    var skus = this.props.styles[0].skus;
    var sizeArray = [];
    var quantityArray = [];

    for (var key in skus) {
      if (skus[key].quantity > 0) {
        sizeArray.push(skus[key].size);
        quantityArray.push(skus[key].quantity);
      }
    };

    this.setState({ 
      sizes: sizeArray, 
      quantity: quantityArray
    });
  }

  sendCart() {
    if (document.getElementById('quantity-selector') === null) {
      document.getElementById('select-size').click();
      //alert('Please select a size');
      return;;
    }

    var size = document.getElementById('select-size');
    var chosenSize = size.options[size.selectedIndex].text;
    var chosenQuantity = document.getElementById('quantity-selector').value;
    var chosenProduct = document.getElementById('product-name').innerHTML;
    var chosenStyle = document.getElementById('style-name').innerHTML;

    alert(`You have added the following item to your bag: \n 
          Product: ${chosenProduct} \n
          Style: ${chosenStyle} \n
          Size: ${chosenSize} \n
          Quantity: ${chosenQuantity}`);
  }

  favorite(event) {
    event.preventDefault();
    this.props.favorite(this.props.product);
  }

  render() {
    return (<div className='product-btn-grp'>
      <div className='selectors'>
        <span className='size-selector'>
          <SizeSelector 
            sizes={this.state.sizes} 
            quantity={this.state.quantity[0]} 
            selectSize={this.selectSize} 
            styles={this.props.styles}
            reset={this.props.reset} />
          </span>
        <span className='quant-selector'>
          {this.state.quantity.length > 0 &&
            <QuantitySelector 
              quantity={this.state.quantity} 
              size={this.state.selectedSize}
              styles={this.props.styles}/>}
          </span>
      </div>
      <div className='buy-buttons'>
        <button className='add-cart' onClick={this.sendCart}>Add to Bag</button>
        <button className='add-style' onClick={this.favorite}><FaHeart className='heart-icon'/></button> 
      </div>      
    </div>)
  }
};

export default Cart;