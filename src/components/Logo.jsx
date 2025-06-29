import React from 'react';

const Logo = ({ width = 'w-28' }) => {
  return (
    <div className="flex items-center space-x-2">
      <img src="MegaBlog.svg" alt="ReflectU Logo" className={`${width} h-auto`} />
    </div>
  );
};

export default Logo;
