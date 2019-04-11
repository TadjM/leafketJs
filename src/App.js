import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      lat: 40.730610,
      lng: -73.935242,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);