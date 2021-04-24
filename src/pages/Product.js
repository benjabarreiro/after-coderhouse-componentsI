import './Product.css';
import { Navbar } from '../components/Navbar/Navbar';
import { useState, useEffect } from 'react';

function App() {

  const [filter, setFilter] = useState('');

  const [navigation, setNavigatio] = useState([
    'Electronics',
    'Fashion',
    'Tools',
    'Book'
  ]);

  const [cellphones, setCellphones] = useState([
    {
      name: 'Iphone 99',
      madeBy: 'Apple',
      description: 'Muy caro'
    },
    {
      name: '1100',
      madeBy: 'Nokia',
      description: 'Durísimo!'
    },
    {
      name: 'S9',
      madeBy: 'Samsung',
      description: 'Bueno'
    },
    {
      name: 'G1',
      madeBy: 'Motorola',
      description: 'Último modelo'
    },
    {
      name: 'Note 10',
      madeBy: 'Xiomi',
      description: 'Excelente!!!'
    }
  ]);

  const [filteredCellphones, setFilteredCellphones] = useState(cellphones);

  useEffect(
    () => {
      // cambiame los celulares filtrados (filtered cellphones)
      const newFilteredCellphones = cellphones.filter(cellphone => 
        cellphone.madeBy.toLowerCase().includes(filter)
        )
        setFilteredCellphones(newFilteredCellphones)
    }, [filter]
  );

  const USER = {
    name: 'Francisco Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
  };

  const CART = 2;

  return (
    <main className="product">
      <Navbar user={USER} cartQuantity={CART} navigation={navigation} />
      <input type="text" placeholder='Search cellphone' value={filter} onChange={(e) => setFilter(e.target.value)}/>
      <div>
          {/* {cellphones.map(cellphone => (
                <div className="cellphone">
                  <h4>{`${cellphone.madeBy} ${cellphone.name}`}</h4>
                  <p>{cellphone.description}</p>
                </div>
              )
            )
          } */}
          {filteredCellphones.map(cellphone => (
                <div className="cellphone">
                  <h4>{`${cellphone.madeBy} ${cellphone.name}`}</h4>
                  <p>{cellphone.description}</p>
                </div>
              )
            )
          }
      </div>
    </main>
  );
}

export default App;
