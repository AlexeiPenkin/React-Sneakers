import React from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favourites from './pages/Favourites';

// const arr = [
//     {
//      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//      "price": "12 999",
//      "imageUrl": "/img/sneakers/1.jpg"
//     },
//     {
//      "title": "Мужские Кроссовки Nike Air Max 270",
//      "price": "15 600",
//      "imageUrl": "/img/sneakers/2.jpg"
//     },
//     {
//      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//      "price": "8 499",
//      "imageUrl": "/img/sneakers/3.jpg"
//     },
//     {
//      "title": "Кроссовки Puma X Aka Boku Future Rider Big",
//      "price": "9 999",
//      "imageUrl": "/img/sneakers/4.jpg"
//     },
//     {
//      "title": "Мужские Кроссовки Under Armour Curry 8",
//      "price": "15 199",
//      "imageUrl": "/img/sneakers/5.jpg"
//     },
//     {
//      "title": "Мужские Кроссовки Nike Kyrie 7",
//      "price": "11 299",
//      "imageUrl": "/img/sneakers/6.jpg"
//     },
//     {
//      "title": "Мужские Кроссовки Jordan Air Jordan 11",
//      "price": "10 799",
//      "imageUrl": "/img/sneakers/7.jpg"
//     },
//     {
//      "title": "Мужские Кроссовки Nike LeBron XVIII",
//      "price": "16 499",
//      "imageUrl": "/img/sneakers/8.jpg"
//     },
//     {
//      "title": "Мужские Кроссовки Nike Lebron XVIII Low",
//      "price": "13 999",
//      "imageUrl": "/img/sneakers/9.jpg"
//     },
//     {
//      "title": "Мужские Кроссовки Nike Blazer Green Suede",
//      "price": "8 499",
//      "imageUrl": "/img/sneakers/10.jpg"
//     },
//     {
//      "title": "Кроссовки Puma X Aka Boku Future Rider",
//      "price": "8 999",
//      "imageUrl": "/img/sneakers/11.jpg"
//     },
//     {
//      "title": "Мужские Кроссовки Nike Kyrie Flytrap IV",
//      "price": "11 299",
//      "imageUrl": "/img/sneakers/12.jpg"
//     }
//    ]

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    // Сохраняем лайкнутые товары в массив на сервере
    const [favourites, setFavourites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        // fetch('https://646242cf7a9eead6facaac94.mockapi.io/items') // 'fetch' - функция встроена в браузер //
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then(json => {
        //         setItems(json)
        //     });
        
        // Мы говорим: 'axios' ('axios' - сторонняя библиотека, установка: 'npm install axios'), получи ('get') данные с указанного адреса, затем ('then') возьми ответ ('res') в сервера и на пример отоборази в консоли 'res.data' ('console.log(res.data)'). С 'axios' нам не надо переводить полученные данные в нужный нам формат ('json'). 'Axios' сам понимает что переводить и в какой формат.//
        axios.get('https://646242cf7a9eead6facaac94.mockapi.io/items').then(res => {
            setItems(res.data);
        });

        // Запрашиваем корзину и передаём массив всех объектов из корзины 'setCartItems' //
        // axios.get('https://646242cf7a9eead6facaac94.mockapi.io/cart').then(res => {
        //     setCartItems(res.data);
        // }); ////////////////////////////////////////////////////

        // Запрашиваем сервер на получение всех объектов из 'favourites' и поместить их в 'setFavourites' //
        axios.get('https://646242cf7a9eead6facaac94.mockapi.io/favourites').then(res => {
            setFavourites(res.data);
        });
    }, []);

    // Любой метод/функцию нужно использовать в соответствующем элементе, т.е. в тэгах JSX (т.е. в 'return') //

    const onAddToCart = (obj) => {
        /* Мы отправялем данные методом 'post' на сервер, т.е. кликая на кнопку 'plus', мы добавляем товар в корзину и одновременно отправляем объект в массив на сервере */

        // axios.post('https://646242cf7a9eead6facaac94.mockapi.io/cart', obj); //////////

        /* 'setCartItems' берёт всё, что есть в 'cartItems' (все старые данные) и в конец пушит новый объект 'obj',  т.е. в конец массива добавляются новые данные/объекты (в нашем случае в компоненте корзина 'Cart" добавляются карточки выбранных товаров) */

        // setCartItems([...cartItems, obj]);

        /* НО правильнее будет добавялть новые данные следующим образом - использовать анонимную функцию, а не переменную 'cardItems': */

        // setCartItems((prev) => [...prev, obj]); ////////////////////////////////////

        /* 'setCartItems' берёт текущие данные из 'cartItems' и при омощи стрелочной функцуии в конец пушит новый объект 'obj' и новый массив заменяет старый масси в 'cartItems' */
        
        /* нужно сделать проверку, если в Корзине есть уже какой-то товар, то его не добавлять ещё раз при клике на кнопку 'plus' */
        // if (obj) {

        // }
    }

    // Удаление карточек из корзины //
    // При помощи шаблонных кавычек мы передаем 'id' в ссылку, т.е. в конце ссылки будет '...cart/номер id'//
    const onRemoveItem = (id) => {
        // Удаляем объекты товаров с сервера? отправляя запрос 'delete' на сервер

        // axios.delete(`https://646242cf7a9eead6facaac94.mockapi.io/cart/${id}`); ///////

        // Мы говорим: 'setCartItems', когда выполнится метод 'onRemoveItem', возьми всё, что есть в 'cartItems' (предыдущие данные), и отфильтруй ('filter') самого себя: возьми 'item' и проверь, что 'item' из твоего массива не равен переменной 'id' ('!== id') (заданной, как аргумент в анонимной стрелочной функции) //

        // Пример:
        // Создаем массив 'items':
        // const items = [
        //     {
        //      "id": "1",
        //      "title": "Мужские Кроссовки Nike Blazer Mid Suede",
        //      "imageUrl": "/img/sneakers/1.jpg",
        //      "price": "12 999"
        //     },
        //     {
        //      "id": "2",
        //      "title": "Мужские Кроссовки Nike Air Max 270",
        //      "imageUrl": "/img/sneakers/2.jpg",
        //      "price": "15 600"
        //     },
        //     {
        //      "id": "3",
        //      "title": "Мужские Кроссовки Nike Blazer White Suede",
        //      "imageUrl": "/img/sneakers/3.jpg",
        //      "price": "8 499"
        //     },
        //     {
        //      "id": "4",
        //      "title": "Мужские Кроссовки Nike LeBron XVIII",
        //      "imageUrl": "/img/sneakers/8.jpg",
        //      "price": "16 499"
        //     }
        //    ]
        //
        //  Мы говори: 'items', возьми тот 'id', который есть у тебя, пройдись по каждому объекту массива и давай удалим ''item'' с id номер '3'. Если 'id' любого объекта из массива НЕ равен (!==) '3', мы его оставляем. Т.е. в фильтр попадут только те 'items', у которых 'id' не равен (!==) '3'.
        //  items.filter(item => item.id !== '3');
        //
        //  (3) [{…}, {…}, {…}]
        //  length : 3
        //  0 : {id: '1', title: 'Мужские Кроссовки Nike Blazer Mid Suede', imageUrl: '/img/sneakers/1.jpg', price: '12 999'}
        //  1 : {id: '2', title: 'Мужские Кроссовки Nike Air Max 270', imageUrl: '/img/sneakers/2.jpg', price: '15 600'}
        //  2 : {id: '4', title: 'Мужские Кроссовки Nike LeBron XVIII', imageUrl: '/img/sneakers/8.jpg', price: '16 499'}
        //
        // Если мы укажем РАВЕН (===) '3', то в фильтр попадет только один объек с 'id' = '3'
        //  items.filter(item => item.id !== '3');
        //  
        //  [{…}]
        //  length : 1
        //  0 : {id: '3', title: 'Мужские Кроссовки Nike Blazer White Suede', imageUrl: '/img/sneakers/3.jpg', price: '8 499'}

        // setCartItems((prev) => prev.filter(item => item.id !== id)); //////////////////
    }

    const onAddToFavourite = async (obj) => {

        // Мы отправялем данные методом 'post' на сервер, т.е. кликая на кнопку 'favourite', мы добавляем товар в массив на сервере

        // !!! СЕРВИС MockAPI ОГРАНИЧИЛ КОЛЧИЕСТВО РЕСУРСОВ ДО 2-х, ПОЭТОМУ СОЗДАТЬ РУСУРС 'favourites' НЕ ПОЛУЧИЛОСЬ(( ПОЭТОМУ Я УДАЛИЛ 'cart' Т СОЗДАЛ РЕСУР 'favourites' НА MockAPI. ПОТОМ ДЛЯ РАБОТЫ С КОДОМ КОРЗИНЫ МОЖНО СДЕЛАТЬ НАОБОРОТ - УДАЛТЬ 'favourites' И ОПЯТЬ СОЗДАТЬ 'cart' !!! //
        
        // axios.post('https://646242cf7a9eead6facaac94.mockapi.io/favourites', obj);
        // setFavourites((prev) => [...prev, obj]);

        //Если в 'favourites' мы найдём ('favourites.find') хотя бы один объект ('favObj.id') с таким же 'id' ('favObj.id === obj.id'), то на адрес 'https://.../favourites' отправляется запрос 'axios.delete' и передается 'id', который есть в 'obj.id' (задан аргументом в стрелочной функции) (`https://.../favourites/${obj.id}`) и из стейта при помощи фильтрации удали это 'id' -->

        // если мы используем async/await, то нужно использовать также и try/catch, чтобы отслеживать ошибки и знать, когда ошибка произошла
        try {
            if (favourites.find((favObj) => favObj.id === obj.id)) {
                axios.delete(`https://646242cf7a9eead6facaac94.mockapi.io/favourites/${obj.id}`);
            
            // --> т.е. измени 'setFavourites', возьми предыдущее значение, пробегись по ним и отфильтруй все 'id', которые не равны тому 'id', переданому при нажатии на 'onAddToFavourite'
    
                setFavourites((prev) => prev.filter((item) => item.id !== obj.id));
            
                // если такого 'id' не будет, то создай объект 'favourite'
    
            } else {
                const { data } = await axios.post('https://646242cf7a9eead6facaac94.mockapi.io/favourites', obj);
                setFavourites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Не удалось добавить в favourites')
        }
    }

    // Если мы хотим сохранить данные, которые есть в 'input', то ReactJS рекомендует создавать контролируемый 'input'. Это значит, что при получении данных из 'input' мы должны сохранить эти данные в этот же 'input'.

    const onChangeSearchInput = (event) => {
        // (event.target.value) - отображает данные в 'input' //
        // console.log(event.target.value)
        setSearchValue(event.target.value);
    }

    return (
        <div className="wrapper">
            {/* {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null} */}
            {/* 
            или 
            - если код слева верный/true, то код справа выполняется; 
            - если код слева НЕ верный/false, то и код справа НЕ выполняется автоматически */}
            {cartOpened && <Drawer items={cartItems}
                onClose={() => setCartOpened(false)}
                onRemove={onRemoveItem}
            />}
            
            <Header onClickCart={() => setCartOpened(true)} />
        
            {/* Этот компонент следит за тем, что в адресной строке есть какое-то содержимое с '/test', если есть, то рендерит всё, что находится внутри этого уомпонента '<Router>XXXXXXXX</Router>'. */}

            <Route path="/" exact>
                <Home 
                    // Вместо того, чтобы переносить необходимые useStates в компонент 'Home' мы зададим из в 'props' и потом в компоненте 'Home' мы вытащим всё нужное из 'props'
                    items={items}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAddToFavourite={onAddToFavourite}
                    onAddToCart={onAddToCart}
                />
            </Route>

            <Route path="/favourites" exact>
                <Favourites 
                    // Передаем переменные 'favourites' свойства 'items'
                    items={favourites}
                    onAddToFavourite={onAddToFavourite}
                />
            </Route>

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