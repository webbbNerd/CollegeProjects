import './App.css';
import React from 'react';
import Sdata from './data';
import Cards from './card';

function App() {
  return (
    <>
    <h1 style={{textAlign:"center",backgroundColor:"white",color:"#d1d1d1",margin:0,padding:"1em 0"}}>List of top Netflix series</h1>
    <div className="cardhead" style={{display: "grid",justifyContent:"space-evenly",gridGap:"10px",gridAutoFlow: "row",gridTemplateColumns: "auto auto auto",gridTemplateRows:"auto auto"}}>
      {Sdata.map((val) => {
      return (
          <Cards 
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          links={val.links}
          />
        );
      })}
  </div>
  </>
  );
}

export default App;
