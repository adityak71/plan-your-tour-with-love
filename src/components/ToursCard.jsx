import { useState } from "react";
import TourModal from "./TourModal";

const ToursCard = ({ id, name, info, image, price, removeTour }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        className="w-80 min-h-155 m-4 p-4 rounded-xl shadow-xl flex flex-col hover:scale-105 duration-300 bg-white cursor-pointer" 
        onClick={() => setShowModal(true)}
      >
        <img
          src={image}
          alt={name}
          className="w-72 h-72 object-cover rounded-lg self-center"
        />

        <div className="mt-5 flex flex-col grow">

          <h4 className="text-green-500 text-xl font-bold">
            {price}
          </h4>

          <h2 className="text-2xl font-semibold mt-1">
            {name}
          </h2>

          <p className="text-gray-600 mt-3">
            {info.substring(0, 100)}...
          </p>

          <div className="mt-auto pt-6 flex justify-center">
            <button
              className="bg-red-200 hover:bg-red-500 hover:text-white duration-300 rounded-lg px-10 py-2 font-medium border"
              onClick={(e) => {
                    e.stopPropagation(); // Prevent the click from propagating to the card
                    removeTour(id)
                    }
                }
            >
              Not Interested
            </button>

          </div>

        </div>

      </div>

      {showModal && (
        <TourModal
          name={name}
          image={image}
          price={price}
          info={info}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ToursCard;