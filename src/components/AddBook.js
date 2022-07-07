import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { getAuthorsQuery } from '../queries/queries';

function AddBooks() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [bookName, setBookName] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');

  const onSubmitForm = (e) => {
    e.preventDefault();
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <form id="add-book" onSubmit={onSubmitForm}>

      <div className="field">
        <label>Book Name</label>
        <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} />
      </div>

      <div className="field">
        <label>Genre</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
      </div>

      <div className="field">
        <label>Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)} >
          <option>Select author</option>
          {data.authors.map((author) => <option key={author.id} value={author.id}>{author.name}</option>)}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}

export default AddBooks;