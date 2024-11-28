
import './App.css';
import './component/profile'
import Profile from './component/profile';

function App() {
  return (
    <div className="App">
      <h1>user card</h1>
      <div className='card'>
        <Profile img={"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"} name="Raj" email="raj123@gmail.com" age={25} phone={265416825} addres="surat" />
        <Profile img={"https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"} name="Manvi" email="manvi123@gmail.com" age={29} phone={452424523} addres="surat" />
      </div>

    </div>
  );
}

export default App;

