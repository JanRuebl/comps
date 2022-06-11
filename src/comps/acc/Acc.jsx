import { useState } from "react";
import Acc_item from "./Acc_item";
// import "./style/style.scss";

function Acc(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedItems = props.data.quotes.map((item, index) => {
    const isActive = index === activeIndex ? true : false;
    return (
      <Acc_item
        active={isActive}
        key={item.id}
        author={item.author}
        quote={item.quote}
        onClick={() => {
          if (isActive) {
            setActiveIndex(null);
            return;
          }
          setActiveIndex(index);
        }}
      />
    );
  });

  return <div className='acc'>{renderedItems}</div>;
}

export default Acc;
