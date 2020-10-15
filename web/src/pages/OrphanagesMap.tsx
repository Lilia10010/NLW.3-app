import React from 'react'
import { Link } from 'react-router-dom'
import {  FiPlus } from 'react-icons/fi'

import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'


function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Fortaleza</strong>
                    <span>Ceara</span>
                </footer>
            </aside>

            <Map 
                center={[-3.805842,-38.5847961]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}
            >
                 {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

                 <TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGlsaWF4dCIsImEiOiJja2dheWl2bGMwYnM5MzBtaWZ1aXFpYng5In0.bxlpUvadD1O_WQXG8dKNmQ`}
            />                                 
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>

        </div>
    )
}

export default OrphanagesMap