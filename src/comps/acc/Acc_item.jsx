import React from "react";

const Acc_item = ({ author, quote, active, onClick }) => {
  return (
    <div className='acc_item'>
      <div className='acc_item_main'>
        <p>{author}</p>
        <p onClick={onClick}>{active ? "-" : "+"}</p>
      </div>
      <div className={active ? "acc_item_sub--active" : "acc_item_sub--closed"}>
        <h2>Quote:</h2>
        <p>{quote}</p>
      </div>
    </div>
  );
};
export default Acc_item;
