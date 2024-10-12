import { useState, useEffect } from "react";
import "./styles/App.css";
import { CardsBoard } from "./components/CardsBoard";
import { Score } from "./components/Score";

let didInit = false;
let card1 = "https://pokeapi.co/api/v2/pokemon/134/";
let card2 = "https://pokeapi.co/api/v2/pokemon/4/";
let card3 = "https://pokeapi.co/api/v2/pokemon/150/";
let card4 = "https://pokeapi.co/api/v2/pokemon/12/";
let card5 = "https://pokeapi.co/api/v2/pokemon/8/";
let card6 = "https://pokeapi.co/api/v2/pokemon/39/";
let card7 = "https://pokeapi.co/api/v2/pokemon/6/";
let card8 = "https://pokeapi.co/api/v2/pokemon/124/";
let card9 = "https://pokeapi.co/api/v2/pokemon/7/";
let card10 = "https://pokeapi.co/api/v2/pokemon/116/";
let card11 = "https://pokeapi.co/api/v2/pokemon/52/";
let card12 = "https://pokeapi.co/api/v2/pokemon/25/";

function App() {
  let initialList = [
    { id: 1, name: "", "front-image": "" },
    { id: 2, name: "", "front-image": "" },
    { id: 3, name: "", "front-image": "" },
    { id: 4, name: "", "front-image": "" },
    { id: 5, name: "", "front-image": "" },
    { id: 6, name: "", "front-image": "" },
    { id: 7, name: "", "front-image": "" },
    { id: 8, name: "", "front-image": "" },
    { id: 9, name: "", "front-image": "" },
    { id: 10, name: "", "front-image": "" },
    { id: 11, name: "", "front-image": "" },
    { id: 12, name: "", "front-image": "" },
  ];
  const initialRandom = createArrayRandom();
  const [itemsList, setItemsList] = useState(initialList);
  const [arrayRandom, setArrayRandom] = useState(initialRandom);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickHistory, setClickHistory] = useState([]);

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      // ✅ Only runs once per app load
      getData("card1", card1);
      getData("card2", card2);
      getData("card3", card3);
      getData("card4", card4);
      getData("card5", card5);
      getData("card6", card6);
      getData("card7", card7);
      getData("card8", card8);
      getData("card9", card9);
      getData("card10", card10);
      getData("card11", card11);
      getData("card12", card12);
      }
  }, []);

  async function getData(arg1, arg2) {
    // arg1 is the card arg2 is the url for that card
    try {
      const response = await fetch(arg2, { mode: "cors" });
      const cardData = await response.json();
      const myJSONCardData = JSON.stringify(cardData);
      localStorage.setItem(arg1, myJSONCardData);
      let number = Number(arg1.slice(4));

      let item = {
        "id": number,
        "name": `${cardData["forms"][0]["name"]}`,
        "front-image": `${cardData["sprites"]["front_default"]}`,
      };
      let temp = [...itemsList];
      temp.map((e)=> {
        if(Number(e.id)===Number(item.id)){
          e["name"]=item.name;
          e["front-image"]=item["front-image"];
        }
      });  
      setItemsList(temp);

    } catch (error) {
      alert("Something was wrong. try again later");
      console.log(error);
    }
  }

  function createArrayRandom() {
    let tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let newArray = [];

    for (let i = 0; i < 12; i++) {
      let number = Math.floor(Math.random() * (tempArray.length - 1 + 1) + 1);
      let char = tempArray.at(number - 1);
      newArray.push(char);
      tempArray = tempArray.filter((e) => e !== char);
    }
    return newArray;
  }

  return (
    <>
      <div>
        <header>
          <h1>Memory Card Game</h1>
          <p>
            Get points by clicking on an image but don&apos;t click on any image more
            than once!
          </p>
          <br></br>
        </header>
        <section translate="no"
          style={{
            position: "fixed",
            backgroundColor: "white",
            right: "15px",
            top: "15px",
          }}
        >
          <Score score={score} bestScore={bestScore} />
        </section>
      </div>
      <CardsBoard
        itemsList={itemsList}
        arrayRandom={arrayRandom}
        setArrayRandom={setArrayRandom}
        onRandom={() => createArrayRandom()}
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        clickHistory={clickHistory}
        setClickHistory={setClickHistory}
      />
      <section></section>
    </>
  );
}

export default App;
