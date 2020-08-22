import React from 'react';

const Header=(props)=>{
  const {search,onInputChange,onSearchClick}=props;  
  return(
      
       <div className='jumbotron '>
           <h1 className='display-1 head'>
           <span className="material-icons food-logo">
             fastfood
            </span> Food Recipe</h1>

            <div className="input-group mx-auto">
            <input type="text" 
            className="form-control" 
            placeholder="Search Your Recipe..."
            value={search}
            onChange={onInputChange} />
            
             <div className="input-group-append">
           <button className='btn btn-dark search_button' onClick={onSearchClick}>Search</button>
    </div>
</div>

       </div>
    )    

}

export default Header;