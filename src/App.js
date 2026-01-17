import './App.css';
import {useState} from "react";
import 'milligram';
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";

function App() {

    const [movies, setMovies] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedMovies, setSelectedMovies] = useState([]);

    function deleteMovie(movieTitle) {
        setMovies(movies.filter(movie => movie.title !== movieTitle));
    }

    function toggleMovieSelection(movieTitle) {
        if (selectedMovies.includes(movieTitle)) {
            setSelectedMovies(selectedMovies.filter(title => title !== movieTitle));
        } else {
            setSelectedMovies([...selectedMovies, movieTitle]);
        }
    }

    function deleteSelectedMovies() {
        setMovies(movies.filter(movie => !selectedMovies.includes(movie.title)));
        setSelectedMovies([]);
    }

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            {movies.length > 0 ? (
                <MoviesList 
                    movies={movies} 
                    onMovieDelete={deleteMovie}
                    selectedMovies={selectedMovies}
                    onToggleSelection={toggleMovieSelection}
                    onDeleteSelected={deleteSelectedMovies}
                />
            ) : (
                <p>The list is empty. Add your first movie!</p>
            )}

            {showForm && <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])}/>}
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Hide form' : 'List update'}
            </button>
        </div>
    );
}

export default App;
