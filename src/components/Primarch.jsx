import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";


function Primarch() {
    const { primarchId } = useParams();
    const [primarch, setPrimarch] = useState(null);
    useEffect(()=> {
        const controller =new AbortController();
        getPrimarch(priamrchId, controller.signal).then((data)=> setPrimarch(data));
        return ()=> {
            controller.abort();
        }
    }, [primarchId])

    function getPrimarch(id, signal) {
        return fetch(`http://localhost:3000/products/${id}`, {signal}).then((response)=> response.json())
    }
    if(!primarch) {
        return <h2>Loader.....</h2>;
    }
    return (
        <div>
            <h2>primarchs.firstCaptain</h2>
            <h3>primarchs.homePlanet</h3>
            <p>primarchs.description</p>
        </div>
    )
}

