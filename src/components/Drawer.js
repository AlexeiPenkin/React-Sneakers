function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
        <div className="drawer">
            <h2>
            Корзина
            <img onClick={onClose} className="removeBtn" src="/img/btn-remove.svg" alt="Close" />
            </h2>

            <div className="cartItems">

                {items.map((obj) => (
                    <div className="cartItem">
                        <div 
                            style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg">
                        </div>
                        <div className="info">
                            <p>{obj.title}</p>
                            <b>{obj.price} руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                ))}

                {/* <div className="cartItem">
                    <div style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }} className="cartItemImg"
                    ></div>
                    <div className="info">
                    <p>Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                </div> */}

                {/* <div className="cartItem">
                    <div style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }} className="cartItemImg">
                    </div>
                    <div className="info">
                    <p>Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                </div> */}
            </div>
            
            <div className="cartTotalBlock">
            <ul>
                <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
                </li>
                <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1 074 руб.</b>
                </li>
            </ul>
            <button className="greenButton">
                Оформить заказ
                <img src="/img/arrow.svg" alt="Arrow" />
            </button>
            </div>
        </div>
    </div>
  );
}

export default Drawer;
