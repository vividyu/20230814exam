import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'


//Imagine that this is the Data you got from your Back-end team.
const Lists = [
  {
    Home: [],
    Show: false
  },
  {
    Products: ["Car", "Boat", "Bicyle"],
    Show: false
  },
  {
    About: [],
    Show: false
  },
  {
    Contact: ["Phone", "Email"],
    Show: false
  }
];



function App() {
  const [navbarLists, setNavbarlists] = useState(Lists);

  function handleClick(title) {
    //console.log(title);
    const newList = navbarLists.map((item) => {
      //console.log(Object.keys(item)[0]);
      if(Object.keys(item)[0] === title){
        item["Show"] = !item["Show"];
      }
      return item;
    })

    //console.log(newList);
    setNavbarlists(newList);

  }

  return (
    <div className='nav-bar'>
      {navbarLists.map((item, index) => (
        <ul className='list' >
          <ul key={index} onClick={() => handleClick(Object.keys(item)[0])}>
            {Object.keys(item)[0]}
            {item["Show"] && item[Object.keys(item)[0]].map((subitem, index) =>
              <li key={index}>{subitem}</li>)}
          </ul>
        </ul>
      )
      )}
    </div>
  );
}










const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;
