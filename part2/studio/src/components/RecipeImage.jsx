import recipedata from "./recipe.json";

function RecipeImage() {
  const recipeImage = recipedata.map((data, index) =>
    <div key ={index}><img src={data.recipeImage}/> </div>); 
  return RecipeImage;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage


//  function RecipeName() {
//   const recipeName = recipedata.map((data,index) => 
//     <div key={index}><h1>{data.name}</h1></div>);
// return recipeName;
// }
 