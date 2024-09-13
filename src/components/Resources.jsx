"use client";
import { Link } from 'react-router-dom';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, } from "@vis.gl/react-google-maps";
import { useEffect, useState, useRef } from 'react';

const libraries = ['places']

export default function Resources() {
    const position = { lat: 41.3874, lng: 2.1686 }
    return (
        <APIProvider apiKey={"AIzaSyCUJR3_A9ZMaEw8sTXPNL8WTKt8I-Im-N8"}>
            <div style={{height:"100vh", width: "100%"}}>
                <Map
                defaultZoom={9}
                defaultCenter={position}
                mapId={"8c9ad6043cdacdc5"}
                >
                    <AdvancedMarker position={position}/>
                </Map>
            </div>
            {/* <Link to={'/'}>Home</Link> */}
        </APIProvider>
    );
}