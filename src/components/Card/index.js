import React from 'react';
import styles from './Card.module.scss';
// можно вывести styles для проверки в консоль
// console.log(styles);

function Card({ id, title, imageUrl, price, onFavourite, onPlus, favourited = false }) { /* вместо 'props' можно использовать деструктуризацию, указав необходимые свойства по имени, а не через 'props' */
	const [isAdded, setIsAdded] = React.useState(false);
    // Сохранение закладок - нажатие на кнопку 'favourite' (aka 'сердечко')
    const [isFavourite, setIsFavourite] = React.useState(favourited);

	const handleClickPlus = () => {
        onPlus({title, imageUrl, price});
		setIsAdded(!isAdded);
	};

    const handleClickFavourite = () => {
        onFavourite({id, title, imageUrl, price});
        // setIsFavourite(true);  // Если мы хотим только включить кнопку/сердечко
        setIsFavourite(!isFavourite); // Если мы хотим включать и выключать кнопку/сердечко
    }

	return (
		<div className={styles.card}>
			<div className={styles.favourite} onClick={handleClickFavourite}>
				<img src={isFavourite ? '/img/favourite-liked.svg' : '/img/favourite-unliked.svg'} alt='Unliked' />
			</div>
			<img
				width='133'
				height='112'
				src={imageUrl}
				alt='Sneakers' 
			/>
			<h5>{title}</h5>
			<div className={styles.cardBottom}>
				<div className={styles.cardPrice}>
				<span>Цена:</span>
				<b>{price} руб.</b>
				</div>
				<img
					className={styles.plus}
					onClick={handleClickPlus}
					src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
					alt='Plus'
				/>
			</div>
		</div>
	);
}

export default Card;


	// 'useEffect' следит за изменением состояния элемента.
	// 'useEffect' выполнит функцию, прописанную в теле функции только, когда произойдут какие-нибудь изменения в [isAdded], т.е. как только произошло какое-то изменение в [isAdded], 'useEffect' выполнит то, что задано в функции.
	// В квадратных скобках через запятую прописываются те переменные, функции и т.д., при изменении которых мы хотим запускать код/функцию в 'useEffect' - [isAdded, test(), etc]
	
	// React.useEffect(() => { 
	// 	console.log('Переменная изменилась')
	// }, [isAdded]);