import Style from './style.module.less'
import * as echart from 'echarts'
import 'echarts-liquidfill'
import { useRef, useEffect } from 'react'
import yw from '../../../assets/imgs/油温.png'
function draw(el: HTMLElement, val: number, unit: string, percentage: boolean) {
    const chart = echart.init(el)
    chart.setOption({
        series: [{
            type: 'liquidFill',
            color: [{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'RGBA(52, 149, 217, 1)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'RGBA(25, 97, 147, 1)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }],
            data: [val / 100],
            radius: '70%',
            outline: {
                show: false
            },
            backgroundStyle: {
                borderColor: 'transparent',
                borderWidth: 0,
                color: "transparent"
            },
            label: {
                position: ['50%', '50%'],
                fontWeight: "normal",
                formatter: () => `{val|${val + (percentage ? '%' : '')}}\n{unit|${unit}}`,
                fontSize: 20,
                color: '#FFFFFF',
                rich: {
                    val: {},
                    unit: {
                        color: "rgba(255,255,255,.5)",
                        lineHeight: 15,
                        fontSize: 14
                    }
                }
            }
        }]
    })

}

const LiquidfillChart = (props: any) => {
    const { chlidren, val, unit, percentage } = props
    console.log(val,unit)
    const el = useRef(null)
    useEffect(() => {
        draw(el.current!, val, unit ?? "", percentage ?? false)
    }, [])
    return (
        <div ref={el} style={{ width: '87px', height: '96px', background: `url(${yw})` }}>{chlidren}</div>
    )
}

export const RunningParams = (props: any) => {
    const { list } = props
    return (
        <div className={Style.chartBox}>
            {(list as Array<any>).map((item: any) => (
                <div key={item.name}>
                    <LiquidfillChart {...item} />
                    <p className={Style.val}>{item.name}</p>
                </div>
            ))}
        </div>
    )
}