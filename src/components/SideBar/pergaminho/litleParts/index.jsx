import './styles.css'


export default function LitleParts ({ minibottom, minitop, maxbottom, maxtop, radius}){
    return(
        <div className="container_parts">
            <div 
                className="div_mini"
                style={{
                    borderRadius:radius,
                    top: minitop,
                    bottom: minibottom
                }}
            />
            <div 
                className="div_max"
                style={{
                    left:'0',
                    top: maxtop,
                    bottom: maxbottom
                }}
            />
        </div>
    )
}