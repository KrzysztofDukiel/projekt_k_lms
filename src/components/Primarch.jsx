import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";



function Primarch() {
    const { primarchIndex } = useParams();
    const [primarch, setPrimarch] = useState(null);
    useEffect(()=> {
        const controller =new AbortController();
        getPrimarch(primarchIndex, controller.signal).then((data)=> setPrimarch(data));
        return ()=> {
            controller.abort();
        }
    }, [primarchIndex])

    function getPrimarch(id, signal) {
        return fetch(`http://localhost:3000/products/${id}`, {signal}).then((response)=> response.json())
    }
    if(!primarch) {
        return <h2>Loader.....</h2>;
    }
    return (
        <div>
            <h2>primarch.firstCaptain</h2>
            <h3>primarch.homePlanet</h3>
            <p>primarch.description</p>
            <Link to="/">Back</Link>
        </div>
    )
}

export default  Primarch;