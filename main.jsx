 import { createRoot } from "react-dom/client";
 import Recipe from "./Components/Recipe";

 const root=createRoot(document.getElementById("root"))
 function App()
 {
  return(

    <div>
      <header className="smitha">SMITHANJALI HOTEL MENU CARD</header>
      <div className="mainparent">
    <Recipe 
    item="Capichino Recipe" 
    time="Prep Time: 5min | Cook Time: 10min"
    people="Serves: 2 people"
    difficulty="Difficulty: Easy"
    footer="capichino is good for health"
    img="./src/assets/coffe.webp"
    cost="Cost:200$"
    prize="Total Prize:205$"
    
    />
    <Recipe 
    item="Maggie Recipe" 
    time="Prep Time: 5min | Cook Time: 10min"
    people="Serves: 1 people"
    difficulty="Difficulty: Hard"
    footer="Maggie is tasty"
    img="./src/assets/maggie.webp"
    cost="Cost:50$"
    prize="Total Prize:55$"
    />
    <Recipe 
    item="Fried Chicken  Recipe" 
    time="Prep Time: 15min | Cook Time: 40min"
    people="Serves: 3 people"
    difficulty="Difficulty: Hard"
    footer="Fried Chicken is delicious"
    img="./src/assets/fried.jpg"
    cost="Cost:250$"
    prize="Total Prize:255$"
    />
    <Recipe 
    item="Chicken Biriyani Recipe" 
    time="Prep Time: 15min | Cook Time: 40min"
    people="Serves: 3 people"
    difficulty="Difficulty: Hard"
    footer=" Chicken  Biriyani is delicious"
    img="./src/assets/biriyani.webp"
    cost="Cost:300$"
    prize="Total Prize:305$"
    />
     <Recipe 
    item=" Dosa Recipe" 
    time="Prep Time: 15min | Cook Time: 40min"
    people="Serves: 3 people"
    difficulty="Difficulty: Hard"
    footer=" crispy Dosa is delicious"
    img="./src/assets/dosa.jpeg"
    cost="Cost:150$"
    prize="Total Prize:155$"
    />
    <Recipe 
    item=" Fish Recipe" 
    time="Prep Time: 15min | Cook Time: 40min"
    people="Serves: 3 people"
    difficulty="Difficulty: Hard"
    footer=" fish is delicious"
    img="./src/assets/fish.jpg"
    cost="Cost:100$"
    prize="Total Prize:105$"
    />
      <Recipe 
    item=" Pizza Recipe" 
    time="Prep Time: 15min | Cook Time: 40min"
    people="Serves: 3 people"
    difficulty="Difficulty: Hard"
    footer=" pizza is delicious"
    img="./src/assets/pizza.avif"
    cost="Cost:100$"
    prize="Total Prize:105$"
    />
      <Recipe 
    item=" Ice Cream Recipe" 
    time="Prep Time: 15min | Cook Time: 40min"
    people="Serves: 3 people"
    difficulty="Difficulty: Hard"
    footer=" ice cream is delicious"
    img="./src/assets/ice cream.jpeg"
    cost="Cost:100$"
    prize="Total Prize:105$"
    />
      <Recipe 
    item=" Pasta Recipe" 
    time="Prep Time: 15min | Cook Time: 40min"
    people="Serves: 3 people"
    difficulty="Difficulty: Hard"
    footer=" pasta is delicious"
    img="./src/assets/pasta.jpg"
    cost="Cost:100$"
    prize="Total Prize:105$"
    />
      <Recipe 
    item=" Cake Recipe" 
    time="Prep Time: 15min | Cook Time: 40min"
    people="Serves: 3 people"
    difficulty="Difficulty: Hard"
    footer=" cake is delicious"
    img="./src/assets/cake.jpg"
    cost="Cost:100$"
    prize="Total Prize:105$"
    />
    </div>
    </div>
  );
 }
 root.render(<App/>);
 
 