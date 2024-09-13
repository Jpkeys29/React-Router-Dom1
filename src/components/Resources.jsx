import { Link } from 'react-router-dom';

export default function Resources() {
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
