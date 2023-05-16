import React from "react";
import styles from "./Card.module.scss";
// можно вывести styles для проверки в консоль
// console.log(styles);

function Card({ title, imageUrl, price, onClickFavouriteBtn, onClickPlusBtn }) { /* вместо 'props' можно использовать деструктуризацию, указав необходимые свойства по имени, а не через 'props' */
	const [isAdded, setIsAdded] = React.useState(false);

	const handleClick = () => {
        onClickPlusBtn({title, imageUrl, price});
		setIsAdded(!isAdded);
	};

	return (
		<div className={styles.card}>
			<div className={styles.favourite} onClick={onClickFavouriteBtn}>
				<img src="/img/heart-unliked.svg" alt="Unliked" />
			</div>
			<img
				width="133"
				height="112"
				src={imageUrl}
				alt="Sneakers" 
			/>
			<h5>{title}</h5>
			<div className={styles.cardBottom}>
				<div className={styles.cardPrice}>
				<span>Цена:</span>
				<b>{price} руб.</b>
				</div>
				<img
					className={styles.plus}
					onClick={handleClick}
					src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
					alt="Plus"
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