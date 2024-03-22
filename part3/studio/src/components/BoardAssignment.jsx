import { useState } from 'react';

export default function BoardAssignment () {

   const boards = [
      {label : "Nice",
      value: 1},
      {label: "To Try",
      value: 2},
      {label: "Not good",
      value: 3}
   ];
   
   const [boardName, setBoard] = useState("no boards yet!");

   const handleChange = (event) => {
      setBoard(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {/*map here*/}
         {boards.map((item) =>
         <option value={item.value}>{item.label}</option>
         )};
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
