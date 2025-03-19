"use client";

const Popup = ({ message, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-lg">{message}</p>
        <button
          className="border rounded-xl font-semibold px-8 py-2 hover:text-[#cf871b] hover:bg-white transition duration-300 mt-4"
          onClick={onClose}
        >
          Thank you!
        </button>
      </div>
    </div>
  );
};

export default Popup;
