import './App.css';
import {useState} from "react";
import 'milligram';

function App() {
    const [title, setTitle] = useState('Wall-E');
    const [movies, setMovies] = useState([
        {title: "Wall-E"},
        {title: "Pulp Fiction"},
        {title: "Matrix"},
        {title: "1670"},
    ]);

    let message;
    if (title.length < 5) {
        message = <div>Tutuł jest za krótki. Nagrywają takie filmy?</div>;
    } else if (title.length < 15) {
        message = <div>Tytuł jest ekstra, w sam raz na plakat przed kinem!</div>;
    } else {
        message = <div>Tytuł jest za długi, nikt tego nie zapamięta.</div>;
    }

    function handleChange(event) {
        setTitle(event.target.value);
    }

    function addMovie() {
        const newMovie = {title: title};
        setMovies([...movies, newMovie]);
        setTitle('');
    }

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <ul>
                {movies.map(movie => <li key={movie.title}>{movie.title}</li>)}
            </ul>
            <h2>Add a new movie</h2>
            {title.length > 0 && <div>{message}</div>}
            <input type="text" value={title} onChange={handleChange} placeholder="Enter movie title"/>
            <button onClick={addMovie}>Add movie</button>
        </div>
    );
}

export default App;
