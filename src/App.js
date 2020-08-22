import React,{useState, useEffect} from 'react';
import Header from './components/Header';
import Recipes from './components/Recipes'
import './App.css';
import Axios from 'axios'

function App() {

  const [search,setSearch]=useState("");
  const [recipes,setRecipe]=useState([]);
  const APP_ID='4757ed83';
  const APP_KEY="54c1b53669862f4a4e51d05598ff8f0c"

  useEffect(()=>{
    getRecipes();
  }
    ,[])

  const getRecipes= async()=>{
    const result =await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      
      setRecipe(result.data.hits);
      
    }

  const onInputChange=(e)=>{
   setSearch(e.target.value);
  }
  const onSearchClick=()=>{
    getRecipes();
  }
  return (
    <div className="App">
    
    <Header search={search} 
    onInputChange={onInputChange}
    onSearchClick={onSearchClick}/>
    
    
    <div className='container'>
    <Recipes recipes={recipes} />
    </div>

     <footer>Copyright &copy;2020 | Created By Piyush</footer>
    </div>

);
}

export default App;
