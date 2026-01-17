export default function MoviesList({movies}) {
    return <>
        <h2>Titles</h2>
        <ul>
            {movies.map(movie => <li key={movie.title}>{movie.title}, {movie.year}</li>)}
        </ul>
    </>;
}