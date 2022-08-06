import './App.css';
import BodyPage from './component/bodyPage/bodyPage';
import Header from './component/header/header';
import {useState} from 'react';
import Power from './component/power/power';
import Footer from './component/footer/footer'

function App() {

const [data, setData] = useState([]);

  const info = (datas) => {
    setData(datas)
  }
  return (
    <div className='App'>
      <Header info = {info}/>
     <BodyPage data={data}/>
     <Power data={data}/>
     <Footer/>
    </div>
  );
}

export default App;
