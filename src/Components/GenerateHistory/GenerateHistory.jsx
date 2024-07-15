import { GENERATE_DATA } from "../../constants"
import {QRCodeSVG} from 'qrcode.react';
import generateStyles from './generateHistory.module.css'

const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

    return (
        <div>
            {data.map((text) => {
                return (
                    <p key={text}>
                        {text}
                        <QRCodeSVG value={text} size={100} className={generateStyles.container}/>
                    </p>
                    
                )
            })}
        </div>
    )
}

export default GenerateHistory;