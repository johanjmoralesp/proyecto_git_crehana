import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <h1>MyOrderNow</h1>
            </div>
            <div className="col-auto">
              <div
                className="avatar-container"
                data-target="#profileOptions"
                data-toggle="modal"
              >
                <img src="./img/avatar.jpg" alt="" />
                <i className="fas fa-cog"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className="modal fade profile-options-modal"
        id="profileOptions"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Opciones</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <ul className="profile-options-list">
                <li>
                  <a href="#">
                    <i className="fas fa-user"></i> Mi perfil
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-map-marker-alt"></i> Mis direcciones
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-credit-card"></i> Mis tarjetas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-danger">
                    <i className="fas fa-times-circle"></i> Cerrar sesión
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <main className="main">
        <div className="container">
          <div className="search-container">
            <form>
              <input type="text" name="searchInput" id="searchInput" />
              <button type="button" className="btn btn-primary btn-block">
                Buscar
              </button>
            </form>
          </div>
          <div className="products-list-container">
            <h2 className="section-title">Los más pedidos</h2>
            <ul>
              <li>
                <a href="#">
                  <div className="product-image">
                    <img src="img/producto1.jpg" alt="" />
                  </div>
                  <div className="product-info">
                    <div className="product-info-inner">
                      <div className="tags">
                        <span>Descuento</span>
                        <span>Envío gratis</span>
                      </div>
                      <h3 className="product-name">Burrito especial</h3>
                      <p className="restaurant">Restaurante de prueba</p>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p className="product-price">
                      <span>$</span>14,99
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div className="product-image">
                    <img src="img/producto2.jpg" alt="" />
                  </div>
                  <div className="product-info">
                    <div className="product-info-inner">
                      <div className="tags">
                        <span>2x1</span>
                        <span>Descuento 50%</span>
                      </div>
                      <h3 className="product-name">Postre de la casa</h3>
                      <p className="restaurant">Restaurante de prueba</p>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p className="product-price">
                      <span>$</span>6,99
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div className="product-image">
                    <img src="img/producto3.jpg" alt="" />
                  </div>
                  <div className="product-info">
                    <div className="product-info-inner">
                      <div className="tags">
                        <span>2x1</span>
                        <span>Envío gratis</span>
                        <span>Descuento</span>
                      </div>
                      <h3 className="product-name">Salmón</h3>
                      <p className="restaurant">Restaurante de prueba</p>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p className="product-price">
                      <span>$</span>21,47
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div className="product-image">
                    <img src="img/producto4.jpg" alt="" />
                  </div>
                  <div className="product-info">
                    <div className="product-info-inner">
                      <div className="tags">
                        <span>Envío gratis</span>
                      </div>
                      <h3 className="product-name">Donas glaseadas x6</h3>
                      <p className="restaurant">Restaurante de prueba</p>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p className="product-price">
                      <span>$</span>9,99
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <div className="product-image">
                    <img src="img/producto5.jpg" alt="" />
                  </div>
                  <div className="product-info">
                    <div className="product-info-inner">
                      <div className="tags">
                        <span>Envío gratis</span>
                        <span>Combo</span>
                      </div>
                      <h3 className="product-name">Mega hamburguesa</h3>
                      <p className="restaurant">Restaurante de prueba</p>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p className="product-price">
                      <span>$</span>15,99
                    </p>
                  </div>
                </a>
              </li>
            </ul>
            <div className="pt-4 pb-5 text-center">
              <a href="#" className="btn btn-block btn-link">
                <span className="d-block mb-2">Ver más productos</span>
                <i className="fas fa-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
