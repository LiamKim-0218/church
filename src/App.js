import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from 'C:/Users/namkyun/Desktop/first_pj/my-app/src/pages/Welcome';
import Home from 'C:/Users/namkyun/Desktop/first_pj/my-app/src/pages/Home';
import Time from 'C:/Users/namkyun/Desktop/first_pj/my-app/src/pages/Time';
import Road from 'C:/Users/namkyun/Desktop/first_pj/my-app/src/pages/Road';
import Life from 'C:/Users/namkyun/Desktop/first_pj/my-app/src/pages/Life';


const App = () => {
  return (
    
     <Routes>
      {/* <Route path="/" component={<Home />} /> */}
      
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/time" element={<Time />} />
      <Route path="/Road" element={<Road />} />
      <Route path="/Life" element={<Life />} />
      
    </Routes>
  
   
  );
};


export default App;
