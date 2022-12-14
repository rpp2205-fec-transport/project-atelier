import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import clicked from '../Clicked.js';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      name: '',
      item: ''
    }
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.setState({ 
      name: this.props.selectedStyle.name.toUpperCase(), 
      item: this.props.styles[0].name
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStyle.name !== prevProps.selectedStyle.name) {
      this.setState({ name: this.props.selectedStyle.name.toUpperCase()});
    }
    if (this.props.styles !== prevProps.styles) {
      this.setState({ item: this.props.styles[0].name});
    }
  }

  onClick(event) {
    event.preventDefault();
    clicked('product-overview', event.target.className);
    this.setState({ item: event.target.id });
    this.props.selectImage(event.target.id, event.target.getAttribute('index'));
    return false;
  }

  render() {
    return (<div className='style-container'>
      <span className='style-info'>STYLE ></span>
      <span className='style-name' id='style-name'>{this.state.name}</span>
      <div className='style-gallery'>
        {this.props.styles.map((style, index) => (
            <div className='style-container-row' key={index}>
              <AiFillCheckCircle className={this.state.item === style.name ? 'style-tag' : 'style-tag-hidden' }/>
              <img 
                className={this.state.item === style.name ? 'selected' : 'style-image'} 
                alt='image in style gallery'
                draggable='false' 
                index={index} 
                id={style.name} 
                src={style.photos[0].thumbnail_url} 
                onClick={this.onClick} />
            </div>))}
      </div>
    </div>)
  }
};

export default StyleSelector;