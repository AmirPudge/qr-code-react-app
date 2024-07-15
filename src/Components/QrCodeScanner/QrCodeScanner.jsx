import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import scanner from './qrCodeScanner.module.css'
import { SCAN_DATA } from '../../constants';

const QrCodeScanner = () => {

    const [scanned, setScanned] = useState('')

    const ScanHandler = (result) => {
        setScanned(result[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify([...prevData, result[0].rawValue])
        )
    }

    return (
        <div className={scanner.container}>
            <Scanner 
                onScan={ScanHandler}
                components={{
                    audio: false,
                    finder: false,
                }}
                styles={
                    {container: { width: '350px', height: '350px'}
                }} 
            />
            <p className={scanner.result}>{scanned}</p>
        </div>
    )
}

export default QrCodeScanner