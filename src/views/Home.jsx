import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../css/App.css';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My first application on React.
        </p>
        <Link to="/notes">Go to your notes</Link>
      </header>
    </div>
  );
}

export default Home;