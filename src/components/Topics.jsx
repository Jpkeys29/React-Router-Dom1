import { useState, useEffect } from "react";

const GetLocation = () => {
    // const [location, setLocation] = useState({ postings: [] })
    const [area, setArea] = useState([])
    const [filteredArea, setFilteredArea] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/api/get_posting");
                const result = await response.json();
                console.log(result)
                if (result.postings) {
                    const areaList = result.postings.map(posting => posting.area);
                    setArea(areaList);
                }
            } catch (error) {
                console.log('Error fetching area or neighborhood:', error);
            }
        };
        fetchLocation();
    }, []);

    useEffect(() => {
        setFilteredArea(area.filter(area => area.toLowerCase().includes(searchTerm.toLowerCase())));
    }, [searchTerm, area])

    const handleLocationChange = (e) => {
        setSearchTerm(e.target.value);
    }
    return (
        <div>
            {/* <ul>
                {location.postings && location.postings.map((l, index) => (
                    <li key={l.id || index}>


                        {typeof l.area === 'string' && <p style={{ color: 'red' }}>{l.area}</p>}
                        <br />
                        <p style={{ color: 'green' }}>
                            {l.neighborhood}
                        </p>
                    </li>
                ))}
            </ul> */}
            <input
            type="text"
            placeholder="Type Location"
            value={searchTerm}
            onChange={handleLocationChange}
            />

            <ul>
                {filteredArea.map((area, index) => (
                    <li key={index} style={{ color: 'green' }}>
                        {filteredArea}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GetLocation;