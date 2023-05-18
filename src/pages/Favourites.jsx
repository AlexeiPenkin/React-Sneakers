import Card from '../components/Card';

// Вытаскиваем всё нужное из 'props'
function Favourites({ items, onAddToFavourite }) {
    return(
        <div className="content">
            <div className="content__wrapper">
                <h1>Мои закладки </h1>
            </div>

            <div className="sneakers">
                {/* Копируем рендер карточки из компонента 'Home', удалив фильтрацию */}
                {items.map((item, index) => (
                    <Card
                        key={index}
                        favourited={true}
                        onFavourite={onAddToFavourite}

                        // id={item.id}
                        // title={item.title}
                        // price={item.price}
                        // imageUrl={item.imageUrl}

                        // для сокражения кода (если лень передавать все свойства вручную)) ) можно передавать нужные свойства  методом конкатенации:
                        // вместо последних четырех свйоств ('id', 'title', 'price', 'imageUrl') мы можем передать объект {...item} в конце компонента и все свойства, которые есть в этом 'item' будут передаваться в компонент 'Card'.
                        // первые три свойства ('key', 'favourited', 'onFavourite') передаем вручную, как обычно.
                        // здесь мы говорим, возьми из 'items' c бэкенда все объекты, передавай их в компонент 'Card', но не надо брать все свойсва вручную, которые могут быть в этом объекте, а просто передай всё автоматически в 'Card' 

                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favourites;