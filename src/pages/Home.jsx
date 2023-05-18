import Card from '../components/Card';

// Вытаскиваем всё нужное из 'props'
function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavourite, onAddToCart }) {
    return(
        <div className="content">
            <div className="content__wrapper">
                <h1>
                    {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
                </h1>
                <div className="search-block">
                    <img width="14" height="14" src="/img/search.svg" alt="Search" />
                    {searchValue && 
                        <img
                            onClick={() => setSearchValue('')} // можно 'setSearchValue' вынести в отдельную функцию, как 'onChangeSearchInput' по желанию //
                            className="clearBtn"
                            src="/img/btn-remove.svg"
                            alt="Clear" 
                        />
                    }
                    <input
                        onChange={onChangeSearchInput}
                        value={searchValue} // это делает 'input' контролируемым, т.е. при нажати на 'clearBtn' данные из инпута не удаляться, их придется удалять вручную //
                        placeholder="Поиск ..." 
                    />
                </div>
            </div>

            <div className="sneakers">
                {items
                .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())) // Здесь мы говорим: 'items', перед тем, как рендерить карточки ('map'), отфильтруй ('filter') то, что есть у тебя и найди мне 'title' в 'item' и из 'title' найди любое содержимое, которе есть ('includes') в 'searchValue'. Т.е. это код будет проходится по массиву перед рендерингом, будет исключать все 'item', укоторых в titl'e' нет того, что написано в 'searchValue') //
                // 'toLowerCase' - приводит все данные (все объекты, у которых есть 'title') в один вид - в нижний регистр, чтобы можно было вести поиск, написав в инпуте название с прописной буквы, а не только с заглавной. В нижнем регистре данные будут только в фильтрации, в карточке этого не будет.//
                .map((item, index) => ( // item = объект из массива arr; 'arr' поменяли на 'items', т.к. весь массив закинули на бэкенд; 'item' передается из компонента 'Card' - 'onPlus({title, imageUrl, price});'. Если в это объект мы передадим, на пример '123', то '123' и будет отображаться в консоли при каждом клике на кнопку 'plus'.
                // Т.е. в компоненте 'Card' мы задаем то, что нам нужно отобразить, рендерить и т.д., а в 'App' чечрез 'props' это исполняется.
                    <Card
                        key={index} // 'key' необходимо указывать, чтобы для ReactJS была понятна разница между элементами (зачастую одинаковыми, например 'Card', 'cartItem', etc), которые он рендерит на странице. Значение 'key' необходимо выбирать из свойств конкретного объекта. На пример, 'title', 'price' или ещё какое-либо свойство, которое может быть УНИКАЛЬНЫМ для данного элемента и с малой вероятностью будет меняться.'
                        onFavourite={(obj) => onAddToFavourite(obj)}
                        onPlus={(obj) => onAddToCart(obj)}

                        // title = {item.title}  // название/title товара из объекта массива
                        // price = {item.price}  // цена/price товара из объекта массива
                        // imageUrl = {item.imageUrl}  // расположение/url картинки товара из объекта массива

                        // метод конкатенации (описан в компоненте 'Favourites')
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;