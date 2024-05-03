import logo from '../../../assets/logo.svg';
import logoButton from '../../../assets/logo_button.svg';

export default function CentralParts ({setStateCard, cards}) {

    function handleReset () {
        cards.forEach(card => {
            card.turned = false;
        });

        setStateCard(cards)
    }


    return(
        <div className={`
            flex flex-col items-center justify-between
            h-full py-12 px-4
            bg-gradient-to-r from-amber-200 to-yellow-500
        `}>
            <img src={logo} alt='Logo tipo da animação naruto' />
            <button
                onClick={()=>handleReset()}
                className={`
                    flex items-center justify-center
                    cursor-pointer bg-green-700
                    w-auto h-auto py-2 px-14 rounded-xl
                    hover:transform hover:scale-105
                    gap-2
                `}
            >
                <img 
                    src={logoButton} 
                    alt='Simbulo do selo de cinco pontas'
                    className='w-10'
                />
                <span>Reset</span>
            </button>
        </div>
    )
}