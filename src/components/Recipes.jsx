import React from 'react';

const Recipes=(props)=>{
    
    const {recipes}=props;
    return(
        <div className='row'>
            {
                 recipes.map(recipe=>(
                    <div className="col-md-3">
                          <div className='card'> 
                          <div className="card-body">
                        
                          <img src={recipe.recipe.image} className="card-img-top" alt="image" />
                          <h4>{recipe.recipe.label}</h4>
                              </div>
                          </div>
                           <ul  class="list-group">
                              {
                                  recipe.recipe.ingredientLines.map(ingredient=>(
                                  <li class="list-group-item ">{ingredient}</li>
                                    ))
                              }

                         </ul> 
                      </div>
                  ))
                
            }
        </div>
    
    
        )


}

export default Recipes;