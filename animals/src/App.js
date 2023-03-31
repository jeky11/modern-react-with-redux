import {useState} from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    let randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex];
}

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        let randomAnimal = getRandomAnimal();
        setAnimals([...animals, randomAnimal])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
    });

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>{renderedAnimals}</div>
        </div>
    );
}

export default App;