export default function MoviesList(props) {
    return <>
        <h2>Titles</h2>

        <ul>
            {props.movies.map(movie => (
                <li key={movie.title}>
                    <input 
                        type="checkbox" 
                        checked={props.selectedMovies.includes(movie.title)}
                        onChange={() => props.onToggleSelection(movie.title)}
                        style={{marginRight: '10px'}}
                    />
                    {movie.title}, {movie.year}
                </li>
            ))}
        </ul>
        {props.selectedMovies.length > 0 && (
            <button onClick={props.onDeleteSelected} style={{marginBottom: '10px'}}>
                Delete selected<br></br> ({props.selectedMovies.length})
            </button>
        )}
    </>;
}