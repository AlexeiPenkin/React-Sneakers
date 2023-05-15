import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper">
        <Drawer />
        <Header />

        <div className="content">
            <div className="content__wrapper">
                <h1>Все кроссовки</h1>
                <div className="search-block">
                    <img width="14" height="14" src="/img/search.svg" alt="Search" />
                    <input placeholder="Поиск ..." />
                </div>
            </div>

            <div className="sneakers">
                <Card />

                {/* <div className="card">
                    <div className="favourite">
                        <img src="/img/heart-unliked.svg" alt="Unliked" />
                    </div>
                    <img width="133" height="112" src="/img/sneakers/2.jpg" alt="Sneakers" />
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="cardBottom">
                        <div className="cardPrice">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width="11" height="11" src="/img/plus.svg" alt="Plus" />
                        </button>
                    </div>
                </div> */}

                {/* <div className="card">
                    <div className="favourite">
                        <img src="/img/heart-unliked.svg" alt="Unliked" />
                    </div>
                    <img width="133" height="112" src="/img/sneakers/3.jpg" alt="Sneakers" />
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="cardBottom">
                        <div className="cardPrice">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width="11" height="11" src="/img/plus.svg" alt="Plus" />
                        </button>
                    </div>
                </div> */}

                {/* <div className="card">
                    <div className="favourite">
                        <img src="/img/heart-unliked.svg" alt="Unliked" />
                    </div>
                    <img width="133" height="112" src="/img/sneakers/4.jpg" alt="Sneakers" />
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="cardBottom">
                        <div className="cardPrice">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width="11" height="11" src="/img/plus.svg" alt="Plus" />
                        </button>
                    </div>
                </div> */}
            </div>
        </div>

    </div>
  );
}

export default App;
