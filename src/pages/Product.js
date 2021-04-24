import './Product.css';
import { Navbar } from '../components/Navbar/Navbar';

function App() {

  const USER = {
    name: 'Francisco Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
  }

  const CART = 2

  const NAVIGATION = [
    'Electronics',
    'Fashion',
    'Tools',
    'Book'
  ];

  return (
    <div className="App">
      <Navbar user={USER} cartQuantity={CART} navigation={NAVIGATION} />
    </div>
  );
}

export default App;
