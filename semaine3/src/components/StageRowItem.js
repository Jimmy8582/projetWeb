function StageRowItem(props){

    return (
       <>
       <tr>
               <th scope='row'>{props.rowNumber}</th>
               <td> {props.rowDescription}</td>
               <td> {props.rowEntreprise}</td>
             </tr>
            
       </>
   );
}

export default StageRowItem