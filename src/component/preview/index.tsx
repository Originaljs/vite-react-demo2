import { useState } from 'react'
import Style from './Style.module.less'
import { InfoTitle } from '../InfoTitle'
import { EnvIconList } from '../chlidren/EnvIconList'

import ws from '../../assets/imgs/瓦斯.png'
import sd from '../../assets/imgs/湿度.png'
import co from '../../assets/imgs/CO.png'
import wd from '../../assets/imgs/温度.png'
import fs from '../../assets/imgs/风速.png'
import fc from '../../assets/imgs/粉尘.png'

export const Preview = () => {
    const [infosData, setInfosData] = useState([
        { icon: ws, name: '瓦斯', val: .1, unit: 'kg/m³' },
        { icon: sd, name: '湿度', val: 82, unit: '%' },
        { icon: co, name: 'CO', val: 20, unit: '' },
        { icon: wd, name: '温度', val: 24, unit: '°C' },
        { icon: fs, name: '风速', val: 2, unit: 'm/s' },
        { icon: fc, name: '粉尘', val: 12, unit: 'mg/m³' },
    ])
    return (
        <section id={Style.main} className='page'>
            <div className={Style.leftContent}>
                <div className={Style.leftItem}>
                    <InfoTitle title='环境信息' />
                    <EnvIconList list={infosData} />
                </div>
                <div className={Style.leftItem}>
                    <InfoTitle title='环境信息' />
                </div>
                <div className={Style.leftItem}>
                    <InfoTitle title='环境信息' />
                </div>
            </div>
            <div className={Style.middle}></div>
            <div className={Style.rightContent}></div>
        </section>
    )
}
