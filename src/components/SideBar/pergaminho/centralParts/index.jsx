import './styles.css';
import logo from '../../../../assets/logo.svg';
import logoButton from '../../../../assets/logo_button.svg';

export default function CentralParts ({setStateCard, cards}) {

    function handleReset () {
        cards.forEach(card => {
            card.turned = false;
        });

        setStateCard(cards)
    }


    return(
        <div className="container_central">
            <img src={logo} alt='Logo tipo da animação naruto' />
            <button
                onClick={()=>handleReset()}
            >
                <img src={logoButton} alt='Simbulo do selo de cinco pontas' />
                <span>Reset</span>
            </button>
        </div>
    )
}