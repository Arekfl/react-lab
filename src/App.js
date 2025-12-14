import './App.css';
import {useState} from "react";



function App() {
    
    const movies = [
    {title: "Wall-E"},
    {title: "Pulp Fiction"},
    {title: "Matrix"},
    {title: "1670"},
];
    
    const [title, setTitle] = useState('Wall-E');

    function handleChange(event) {
        setTitle(event.target.value);
    }

    let message;
    
    if (title.length < 5) {
        message = 'Tytuł jest za krótki, to nie może być dobry film.';
    } else if (title.length < 15) {
        message = 'Tytuł wygląda dobrze, to może być ciekawy film.';
    } else {
        message = 'Tytuł jest za długi, nikt tego nie zapamięta!';
    }

    function handleClick() {
        alert(title);
    }


    return (
        <div>

            <div>
                <h1>My favourite movies to watch</h1>
                <p>
                <h2>Titles</h2> 

                <ul>
                {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
                </ul>

                </p>
                <h2>My favourite movie for today is {title.toUpperCase()}</h2>
                <input type="text" value={title.toUpperCase()} onChange={handleChange}/>
                
                <button type="button" onClick={handleClick}>
                    Pokaż tytuł filmu
                </button>

                <p>
                    {title.length > 0 && <div>{message}</div>}
                </p>   

        
            </div>
        </div>
    );
}
export default App;