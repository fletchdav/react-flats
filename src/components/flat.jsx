import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Flat extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="card" style={{
        backgroundImage: `url(${this.props.flatparams.imageUrl})`
      }}
      >
        <div className="card-category">{this.props.flatparams.price} {this.props.flatparams.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flatparams.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}


export default Flat;
