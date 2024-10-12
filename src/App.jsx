import { useState, useEffect } from "react";
import "./styles/App.css";
import { urlAddresses } from "./assets/urlAddresses";
import { CardsBoard } from "./components/CardsBoard";
import { Score } from "./components/Score";

let didInit = false;

function App() {
 
const initialList = () => {
  let temp=[];
    for (let i=0; i< urlAddresses.length;++i ){
      temp[i] =  { "id": i+1, "name": "", "front-image": "" }
    }
  return temp;
};

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
      for (let i=0; i<urlAddresses.length; ++i){
        getData(`card${i+1}`, urlAddresses[i]);
      };
    }
  }, []);

  async function getData(arg1, arg2) {
   
    // arg1 is the card arg2 is the url for that card
    try {
      const response = await fetch(arg2, { mode: "cors" });
      const cardData = await response.json();
      const myJSONCardData = JSON.stringify(cardData);
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
    let tempArray = [];
    for (let i = 0; i < urlAddresses.length; ++i) {
      tempArray[i] = i + 1;
    }

    let newArray = [];

    for (let i = 0; i < urlAddresses.length; i++) {
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
            right: "3rem",
            top: "2rem",
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
