import recipedata from "./recipe.json";

function RecipeName() {
    const recipeName = recipedata.map((data,index) => 
      <div key={index}><h1>{data.name}</h1></div>);
  return recipeName;
}

export default RecipeName;

//import return the name of the recipe as a level 1 header