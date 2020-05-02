import React from "react";

const HeaderNav = () => {
  return (
    <header className="max-w-md flex p-2 mt-4 rounded-lg">
      <button className="inline-flex items-center">
        <span className="absolute top-0 right-0 mt-5 mr-4 text-teal-500">
          <i className="material-icons text-3xl">menu</i>
        </span>
      </button>
      <img
        className="h-10 w-10 md:h-24 md:w-24 rounded-full ml-2 md:mx-2 mr-4"
        src="https://via.placeholder.com/40/92c952"
        alt="1"
      />
      <div className="md:text-left md:text-left">
        <h2 className="text-lg font-bold">
          <span className="inline-block align-top mr-2">Erin Lindford </span>
          <span className="text-teal-500 mt-1">
            <i className="material-icons">check_circle</i>
          </span>
        </h2>
        <div className="text-gray-500">Professional Food Photographer</div>
        <div className="inline-block text-gray-500 align-middle">
          <span className="text-orange-600 mr-2">
            <i className="material-icons text-xs ">location_on</i>
          </span>
          <span className="mr-2  text-xs inline-block align-middle">
            Bangkok
          </span>
          <span className="text-orange-600 mr-2">
            <i className="material-icons text-xs ">mail</i>
          </span>
          <span className="text-xs inline-block align-middle">
            melanietan99@gmail.com
          </span>
        </div>
      </div>
    </header>
  );
};
export default HeaderNav;
