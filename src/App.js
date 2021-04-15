import './App.css';
import Adresse from './Component/Profile/Adresse'
import Name from './Component/Profile/Fullname'
import Photo from './Component/Profile/ProfilePhoto'



function App() {
  return (
    <>
    <div>
     <Name/> <br/>
      <Adresse/><br/>
      <Photo/>
    </div>
    </>
  );
}

export default App;
