import { useState } from "react";

function NewStageForm(props){

const[description, setDescription] = useState('');
const[entreprise, setEntreprise] = useState('');

const submitStage=()=>{
    if(description !=="" && entreprise!==""){
        props.addStage(description,entreprise);
        setEntreprise("");
        setDescription("");
    }
}


    return (
        <div className="mt-5">
            <form action="">
                <div className="mb-3">
                    <label className="form-label">Entreprise</label>
                    <input type="text" 
                    className="form-control" 
                    required 
                    onChange={e=> setEntreprise(e.target.value)}
                    value={entreprise}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea type="text" 
                    className="form-control" 
                    rows={3} 
                    required 
                    onChange={e=> setDescription(e.target.value)}
                    value={description}/>
                </div>
                <button type="button" className="btn btn-primary mt-3"
                onClick={submitStage}>
                    Add Stage</button>
            </form>
        </div>

    )
}

export default NewStageForm;