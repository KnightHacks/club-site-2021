import React from 'react';
import {Route, BrowserRouter as Router,Link,Switch} from "react-router-dom";
//import from './directorsPage.js';
import Director from '../../src/pages/Director';
function pastDirectors() {
    return (
        <Router>
        <div>

            <Link to="/Director">
            <h1 className="font-light flex justify-center text-gray-50 text-2xl my-5 ml-6  "> 
                View Past Directors 
            </h1>
             </Link>
             <Switch>
             <Route path="/Director" component={Director}/>
             </Switch>

             
            
        </div>
      
         
      
        
        </Router>
        
    )
}

export default pastDirectors
