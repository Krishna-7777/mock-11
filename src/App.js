import './App.css';
import ViewNotice from './components/ViewNotice';
import PostNotice from './components/postNotice';

function App() {
  return (
    <div className="App">
      <h1>Trello Board</h1>  
      <hr />
      <PostNotice />
      <hr />
      <ViewNotice />
    </div>
  );
}

export default App;
