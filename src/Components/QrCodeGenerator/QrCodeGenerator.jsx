import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react'
import generator from './qrCodeGenerator.module.css'
import { GENERATE_DATA } from '../../constants';


const QrCodeGenerator = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

        localStorage.setItem(
            GENERATE_DATA, 
            JSON.stringify([...prevData, value])
        )

        setResult(value)
        setValue('')
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('')

    }

    return (
        <div className={generator.container}>
            <input 
                type="text"
                placeholder='Введите текст...'
                className={generator.container}
                value={value} 
                onChange={onChangeHandler} 
            />
            <button type="button" className={generator.button} onClick={onClickHandler}>
                Сгенерировать QR
            </button>

            {result !== '' && (
                <div className={generator.qrWrapper}>
                    <QRCodeSVG value={result} size={200} />
                </div>
                
            )}
        </div>
    )
}

export default QrCodeGenerator