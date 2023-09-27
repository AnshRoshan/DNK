import React, { useState } from 'react';

function ButtonGroup() {
  const [activeButton, setActiveButton] = useState('admin');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="btn-group">
      <button
        onClick={() => handleButtonClick('admin')}
        className={`${
          activeButton === 'admin'
            ? 'bg-blue-500 text-white'
            : 'bg-primary text-gray-800'
        } px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 m-2`}
      >
        Consumer
      </button>
      <button
        onClick={() => handleButtonClick('seller')}
        className={`${
          activeButton === 'seller'
            ? 'bg-blue-500 text-white'
            : 'bg-primary text-gray-800'
        } px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 m-2`}
      >
        Seller
      </button>
      <button
        onClick={() => handleButtonClick('consumer')}
        className={`${
          activeButton === 'consumer'
            ? 'bg-blue-500 text-white'
            : 'bg-primary text-gray-800'
        } px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 m-2`}
      >
        Admin
      </button>
    </div>
  );
}

export default ButtonGroup;
