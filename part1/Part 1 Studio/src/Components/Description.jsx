import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.budgetbytes.com/hawaiian-ham-quesadillas/";
    let authorPhoto = "https://www.budgetbytes.com/wp-content/uploads/2022/07/Beth-2022-3-268x268.jpg";
    let authorName = "Chef Beth";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Hawaiian Ham Quesadilla" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Budget Bytes</a> 
           </div>
        </div>
     );
};

class RecipeDescription extends React.Component {
    render() {
    return (
<div> 
   <div>
      <h1>Hawaiian Ham Quesadilla</h1>
      <p>Delicious!</p>
   </div>
   <RecipeAuthor />
</div>
    );
};
};

export default RecipeDescription;