import { SCAN_DATA } from "../../constants";
import {QRCodeSVG} from 'qrcode.react';
import scanStyle from './scanHistory.module.css'

const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
    
    return (
        <div>
            {data.map((text) => {
                return (
                    <p key={text}>
                        {text}
                        <QRCodeSVG value={text} size={100} className={scanStyle.container} />
                    </p>
                    
                )
            })}
        </div>
    )
}

export default ScanHistory;