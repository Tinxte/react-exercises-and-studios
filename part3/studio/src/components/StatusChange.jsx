import { useState } from 'react';

export default function StatusChange () {

   const [notes, newNotes] = useState("");
   const [recipeStatus, newStatus] = useState("false");

   const handleChange = (event) => {
      newNotes(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      newStatus(true)

   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>My Recipe Notes aren't here!</p>

         <p>I have not tried this recipe!</p>
      </div>
   );
}
