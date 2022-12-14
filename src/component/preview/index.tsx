import { useState, useEffect } from 'react'
import Style from './Style.module.less'
import { InfoTitle } from '../InfoTitle'
import { EnvIconList } from '../chlidren/EnvIconList'
import { DeviceInfo } from '../chlidren/DeviceInfo'
import { RunningParams } from '../chlidren/RunningParams'
import { GaugeList } from '../chlidren/GaugeList'
import { DevicePreview } from '../chlidren/DevicePreview'
import { RightInfos } from '../chlidren/RightInfos'

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

const randomInt = (min: number, max: number) => parseInt((Math.random() * (max - min) + min).toFixed())
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

    const [runningP, setRunningP] = useState([
        { name: "液压油位", val: 70, unit: "", percentage: true },
        { name: "液压油温", val: 50, unit: "°C" },
        { name: "冷却水压", val: 30, unit: "bar" },
        { name: "齿轮油位", val: 50, unit: "", percentage: true },
        { name: "齿轮油温", val: 20, unit: "°C" },
        { name: "喷雾水压", val: 20, unit: "bar" },
    ])

    const [gagueList, setGagueList] = useState([
        { unit: "V", name: "系统电压", max: 1150, min: 1130, val: 1132 },
        { unit: "A", name: "油泵电流", max: 140, min: 110, val: 130 },
        { unit: "A", name: "左刮板电流", max: 140, min: 110, val: 130 },
        { unit: "A", name: "右刮板电流", max: 140, min: 110, val: 130 },
        { unit: "A", name: "左装载电流", max: 140, min: 110, val: 130 },
        { unit: "A", name: "右装载电流", max: 140, min: 110, val: 130 },
    ])

    const randomGagueList = () => {
        return [
            { unit: "V", name: "系统电压", max: 1150, min: 1130, val: randomInt(1130, 1150) },
            { unit: "A", name: "油泵电流", max: 140, min: 110, val: randomInt(110, 140) },
            { unit: "A", name: "左刮板电流", max: 140, min: 110, val: randomInt(110, 140) },
            { unit: "A", name: "右刮板电流", max: 140, min: 110, val: randomInt(110, 140) },
            { unit: "A", name: "左装载电流", max: 140, min: 110, val: randomInt(110, 140) },
            { unit: "A", name: "右装载电流", max: 140, min: 110, val: randomInt(110, 140) },
        ]
    }

    const [rRunP, setRRunP] = useState([
        { name: "截割工序", status: 0 },
        { name: "左帮锚杆机工序", status: 0 },
        { name: "左顶1锚杆机工序", status: 0 },
        { name: "左顶2锚杆机工序", status: 1 },
        { name: "右帮锚杆机工序", status: 1 },
        { name: "右顶1锚杆机工序", status: 0 },
        { name: "右顶2锚杆机工序", status: 1 },
    ])
    const [errorInfo, setErrorInfo] = useState([
        "液压油位低；",
        "液压温度高；",
        "泵站压力超限；",
        "瓦斯超限；",
        "刮板机扭矩超限；",
        "星轮扭矩超限；",
        "截割扭矩超限；",
        "减速机润滑压力低；",
        "减速机润滑油温高；",
        "截割电机温度高；",
        "泵站电机温度高；",
        "顶支撑压力超限；",
        "截割滚筒温度超限；",
        "锚杆钻机压力超限；",
        "喷雾压力超限；",
        "截割臂振动超限；",
        "液压油位低报警；",
        "液压温度高报警；",
        "减速机润滑压力低报警；",
        "减速机润滑油温高；",
        "瓦斯超限；",
        "刮板机扭矩大；",
        "星轮扭矩大",
    ])
    useEffect(() => {
        console.log('interval')
        const timer = setInterval(() => {
            setGagueList(randomGagueList())
        }, 500)

        return () => {
            clearInterval(timer)
        }
    }, [null])
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
                    <RunningParams list={runningP} />
                </div>
            </div>
            <div className={Style.middle}>
                <canvas style={{ width: "100%", height: '50%' }}></canvas>
                <GaugeList list={gagueList} />
            </div>
            <div className={Style.rightContent}>
                <DevicePreview />
                <RightInfos list={rRunP} errorList={errorInfo} />
            </div>
        </section>
    )
}
