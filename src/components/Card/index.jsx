import capa from '../../assets/cards/capa.svg';


export default function Card ({card, stateCard, setStateCard}){

    function handleTurnCard () {
        const localCard = [...stateCard];

        const currentCard = localCard.find(cardLocal => cardLocal.id === card.id);
        const onlyTurnCards = localCard.filter(cardLocal => cardLocal.turned);

        if (onlyTurnCards.length > 1) return;

        if(onlyTurnCards.length && card.name === onlyTurnCards[0].name){
            currentCard.turned = !currentCard.turned;
            setStateCard(localCard);

            setTimeout(()=>{
                if(currentCard.id === onlyTurnCards[0].id){ 
                    return;
                };
    
                const filterCards = localCard.filter((item)=>
                    item.id !== currentCard.id && item.id !== onlyTurnCards[0].id
                );
                setStateCard(filterCards)
            }, 900)

            return;

        }

        currentCard.turned = !currentCard.turned;
        setStateCard(localCard);

        setTimeout(()=>{
            if(onlyTurnCards.length){
                localCard.forEach((item)=>{
                    item.turned = false
                })
    
                setStateCard([...localCard])
            }

        },900)

    }

    return ( 
        <img 
            src={card.turned ? card.img : capa} 
            alt='cartas dos personagens' 
          
            id={card.name} 
            className={`
                flex gap-[0.2rem] cursor-pointer
                hover:transform hover:scale-[1.05]
                w-20
                sm:w-28
                md:w-36
                lg:w-auto
            `}
            onClick={()=>handleTurnCard()}
        />
    )
}