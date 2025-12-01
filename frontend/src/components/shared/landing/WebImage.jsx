import React from 'react'
import ExpensesAppImg from "@/assets/img/ExpensesAppImg.jpg";

const WebImage = () => {
  return (
    <div className='w-full mx-auto mt-20 md:w-10/12'>
      <img 
      className='rounded-b-full pb-15'
      src={ExpensesAppImg} 
      />
    </div>
  );
};

export default WebImage;