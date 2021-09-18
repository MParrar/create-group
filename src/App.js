import React, { useState } from 'react'
import { Form } from './components/Form/Form'
import { Spinner } from './components/Spinner/Spinner';
import { Tabla } from './components/Tabla/Tabla';

function App() {

  const [group, setGroup] = useState([{
    name: ""
  }]);

  const [loading, setLoading] = useState(false)

  const [teams, setTeams] = useState({ team1: [], team2: [] })
  const { team1, team2 } = teams;
  return (
    <>
      <nav style={{ marginTop: '-16px' }}>
        <div className="nav-wrapper light-blue darken-2">
          <h5 className="center-align" style={{ paddingTop: '16px' }}>Crear Grupos</h5>
        </div>
      </nav>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                group={group}
                setGroup={setGroup}
                setTeams={setTeams}
                setLoading={setLoading}
              />
            </div>
            <div className="col m6 s12">
              {loading ?
                <Spinner />
                :
                <Tabla
                  team1={team1}
                  team2={team2}
                />

              }
            </div>
          </div>

        </div>
      </div>




    </>
  );
}

export default App;
