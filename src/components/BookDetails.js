import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

function BookDetails({ id }) {
  const { loading, error, data } = useQuery(getBookQuery, { variables: { id }});

  if(!id)  { return null };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { book } = data
  return (
    <div id="book-details">
      <h2>{book.name}</h2>
      <p>{book.genre}</p>
      <p>{book.author.name}</p>
      <ul>
        {book.author.books.map((book) => <li key={book.id}>{book.name}</li>)}
      </ul>
    </div>
  );
}

export default BookDetails;