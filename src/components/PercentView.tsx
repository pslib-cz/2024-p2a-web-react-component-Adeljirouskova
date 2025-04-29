import {FC} from 'react'
import style from './PercentView.module.css'


type PercentViewType = {
    value: number,
    max: number,
    makeColor: (percent: number) => string,
}


const PercentView: FC<PercentViewType>  = ({max, value, makeColor }) => {
    
    return (
        <div className={style.percentview} style={ {color: makeColor(value/max)} }>
            <p>{value / max * 100}%</p>
            <div className={style.bar}></div>
            <div style={ {height: 100%, backgroundColor: makeColor(value/max) width: 100% }}></div>
        </div>
    )
}

export default PercentView