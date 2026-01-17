import './App.css';
import {useState} from "react";
import 'milligram';

function App() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [movies, setMovies] = useState([]);

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

    function handleYearChange(event) {
        setYear(event.target.value);
    }

    function addMovie() {
        const newMovie = {title: title, year: year};
        setMovies([...movies, newMovie]);
        setTitle('');
        setYear('');
    }

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <ul>
                {movies.map(movie => <li key={movie.title}>{movie.title}, {movie.year}</li>)}
            </ul>
            <h2>Add movie</h2>
            <label>Movie title:</label>
            {title.length > 0 && <div>{message}</div>}
            <input type="text" value={title} onChange={handleChange} placeholder="Enter movie title"/>
           
            <label>Year: </label>
            <input type="text" value={year} onChange={handleYearChange} placeholder="Enter movie year"/>

             <button onClick={addMovie}>Add movie</button>
        </div>
    );
}

export default App;
