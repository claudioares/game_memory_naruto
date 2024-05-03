import CentralCentral from './component.central';

export default function Card ({setStateCard, cards}) {
    return(
        <div className={`
            h-full w-60 relative
        `}>
            <div className='w-full h-8 bg-orange-300 absolute top-0'></div>
            <CentralCentral
                setStateCard={setStateCard}
                cards={cards}
            />
            <div className='w-full h-8 bg-orange-300 absolute bottom-0'></div>
        </div>
    )
}