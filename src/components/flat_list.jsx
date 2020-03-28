import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Flat from './flat.jsx';
import flats from '../data/flat.js'

class FlatList extends Component {

  render () {

  flats.map((flat, index) => {
    flat.id = index;
  })

    return (
    <div className="flat-list">
      {flats.map((flat, index) => {
        return <Flat flatparams={flat} key={flat.id}/>;
      })}
    </div>
    );
  }
}


export default FlatList;
