import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full p-4 absolute bottom-0">
      <span className="text-lg text-white">
        Created by
        <a
          href="https://github.com/deveshru2712"
          target="_blank"
          className="hover:underline ml-2"
        >
          Devesh Chandra
        </a>
      </span>
    </div>
  );
};

export default Footer;
