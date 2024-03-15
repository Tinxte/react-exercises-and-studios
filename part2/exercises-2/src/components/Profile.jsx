import './styles.css';
import Button from './Button';
import oceans from './oceans.json'

let listItems = oceans.map(ocean =>
<div key={ocean.id}>
   <img src={ocean.image} alt={ocean.name} className="img"/>
</div>
);

function Profile()
{
   return(
      <>
        <ul>
         {listItems}
        </ul>
         <Button />
      </>  
   );
}

export default Profile;