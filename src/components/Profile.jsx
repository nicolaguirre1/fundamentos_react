import React from 'react';

const Profile = ({ image, name, description }) => {
  return (
    <div className="max-w-sm rounded-md shadow-lg">
      {/* Renderiza la imagen solo si existe un valor válido en image */}
      {image ? (
        <img className="w-full h-72 object-cover" src={image} alt="profile" />
      ) : (
        <div className="w-full h-72 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Sin imagen</span>
        </div>
      )}
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2">{name}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Compartir
        </button>
      </div>
    </div>
  );
};

export default Profile;
