import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'
import Characters from './components/Characters'
import Search from './components/Search'

import './App.scss';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios (`http://api.tvmaze.com/shows?q=${query}`)

      setItems(Array.from(result.data))
      setIsLoading(false)
      console.log(result.data)
    }

    fetchItems();
  }, [query])

  
  return (
    <div className="App">
     <Header />
     <Search getQuery={(q) => setQuery(q)}/>
     <Characters isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
