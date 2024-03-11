export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://upload.wikimedia.org/wikipedia/commons/c/c3/Phelsuma_l._laticauda.jpg";
   let book2 = "https://upload.wikimedia.org/wikipedia/commons/a/a1/Thorny_Devil_crop.jpg";
   let book3 = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Juvenile_bearded_dragon.jpg/800px-Juvenile_bearded_dragon.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1}  height= "400px" alt="Geckos for Dummies" />
         <img src={book2}  height= "400px" alt="Thorny Devils for Dummies" />
         <img src={book3}  height= "400px" alt="Bearded Dragons for Dummies" />
      </div>      
   );
}