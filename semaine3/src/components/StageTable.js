import StageRowItem from './StageRowItem';

function StageTable(props) {

    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Entreprise</th>
                </tr>
            </thead>
            <tbody>

                {props.stages.map(stage => (
                    
                    <StageRowItem
                        rowNumber={stage.rowNumber}
                        rowDescription={stage.rowDescription}
                        rowEntreprise={stage.rowEntreprise}
                        deleteStage={props.deleteStage}
                    />
               ))
                }

            </tbody>
        </table>
    )
}

export default StageTable;