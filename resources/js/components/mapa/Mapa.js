
import React,{Component} from "react";
import L from 'leaflet'
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import img from './img/marker.svg'
import ListMark from "./listMark"
import swal from 'sweetalert';

var myIcon = L.icon({
    iconUrl: img,
    iconSize:[25,41],
    iconAnchor:[12.5, 41],
    popupAnchor:[0,-41]
})

class Mapa extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lat: 10.9878,
            lng: -74.7889,
            zoom: 13,
            pqr:[],
            status:false,
        }
        this.handleClick = this.handleClick.bind(this)
    
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.pqrs.length==1){
            nextProps.pqrs.forEach(el=>{
                this.setState({
                    lat:el.latitud,
                    lng:el.longitud,
                    pqr:nextProps.pqrs,
                })
            })

        }


    }
    handleClick(ev){
        const latLong = ev.latlng
        alert(latLong)
    }

    async componentDidMount(){
        let request = await fetch('/getData')
        let res = await request.json()
        
        if(res){
            this.setState({
               pqr:res,
                status:true
            })
        }
    }

    render(){
        console.log(this.state.pqr)

        const position = [this.state.lat, this.state.lng]
        const pqrs = this.state.pqr
        var marker = new Array()

        this.state.pqr.forEach((element,i) => {
            marker.push(
                        <Marker key={i} position={[element.latitud,element.longitud]} icon={myIcon}>
                            <Popup>
                                  <ListMark estructura={element.infr} barrio={element.barrio} problema={element.problema} fecha={element.fecha}/>
                            </Popup>
                        </Marker>              
            )
        });
        

        return(
            <>
                <Map
                 className={'map'}
                 center={position}
                 click={this.handleClick}
                 zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                  
                    {marker}
                  
                </Map>
            </>


        )

    }

}

export default Mapa
