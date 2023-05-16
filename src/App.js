import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

// const arr = [
//     {
//         title: 'Мужские Кроссовки Nike Blazer Mid Suede',
//         price: '12 999',
//         imageUrl: '/img/sneakers/1.jpg'
//     },
//     {
//         title: 'Мужские Кроссовки Nike Air Max 270',
//         price: '15 600',
//         imageUrl: '/img/sneakers/2.jpg'
//     },
//     {
//         title: 'Мужские Кроссовки Nike Blazer Mid Suede',
//         price: '8 499',
//         imageUrl: '/img/sneakers/3.jpg'
//     },
//     {
//         title: 'Кроссовки Puma X Aka Boku Future Rider',
//         price: '8 999',
//         imageUrl: '/img/sneakers/4.jpg'
//     },
//     {
//         title: 'Мужские Кроссовки Under Armour Curry 8',
//         price: '15 199',
//         imageUrl: '/img/sneakers/5.jpg'
//     },
//     {
//         title: 'Мужские Кроссовки Nike Kyrie 7',
//         price: '11 299',
//         imageUrl: '/img/sneakers/6.jpg'
//     },
//     {
//         title: 'Мужские Кроссовки Jordan Air Jordan 11',
//         price: '10 799',
//         imageUrl: '/img/sneakers/7.jpg'
//     },
//     {
//         title: 'Мужские Кроссовки Nike LeBron XVIII',
//         price: '16 499',
//         imageUrl: '/img/sneakers/8.jpg'
//     },
//     {
//         title: 'Мужские Кроссовки Nike Lebron XVIII Low',
//         price: '13 999',
//         imageUrl: '/img/sneakers/9.jpg'
//     },
//     {
//         title: 'Мужские Кроссовки Nike Blazer Mid Suede',
//         price: '8 499',
//         imageUrl: '/img/sneakers/10.jpg'
//     },
//     {
//         title: 'Кроссовки Puma X Aka Boku Future Rider',
//         price: '8 999',
//         imageUrl: '/img/sneakers/11.jpg'
//     },
//     {
//         title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
//         price: '11 299',
//         imageUrl: '/img/sneakers/12.jpg'
//     },
// ]

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://646242cf7a9eead6facaac94.mockapi.io/items')
            .then(res => {
                return res.json();
            })
            .then(json => {
                setItems(json)
            }); 
    }, []);

    const onAddToCart = (obj) => {
        /* 'setCartItems' берёт всё, что есть в 'cartItems' (все старые данные) и в конец пушит новый объект 'obj',  т.е. в конец массива добавляются новые данные/объекты (в нашем случае в компоненте корзина 'Cart" добавляются карточки выбранных товаров) */

        // setCartItems([...cartItems, obj]);

        /* НО правильнее будет добавялть новые данные следующим образом - использовать анонимную функцию, а не переменную 'cardItems': */
        setCartItems((prev) => [...prev, obj]);
        /* 'setCartItems' берёт текущие данные из 'cartItems' и при омощи стрелочной функцуии в конец пушит новый объект 'obj' и новый массив заменяет старый масси в 'cartItems' */
        
        /* нужно сделать проверку, если в Корзине есть уже какой-то товар, то его не добавлять ещё раз при клике на кнопку 'plus' */
        if (obj) {

        }
    }

    return (
        <div className="wrapper">
            {/* {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null} */}
            {/* 
            или 
            - если код слева верный/true, то код справа выполняется; 
            - если код слева НЕ верный/false, то и код справа НЕ выполняется автоматически */}
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
            
            <Header onClickCart={() => setCartOpened(true)} />

            <div className="content">
                <div className="content__wrapper">
                    <h1>Все кроссовки</h1>
                    <div className="search-block">
                        <img width="14" height="14" src="/img/search.svg" alt="Search" />
                        <input placeholder="Поиск ..." />
                    </div>
                </div>

                <div className="sneakers">
                    {items.map((item) => ( // item = объект из массива arr; 'arr' поменяли на 'items', т.к. весь массив закинули на бэкенд; 'item' передается из компонента 'Card' - 'onClickPlusBtn({title, imageUrl, price});'. Если в это объект мы передадим, на пример '123', то '123' и будет отображаться в консоли при каждом клике на кнопку 'plus'.
                    // Т.е. в компоненте 'Card' мы задаем то, что нам нужно отобразить, рендерить и т.д., а в 'App' чечрез 'props' это исполняется.
                        <Card 
                            title = {item.title}  // название/title товара из объекта массива
                            price = {item.price}  // цена/price товара из объекта массива
                            imageUrl = {item.imageUrl}  // расположение/url картинки товара из объекта массива
                            onClickFavouriteBtn={() => console.log('Добавили в закладки')}
                            onClickPlusBtn={(obj) => onAddToCart(obj)}
                        />
                    ))}
                </div>
            </div>

        </div>
  );
}

export default App;

// Хук - useState //`
// function App() {
//     const [count, setCount] = React.useState(0);

//     const plus = () => {
//         setCount(count + 1);
//     }

//     const minus = () => {
//         setCount(count - 1);
//     }

//     return (
//         <div className="wrapper">

//             <center>
//                 <h1>{count}</h1>
//                 <button onClick={plus}>+</button>
//                 <button onClick={minus}>-</button>
//             </center>
//         </div>
//     );
// }