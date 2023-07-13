import {useEffect, useState} from "react";


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
                <div key={primarch.id} style={{border: "1px solid black", padding: 10, margin: 10}}>
                    <h2>{primarch.firstCaptain}</h2>
                    <p>{primarch.homePlanet}</p>

                </div>
            ))}
        </>
    )
}
export default Primarchs;