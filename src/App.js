import AddBooks from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  return (
    <div id="main">
      <h1>Ninja's Reading List</h1>
      <BookList />
      <AddBooks />
    </div>
  );
}

export default App;
