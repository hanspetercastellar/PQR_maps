
import React,{Component} from "react";
import L from 'leaflet'
import {Map, TileLayer, Marker, Popup} from "react-leaflet";

var myIcon = L.icon({
    iconUrl:'http://joshuafrazier.info/images/firefox.svg',
    iconSize:[25,41],
    iconAnchor:[12.5, 41],
    popupAnchor:[0,-41]
})

class Mapa extends Component{
    constructor() {
        super();
        this.state = {
            lat: 10.9878,
            lng: -74.7889,
            zoom: 13,
        }
    }



    render(){
        const position = [this.state.lat, this.state.lng]
        return(
            <>
                <Map className={'map'} center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={myIcon}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>
            </>


        )

    }

}

export default Mapa
