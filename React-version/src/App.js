import './App.css';
import Main from './Main-container/Main-container';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <Sidebar/>
      <div class='main-container'>
        <Main/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
