const TourModal = ({ name, image, price, info, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/5 backdrop-blur-sm p-4  ease-in-out duration-1000">

      <div className="relative w-full max-w-225 max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-2xl scroll-smooth overscroll-contain">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-4xl font-bold text-white hover:text-red-400"
        >
          &times;
        </button>

        {/* Image */}
        <img
          src={image}
          alt={name}
          className="h-100 w-full object-cover"
        />

        {/* Content */}
        <div className="p-6">

          <h2 className="text-3xl font-bold">
            {name}
          </h2>

          <h3 className="mt-2 text-2xl font-bold text-green-600">
            {price}
          </h3>

          <p className="mt-5 text-lg leading-8 text-gray-700">
            {info}
          </p>

        </div>
      </div>
    </div>
  );
};

export default TourModal;