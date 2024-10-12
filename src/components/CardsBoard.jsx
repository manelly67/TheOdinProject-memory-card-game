import { AddPoints } from "./AddPoints";

function CardsBoard(props) {
  const arrayToPrint = props.arrayRandom.map(
    (element) => props.itemsList.filter((x) => Number(x.id) === element)[0]
  );

  function newRandomList() {
    let array = props.onRandom;
    props.setArrayRandom(array);
  }

  return (
    <>
      <div translate="no" className="board">
        <ul>
          {arrayToPrint.includes(undefined) ? (
            <>{null}</>
          ) : (
            arrayToPrint.map((e) => {
              return (
                <button
                  key={e.id}
                  id={e.id}
                  className="card"
                  onClick={() => {
                    AddPoints(
                      e.id,
                      props.score,
                      props.setScore,
                      props.clickHistory,
                      props.setClickHistory,
                      props.bestScore,
                      props.setBestScore
                    );
                    newRandomList();
                  }}
                >
                  <div>
                    <img
                      src={e["front-image"]}
                      width="110px"
                      height="auto"
                      style={{
                        backgroundColor: "lightblue",
                        alignItems: "center",
                      }}
                    ></img>
                    <p>{e.name}</p>
                  </div>
                </button>
              );
            })
          )}
        </ul>
      </div>
    </>
  );
}

export { CardsBoard };
