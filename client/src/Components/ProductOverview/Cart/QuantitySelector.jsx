import React from 'react';

class QuantitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: [],
      selectValue: '',
      disabled: true
    }
    this.handeChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.enableDropDown = this.enableDropDown.bind(this);
  }

  componentDidMount() {
    this.setQuantity();
  }

  componentDidUpdate(prevProps) {
    if (this.props.quantity !== prevProps.quantity) {
      this.setState({ disabled: true });
      this.setQuantity();
    };
    if (this.props.size !== prevProps.size) {
      this.enableDropDown();
      this.setQuantity();
    } 
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({selectValue: event.target.value});
  }

  handleClear() {
    this.setState({selectValue: ''});
  }

  setQuantity() {
    this.handleClear();
    if (this.props.quantity[this.props.size] <= 15) {
      this.setState({ quantity: this.props.quantity[this.props.size] });
    } else {
      this.setState({ quantity: 15});
    }
  }

  enableDropDown() {
    this.setState({ disabled: false });
  }

  render() {
    return (<div className='quantity'>
      <label>
        Quantity:
        {this.state.disabled === true &&
          <select name='quantity' disabled={true} defaultValue='-'>
            <option>{'--'}</option>
            </select>}
        {this.state.disabled === false && 
          <select name='quantity' defaultValue={this.state.selectValue}>
          {[...Array(this.state.quantity)].map((e, i) => (
            <option key={i}>{i + 1}</option>
          ))}          
        </select>}  
      </label>
    </div>)
  }
};

export default QuantitySelector;