import recipedata from "./recipe.json";

function IngredientList(props) {
   return(
    <div>
      <h3>Ingredients</h3>
      <ul>
        {/* {props.map(props) => { */}

        {/* <li key ={props.index}>{props.IngredientList}</li>
          }
        } */}
      </ul>
    </div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 