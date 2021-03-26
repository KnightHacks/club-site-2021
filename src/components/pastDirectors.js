import React from "react";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import directors from "../../src/pages/directors.js";
function pastDirectors() {
  return (
    <Router>
      <div>
        <Link target={"_blank"} to="/directors">
          <h1 className="font-light flex justify-center text-gray-50 text-2xl my-5 ml-6  ">
            View Past Directors
          </h1>
        </Link>
        <Switch>
          <Route path="/directors" component={directors} exact={true} />
        </Switch>
      </div>
    </Router>
  );
}

export default pastDirectors;
