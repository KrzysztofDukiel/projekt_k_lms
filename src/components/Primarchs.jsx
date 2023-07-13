import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Primarchs() {
    const [primarchs, setPrimarchs] = useState([]);
    useEffect(() => {
        const controller = new AbortController();
        getData(controller.signal).then((data) => setPrimarchs(data));

        return () => {
            controller.abort();
        };
    }, []);
    function getData(signal) {
        return fetch("http://localhost:3000/primarchs", { signal })
            .then((response) => response.json())
    }

    return (
        <>
            {primarchs.map((primarch)=> (
                <div key={primarch.index} style={{border: "1px solid black", padding: 10, margin: 10}}>
                    <h2>Primarch {primarch.firstCaptain}</h2>
                    <p>Planet Origin {primarch.homePlanet}</p>
                    <Link to={`/primarch/${primarch.index}`}>Lore</Link>
                </div>
            ))}
        </>
    )
}
export default Primarchs;