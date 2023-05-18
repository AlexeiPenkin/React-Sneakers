function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
        <div className="drawer">
            <h2>
            Корзина
            <img onClick={onClose} className="removeBtn" src="/img/btn-remove.svg" alt="Close" />
            </h2>

            {/* Мы говорим, что, если есть хотя бы что-то (т.е. количество элементов в 'items' больше нуля ('items.length > 0')), то рендери 'cartItems', а если нет ничего (:), т.е. корзина пустая, то рендери 'cartEmpty' */}
            {items.length > 0 ? 
            // В JSX чтобы рендерить два и более элемента, компонента и т.д., их нужно обернуть в один родительский элемент, для примера назовём 'Parent'.
                <div className="Parent">
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
                                <img
                                    onClick={() => onRemove(obj.id)}
                                    className="removeBtn"
                                    src="/img/btn-remove.svg"
                                    alt="Remove" 
                                />
                            </div>
                        ))}
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
                : 
                <div className="cartEmpty">
                    <img width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty-cart" />
                    <h2>Корзина пустая</h2>
                    <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    {/* Используем метод 'onClose' для закрытия корзины при нажатии на кнопку 'Вернуться назад'. Метод 'onClose' также применяется для закрытия корзины при нажатии на кнопку закрытия 'removeBtn'. */}
                    <button onClick={onClose} className="greenButton">
                        <img src="/img/arrow.svg" alt="Arrow" />
                        Вернуться назад
                    </button>
                </div>
            }




            

        </div>
    </div>
  );
}

export default Drawer;
