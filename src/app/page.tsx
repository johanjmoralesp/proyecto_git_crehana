import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans bg-gray-50">
      <header className="w-full">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800">MyOrderNow</h1>
          <div
            className="relative cursor-pointer flex items-center space-x-2"
            data-target="#profileOptions"
            data-toggle="modal"
          >
            <img
              src="./img/avatar.jpg" // Aquí referenciamos la imagen del avatar
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <i className="fas fa-cog text-gray-600 text-xl"></i>
          </div>
        </div>
      </header>

      {/* Modal */}
      <div
        className="fixed inset-0 z-50 hidden bg-black bg-opacity-50"
        id="profileOptions"
      >
        <div className="bg-white rounded-lg max-w-md mx-auto mt-24 shadow-lg">
          <div className="border-b px-4 py-3 flex justify-between items-center">
            <h5 className="text-lg font-medium">Opciones</h5>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              data-dismiss="modal"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center space-x-2">
                  <i className="fas fa-user text-gray-500"></i>
                  <span>Mi perfil</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt text-gray-500"></i>
                  <span>Mis direcciones</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2">
                  <i className="fas fa-credit-card text-gray-500"></i>
                  <span>Mis tarjetas</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-red-500 flex items-center space-x-2">
                  <i className="fas fa-times-circle"></i>
                  <span>Cerrar sesión</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <main className="w-full max-w-6xl mx-auto">
        {/* Search Container */}
        <div className="mb-8">
          <form className="flex space-x-2">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Buscar..."
              id="searchInput"
            />
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Buscar
            </button>
          </form>
        </div>

        {/* Products List */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Los más pedidos
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Burrito especial",
                price: "14.99",
                imgSrc: "./img/producto1.jpg", // Imagen 1 referenciada desde la carpeta `img`
                tags: ["Descuento", "Envío gratis"],
                stars: 3,
              },
              {
                name: "Postre de la casa",
                price: "6.99",
                imgSrc: "./img/producto2.jpg", // Imagen 2 referenciada
                tags: ["2x1", "Descuento 50%"],
                stars: 5,
              },
              {
                name: "Salmón",
                price: "21.47",
                imgSrc: "./img/producto3.jpg", // Imagen 3 referenciada
                tags: ["2x1", "Envío gratis", "Descuento"],
                stars: 4,
              },
              {
                name: "Donas glaseadas x6",
                price: "9.99",
                imgSrc: "./img/producto4.jpg", // Imagen 4 referenciada
                tags: ["Envío gratis"],
                stars: 3,
              },
              {
                name: "Mega hamburguesa",
                price: "15.99",
                imgSrc: "./img/producto5.jpg", // Imagen 5 referenciada
                tags: ["Envío gratis", "Combo"],
                stars: 5,
              },
            ].map((product, index) => (
              <li key={index} className="bg-white rounded-lg shadow-md p-4">
                <a href="#" className="block">
                  <div className="mb-4">
                    <img
                      src={product.imgSrc}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center space-x-2 mb-2">
                      {product.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-medium text-gray-800">{product.name}</h3>
                    <p className="text-gray-500 text-sm">
                      Restaurante de prueba
                    </p>
                    <div className="flex justify-center space-x-1 mt-2">
                      {Array.from({ length: product.stars }, (_, i) => (
                        <i key={i} className="fas fa-star text-yellow-500"></i>
                      ))}
                    </div>
                    <p className="text-lg font-semibold mt-2">
                      <span>$</span>
                      {product.price}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-8 text-center">
          <a href="#" className="text-blue-600 hover:underline">
            Ver más productos
          </a>
        </div>
      </main>
    </div>
  );
}
