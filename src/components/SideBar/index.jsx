import './styles.css'
import CentralPart from './pergaminho/centralParts';
import LitleParts from './pergaminho/litleParts';

export default function Card () {
    return(
        <div className="pergaminho_game">
            <LitleParts 
                minibottom=''
                minitop='0'
                maxbottom='0'
                maxtop=''
                radius={'100px 100px 0px 0px'}
            />
            <CentralPart />
            <LitleParts
                minibottom='0'
                minitop=''
                maxbottom=''
                maxtop='0'
                radius={'0px 0px 100px 100px'}
            />
        </div>
    )
}