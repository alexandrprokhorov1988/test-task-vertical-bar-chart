import React from 'react';
import './App.css';
import Diagram from '../../components/Diagram/Diagram';
import {data, dataBig} from '../../utils/data';

function App() {

  return (
    <div className="page">
      <section className="diagram">
        <Diagram
          width={768}
          height={200}
          data={data}
          padding={2}
        />
      </section>
      <section className="diagram">
        <Diagram
          width={768}
          height={200}
          data={dataBig}
          padding={2}
        />
      </section>
    </div>
  );
}

export default App;
