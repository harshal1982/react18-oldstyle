import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './component/Loading';
import Todo from './component/ToDo';


export default () => {
  return (
    <div className="bodywrapper">
    
      <Routes>
        <Route exact path="/" element={<Loading />} />
		<Route exact path="/todo" element={<Todo />} />
      </Routes>
    
    </div>
  );
};
