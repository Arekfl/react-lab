import './App.css';
import {useState} from "react";



function App() {
    const [title, setTitle] = useState('Wall-E');

    function handleChange(event) {
        setTitle(event.target.value);
    }

    let message;
    
    if (title.length === 0) {
        message = 'Podaj tytuł filmu!';
    }
    else if (title.length < 5) {
        message = 'Tytuł jest za krótki, to nie może być dobry film.';
    } else if (title.length < 15) {
        message = 'Tytuł wygląda dobrze, to może być ciekawy film.';
    } else {
        message = 'Tytuł jest za długi, nikt tego nie zapamięta!';
    }

    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>My favourite movie for today is {title.toUpperCase()}</h2>
            <input type="text" value={title.toUpperCase()} onChange={handleChange}/>
            <p>{message}</p>           
        </div>
    );
}
export default App;