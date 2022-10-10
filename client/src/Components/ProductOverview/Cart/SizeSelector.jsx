import React from 'react';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleSizes: []
    }
    this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selectValue: event.target.value});
  }

  render() {
    return (<div>
      <label>
        Size:
        <select name='sizes' defaultValue={'DEFAULT'} >
          <option value='DEFAULT' disabled>Select Size</option>
          {this.props.sizes.map((size, index) => (
            <option key={index}>{size}</option>
          ))}
        </select>
      </label>
    </div>)
  }
}

export default SizeSelector;