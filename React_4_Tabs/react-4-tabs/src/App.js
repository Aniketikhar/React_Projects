import { React , useRef, useState} from 'react';
import "./App.css";
import Navigation from './components/Navigation.js';
import Content from './components/Content.js';
import Content2 from './components/Content2.js';
import Content3 from './components/Content3.js';

function App() {

  const [check , setCheck] =  useState(1);

  function handleclick(num){

    setCheck(num);

  }
  


  return (
    <>
      <div className="container mt-5 ">
        <div className="row pt-5">
          <div className="col-lg-3 col-12 text-center">
           {/* navigation */}
           <Navigation onclickHandler={handleclick} />
          </div>
          <div className="col-lg-9 col-12">
            {(check == 1) ? <Content /> : (check == 2) ? <Content2 /> :<Content3 /> }
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
