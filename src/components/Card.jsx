import './Cards.css';

export const Card = ({card, handleChoice, flipped, disabled}) => {
    

    const handleClick = () => {
        if(!disabled){
            handleChoice(card);
        }
    }

    return(
        <div className={flipped ? 'card card-flip' : 'card'}>
            <img src={card.src} className='card-img' alt="card game" />
            <img src="/img/cover.png" className='card-cover' onClick={handleClick} alt="cover card" />
        </div>
    )
}