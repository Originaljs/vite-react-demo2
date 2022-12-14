import { useState } from 'react'
import Style from './Style.module.less'
import { InfoTitle } from '../InfoTitle'
import { EnvIconList } from '../chlidren/EnvIconList'
import { DeviceInfo } from '../chlidren/DeviceInfo'

import ws from '../../assets/imgs/瓦斯.png'
import sd from '../../assets/imgs/湿度.png'
import co from '../../assets/imgs/CO.png'
import wd from '../../assets/imgs/温度.png'
import fs from '../../assets/imgs/风速.png'
import fc from '../../assets/imgs/粉尘.png'

import lan from '../../assets/imgs/lan.png'
import q from '../../assets/imgs/q.png'
import lv from '../../assets/imgs/lv.png'
import z from '../../assets/imgs/z.png'
import slv from '../../assets/imgs/slv.png'
import slan from '../../assets/imgs/slan.png'

import bglan from '../../assets/imgs/bglan.png'
import bgq from '../../assets/imgs/bgq.png'
import bglv from '../../assets/imgs/bgq.png'
import bgz from '../../assets/imgs/bgz.png'
import bgslv from '../../assets/imgs/bgslv.png'
import bgslan from '../../assets/imgs/bgslan.png'
export const Preview = () => {
    const [infosData, setInfosData] = useState([
        { icon: ws, name: '瓦斯', val: .1, unit: 'kg/m³' },
        { icon: sd, name: '湿度', val: 82, unit: '%' },
        { icon: co, name: 'CO', val: 20, unit: '' },
        { icon: wd, name: '温度', val: 24, unit: '°C' },
        { icon: fs, name: '风速', val: 2, unit: 'm/s' },
        { icon: fc, name: '粉尘', val: 12, unit: 'mg/m³' },
    ])

    const [deviceInfos, setDeviceInfos] = useState([
        { name: '系统电压', val: 1140, icon: lan, bg: bglan, unit: 'V' },
        { name: '油泵工作时间', val: 8, icon: q, bg: bgq, unit: 'h' },
        { name: '截割工作时间', val: 5, icon: lv, bg: bglv, unit: 'h' },
        { name: '截割高度', val: 4.5, icon: lan, bg: bglan, unit: 'm' },
        { name: '截割电流', val: 100, icon: z, bg: bgz, unit: 'A' },
        { name: '滚筒转速', val: 40, icon: slv, bg: bgslv, unit: 'r/min' },
        { name: '推进速度', val: 4.5, icon: slan, bg: bgslan, unit: 'm/h' },
    ])
    return (
        <section id={Style.main} className='page'>
            <div className={Style.leftContent}>
                <div className={Style.leftItem}>
                    <InfoTitle title='环境信息' />
                    <EnvIconList list={infosData} />
                </div>
                <div className={Style.leftItem}>
                    <InfoTitle title='设备信息' />
                    <DeviceInfo list={deviceInfos} />
                </div>
                <div className={Style.leftItem}>
                    <InfoTitle title='运行参数' />
                </div>
            </div>
            <div className={Style.middle}></div>
            <div className={Style.rightContent}></div>
        </section>
    )
}
