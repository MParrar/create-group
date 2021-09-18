import React from 'react'

export const Tabla = ({ team1, team2 }) => {

    if (team1.length === 0) return null;

    return (
        <>
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="col m6 s12">
                            <h4 style={{ color: "white" }}><b>Grupo 1</b></h4>
                            <ul>
                                {team1.map((item, i) => (
                                    <li key={i}>
                                        <span style={{ color: "#11ABD8" }}>{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col m6 s12">
                            <h4 style={{ color: "white" }}><b>Grupo 2</b></h4>
                            <ul>
                                {team2.map((item, i) => (
                                    <li key={i}>
                                        <span style={{ color: "#11ABD8" }}>{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}
