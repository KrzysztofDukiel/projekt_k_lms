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
        return fetch("http://localhost:3000/primarchs", {signal})
            .then((response) => response.json())
    }

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: 100,
                border: "2px solid black",
                padding: 20
            }}><img src="src/img/imperator.jpg" alt=""/>
            <h2>Emperor of the Mankind</h2>
            <p>The Emperor, also known as the Master of Mankind, is the enigmatic and immensely powerful ruler of the Imperium of Man. He is a near-immortal being with unparalleled psychic abilities and an ambition to guide humanity towards its ultimate destiny.

                The Emperor's story begins in ancient times, during the Dark Age of Technology, when humanity was spread across the stars. He was born as a powerful psyker, gifted with incredible psychic powers and a vision of uniting all of humanity under his rule. He sought to eliminate the dangers of Chaos, xenos threats, and establish a golden age for mankind.

                To achieve his goals, the Emperor embarked on the Great Crusade, a massive military campaign to reunite all human-settled worlds under the banner of the Imperium. He created genetically enhanced superhuman warriors known as the Space Marines, and his 20 genetically engineered sons, the Primarchs, were to be the leaders of these Legions.

                However, chaos and treachery befell the Emperor's grand plan. One of his sons, Horus Lupercal, the Primarch of the Luna Wolves Legion, fell to the seductive whispers of Chaos and led a rebellion known as the Horus Heresy. This cataclysmic conflict tore apart the Imperium and pitted brother against brother.</p></div>
            <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                {primarchs.map((primarch) => (
                    
                    <div key={primarch.id} style={{border: "1px solid black", padding: 10, margin: 10, width: 300}}>
                        <img src={primarch.photo} alt="" style={{width: "300px", height: "300px"}}/>
                        <h3>Primarch {primarch.firstCaptain}</h3>
                        <p>Planet Origin {primarch.homePlanet}</p>
                        <Link to={`/primarch/${primarch.id}`}>Lore</Link>
                    </div>
                ))}

            </div>
            )
        </>
    )
}

export default Primarchs;