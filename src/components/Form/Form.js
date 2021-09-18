import React from 'react';
import { GrAdd, GrFormSubtract } from 'react-icons/gr';
import { makeGroups } from '../../helpers/makeGroups';
import Swal from 'sweetalert2';


export const Form = ({ group, setGroup, setTeams, setLoading }) => {


    const add = (e) => {
        e.preventDefault()
        const newGroup = { name: "" };
        setGroup([...group, newGroup]);
    }

    const less = (i, e) => {
        e.preventDefault()
        const filterGroup = group.filter((item, id) => i !== id);
        setGroup(filterGroup);
    }

    const handleChangeGroup = ({ target: { name, value } }, index) => {
        const newGroup = [...group];
        newGroup[index][name] = value;
        setGroup(newGroup);
    }

    const validateComplete = () => {
        return group.map((item) => item.name.length > 2 ? true : false).some((element) => element === false)

    }

    const generateGroup = (e) => {
        e.preventDefault();
        if (validateComplete()) {
            return Swal.fire({
                icon: 'error',
                title: 'Falta información amiguito',
                text: 'por favor valida que todos los campos contengan nombre o elimina el que no contiene información',
            })

        }
        const aux = makeGroups(group);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setTeams(aux);

        }, 3000);

    }

    return (
        <form onSubmit={generateGroup} >
            {group.map((item, i) => (
                <div key={i} className="input-field col s12">
                    <label htmlFor="name" >Nombre</label>

                    <input
                        type="text"
                        name="name"
                        style={{ color: 'white' }}
                        onChange={(e) => handleChangeGroup(e, i)}
                    />
                    {
                        i === 0 ?
                            <button className="btn-floating btn-small waves-effect waves-light light-blue" onClick={(e) => add(e)}><GrAdd /></button>
                            :
                            <>

                                <button className="btn-floating btn-small waves-effect waves-light light-blue" style={{ marginRight: "4px" }} onClick={(e) => add(e)}><GrAdd /></button>

                                <button className="btn-floating btn-small waves-effect waves-light red darken-4" style={{ marginLeft: "1px" }} onClick={(e) => less(i, e)}><GrFormSubtract /></button>
                            </>
                    }

                </div>
            ))

            }
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="col m6 s12"></div>
                        <button className="green accent-4 waves-effect waves-light btn" disabled={group.length < 2} type="submit">Generar Grupos</button>

                    </div>
                </div>
            </div>


        </form>
    )
}

