import { useState, useEffect } from "react";

const GetLocation = () => {
    const [location, setLocation] = useState({postings: []})

    useEffect(() => {
        const fetchLocation = async () => {
            try{
                const response = await fetch("http://127.0.0.1:5000/api/get_posting");
                if(!response.ok){
                    throw new Error('Network response was not Ok')
                }
                const result = await response.json();
                console.log(result)
                setLocation(result);
                // console.log(typeof location)
            } catch(error) {
                console.log('Error fetching area or neighborhood:', error);
            }
        };
        fetchLocation();
    }, []);
    return (
        <div>
            <ul>
                {location.postings && location.postings.map((l, index) => (
                    <li key={l.id || index}>
                        {typeof l.area === 'string' && <span>{l.area}</span>}
                        {l.neighborhood}
                    </li>
                ))}
            </ul>  
        </div>
    )
}

export default GetLocation;