import React, { useState } from 'react';

const MenuItem = ({ icon, name, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-center w-full h-16 cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-2xl">{icon}</span>
      {isHovered && <span className="hidden md:block ml-2 text-[18px]">{name}</span>}
    </div>
  );
};

export default MenuItem;
