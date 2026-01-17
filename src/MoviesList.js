export default function MoviesList(props) {
    return <>
        <h2>Titles</h2>
        <ul>
            {props.movies.map(movie => <li key={movie.title}>{movie.title}, {movie.year}</li>)}
        </ul>
    </>;
}