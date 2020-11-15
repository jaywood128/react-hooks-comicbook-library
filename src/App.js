import React from 'react';
import Accordion from './components/Accordion';
export default () => {
  const items = [
    { title :"The Dark Knight Returns", 
    author : "Frank Miller"
    },
    { title: "The Court of Owls",
    author: "Scott Snyder"},
    { title: "The Long Halloween",
      author: "Jeff Loeb"}
  ]
  return(
  <div>
<Accordion items={items}/>
  </div>
  )
};