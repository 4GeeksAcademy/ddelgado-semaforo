
import React, { useState } from "react";


const TrafficLight = () => {
    const [color, setColor] = useState('green');
    const cambioColor = (nuevoColor) => {
        setColor(nuevoColor);
    }

    return (
        <main>
            <div className="palito-box"></div>
            <div className="box-light">
                <div className= {`red ${color== "red" ? "light-on" : ""}`}
                onClick={() => cambioColor('red')}
                ></div>
                <div className= { `yellow ${color=="yellow" ? "light-on" :  ""}`}
                onClick={() => cambioColor("yellow")}

                
                ></div>
                <div className= {`green ${color == "green" ? "light-on" : ""}`}
                onClick={() => cambioColor('green')}
                ></div>
            </div>
        </main>
    )
}

export default TrafficLight;