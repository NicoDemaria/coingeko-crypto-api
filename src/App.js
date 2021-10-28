import './App.css';
import TableCoins from './components/TableCoin';
import axios from 'axios';
import {useEffect,useState} from 'react';


//TODO AGREGAR FUNCIONALIDAD RESPONSIVE


function App() {




  


  const [coins,setCoins] = useState([]);
  const [search, setsearch] = useState('');



  const GetData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')

   console.log(res.data)
  setCoins(res.data)

  }

  useEffect(() => {
    GetData()
  },[])


  return (
    
    <div className="container">
    <div className="row">
    <input type='text' placeholder='Search a coin' className='form-control bg-dark text-light border-0 mt-4 text-center'
    onChange={e => setsearch(e.target.value)} /> 

      <TableCoins coins={coins} search={search}/>
    </div>
    </div>
  );
}

export default App;
