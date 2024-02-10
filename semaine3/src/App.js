import React, {useState} from 'react';

import './App.css';
import StageTable from './components/StageTable.js'
import NewStageForm from './components/NewStageForm.js'



function App() {

  const [stages, setStages] = useState(
    [
      {rowNumber:1, rowDescription: 'Stage Java', rowEntreprise: 'Hydro Qc'},
      {rowNumber:2, rowDescription: 'Stage React', rowEntreprise: 'Bell'},
      {rowNumber:3, rowDescription: 'Stage SQL', rowEntreprise: 'ABC inc'}
    ]
  )

  const addStage = () => {
    let rowNumber=0;//let porté local mais var global

    /**console.log('Add stage clicked!') */
    if(stages.length > 0){
      rowNumber=stages[stages.length-1].rowNumber
    }
    else{
      rowNumber=1;
    }
      const newStage = {rowNumber, rowDescription: 'Stage Réseau', rowEntreprise: 'Marie-Vic'}
      //stages.push(newStage);
      //console.log(stages);
      setStages(stages => [...stages, newStage])
    }

    const deleteStage=(paramaetre)=>{
      let filtered = stages.filter( function(value){

        return value.rowNumber!== paramaetre
      });
      setStages(filtered);

    }

  return (
    <div className='mt-5 container' >
      <div className='card'>
        <div className='card-header'>
          Liste des stages
        </div>
        <div className='card-body'>
          <StageTable stages={stages} deleteStage={deleteStage}/>
          <button className='btn btn-primary' onClick={addStage}>
            Add Stage
          </button>
          <NewStageForm addStage={addStage} />
        </div>
      </div>
    </div>
  );
}

export default App;