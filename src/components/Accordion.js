import React, { Fragment, useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onClickTitle = (index) => {
    console.log('Comicbook title clicked', index)
    return setActiveIndex(index);
  };
  
  const mappedItems = items.map((item, index) => {
    return (<Fragment key={item.title} >
      <div className="item active" onClick={()=> onClickTitle(index)}>
        <i className="dropdown icon"></i>
        {item.title} 
      </div>
      <div className="item active"> 
        <p>{item.author}</p>
      </div>
    </Fragment>
    )
    });
  return <div className="ui styled accordion">
    {mappedItems}
    <h1>{activeIndex}</h1>
    </div> 
};

export default Accordion;