import React, { useState, useEffect } from "react";
import Profile from "../components/profile";
import InputField from "../components/InputField"; // Importamos el nuevo componente reutilizable

const Welcome = () => {
  const [name, setName] = useState(""); // Estado para el nombre
  const [description, setDescription] = useState(""); // Estado para la descripción
  const [image, setImage] = useState(""); // Estado para la imagen
  const [inputValue, setInputValue] = useState(""); // Estado para el nuevo input
  const [isStudent, setIsStudent] = useState(false); // Estado para mostrar el texto "Welcome 😃"
  const [savedData, setSavedData] = useState(null); // Estado para guardar los datos enviados

  // Hook useEffect
  useEffect(() => {
    console.log("Me ejecuto después del primer render de la aplicación");
  }, []); // Se ejecuta solo una vez después del primer render

  // Manejadores de eventos
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    console.log("Input enfocado");
  };

  const handleInputBlur = () => {
    console.log("Input desenfocado");
  };

  const handleButtonClick = () => {
    console.log("Botón clickeado");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Guardar los datos en el estado `savedData`
    setSavedData({
      name,
      description,
      image,
    });

    // Mostrar un mensaje de confirmación
    alert("Datos guardados correctamente");

    // Opcional: Limpiar los campos del formulario
    setName("");
    setDescription("");
    setImage("");
  };

  return (
    <div className="flex justify-center mt-6">
      {/* Tarjeta que muestra la información dinámica */}
      <div className="w-1/3">
        <Profile
          image={image} // Pasamos la imagen como prop
          name={name} // Pasamos el nombre como prop
          description={description} // Pasamos la descripción como prop
        />
      </div>

      {/* Formulario para ingresar datos */}
      <div className="w-1/3">
        <form
          className="px-8 py-4 border border-purple-500 rounded-md"
          onSubmit={handleFormSubmit} // Evento onSubmit
        >
          {/* Campos del formulario usando InputField */}
          <InputField
            label="Nombre"
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={handleNameChange}
          />
          <InputField
            label="Descripción"
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={handleDescriptionChange}
          />
          <InputField
            label="Foto de perfil"
            type="file"
            placeholder="Sube una imagen"
            onChange={handleImageChange}
            accept="image/*"
          />

          <span className="block text-sm font-medium text-slate-700 mt-6">
            Nuevo Input con Eventos
          </span>
          <input
            type="text"
            className="px-4 py-2 border rounded-md w-full"
            placeholder="Escribe algo"
            value={inputValue} // Valor del input
            onChange={handleInputChange} // Evento onChange
            onFocus={handleInputFocus} // Evento onFocus
            onBlur={handleInputBlur} // Evento onBlur
          />
          <div className="mt-8">
            <button
              type="button"
              className="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white hover:bg-purple-600"
              onClick={handleButtonClick}
            >
              Nuevo Boton
            </button>
          </div>

          {/* Botón Save */}
          <div className="mt-8">
            <button
              type="submit"
              className="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white hover:bg-purple-600"
            >
              Confirmar
            </button>
          </div>
        </form>

        {/* Mostrar los datos guardados */}
        {savedData && (
          <div className="mt-8 p-4 border rounded-md bg-gray-100">
            <h3 className="text-lg font-bold mb-2">Datos guardados:</h3>
            <p>
              <strong>Nombre:</strong> {savedData.name}
            </p>
            <p>
              <strong>Descripción:</strong> {savedData.description}
            </p>
            {savedData.image && (
              <img
                src={savedData.image}
                alt="Imagen guardada"
                className="mt-4 w-full h-48 object-cover rounded-md"
              />
            )}
          </div>
        )}

        {/* Botones para mostrar/ocultar texto */}
        <div className="mt-8">
          <button
            type="button"
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            onClick={() => setIsStudent(true)} // Cambia el estado a true
          >
            Mostrar texto
          </button>
          <button
            type="button"
            className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2"
            onClick={() => setIsStudent(false)} // Cambia el estado a false
          >
            Ocultar texto
          </button>
          {isStudent && (
            <p className="text-sm text-purple-500 mt-2">Bienvenido😃</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
