import { use, useEffect, useState  } from 'react'
import {Card} from './components/Card.jsx'
import './App.css'

const cardImages = [
	{ "src": "/img/helmet-1.png", matched: false},
	{ "src": "/img/potion-1.png", matched: false},
	{ "src": "/img/ring-1.png", matched: false},
	{ "src": "/img/scroll-1.png", matched: false},
	{ "src": "/img/shield-1.png", matched: false},
	{ "src": "/img/sword-1.png", matched: false}
]

function App() {
	const [cards, setCards] = useState([])
	const [turns, setTurns] = useState(0)
	const [choiceOne, setChoiceOne] = useState(null)
	const [choiceTwo, setChoiceTwo] = useState(null)
	const [disabled, setDisabled] = useState(false)


	const doplicateCards = () => {
		const doplicatedCards = [...cardImages, ...cardImages]
		const shuffledCards = shuffleArray(doplicatedCards)
		const addIds = shuffledCards.map( card => {
			return { ...card, id: Math.random() }
		})

		setChoiceOne(null);
		setChoiceTwo(null);
		setDisabled(false);
		setCards(addIds);
		setTurns(0);
	}

	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	}

	useEffect(() => {
		if(choiceOne && choiceTwo){
			setDisabled(true);
			if(choiceOne.src === choiceTwo.src){
				setCards(prevCards => {
					return prevCards.map(card => {
						if(card.src === choiceOne.src) {
							return { ...card, matched: true }
						} else {
							return card;
						}
					})
				});
				resetChoices();
			} else {
				setTimeout(() => resetChoices(), 1000);
			}
		}
	}, [choiceOne, choiceTwo])

	useEffect(() => {
		doplicateCards();
	}
	, [])

	function resetChoices() {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns(prevTurns => prevTurns + 1);
		setDisabled(false);
	}

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}


	return (
		<>
			<h1 className='title'>Memory Game</h1>
			<div className='card-container'>
				{
					cards.map( card =>  (
						<Card 
							key={card.id} 
							card={card} 
							handleChoice={handleChoice}
							flipped={card === choiceOne || card === choiceTwo || card.matched}
							disabled={disabled}
						/>
					))
				}
			</div>
			<p className='turns'>Turns: {turns}</p>
			<button onClick={doplicateCards}>New Game</button>
		</>
	)
}

export default App
