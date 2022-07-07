import { gql, useQuery } from '@apollo/client';

const getAuthorQuery = gql`
  query getAuthors {
    authors {
      name
      id
    }
  }
`

function AddBooks() {
  const { loading, error, data } = useQuery(getAuthorQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <form id="add-book">

      <div className="field">
        <label>Book Name</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Genre</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Author</label>
        <select>
          <option>Select author</option>
          {data.authors.map((author) => <option key={author.id} value={author.id}>{author.name}</option>)}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}

export default AddBooks;