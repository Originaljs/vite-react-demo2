import Style from './style.module.less'
import * as echarts from 'echarts'
import { useEffect, useRef, useState } from "react"

const GaugeChart = (props: any) => {
    const el = useRef(null)
    const [chart, setChart] = useState<any>(null)
    const draw = () => {
        chart.setOption({
            graphic: {
                elements: [
                    {
                        type: 'circle', left: 'center', top: 'center', shape: { r: 25 },
                        style: { fill: 'RGBA(11, 35, 65, 1)', shadowColor: "RGBA(29, 96, 152, 1)", shadowBlur: 8, shadowOffsetY: -4 }, z: 1
                    },
                    { type: 'text', z: 2, left: 'center', top: 'center', style: { text: props.val, fill: '#FFF', font: 'normal 14px "Microsoft YaHei", sans-serif' }, },
                    { type: 'text', z: 2, left: 'center', top: '70%', style: { text: props.unit, fill: '#FFF' } },
                    { type: 'text', z: 2, left: 'center', top: '84%', style: { text: props.name, fill: '#FFF' } },
                ]
            },
            series: [
                {
                    type: 'gauge',
                    max: props.max,
                    min: props.min,
                    z: 0,
                    splitNumber: 6,
                    radius: "100%",
                    axisLine: {
                        lineStyle: {
                            width: 2,
                            color: [
                                [1, {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    colorStops: [{
                                        offset: 0, color: 'RGBA(4, 204, 156, 1)' // 0% 处的颜色
                                    }, {
                                        offset: .5, color: 'RGBA(200, 255, 88, 1)' // 100% 处的颜色
                                    }, { offset: 1, color: 'RGBA(245, 23, 1, 1)' }],
                                    global: false // 缺省为 false
                                }],
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        splitNumber: 10,
                        distance: 2,
                    },
                    pointer: {
                        length: '50%',
                        itemStyle: {
                            color: "RGBA(179, 249, 252, 1)"
                        }
                    },
                    splitLine: {
                        length: 5,
                        distance: 2,
                        lineStyle: {
                            width: 3,
                            color: '#ddd',
                            opacity: 1
                        }
                    },
                    axisLabel: {
                        distance: 6,
                        color: '#FFF',
                        formatter(p: any) { return parseInt(p) },
                        fontSize: 10
                    },
                    detail: {
                        show: false
                    },
                    data: [
                        {
                            value: props.val
                        }
                    ]
                }
            ]
        })
    }

    useEffect(() => {
        setChart(echarts.init(el.current!))
        return () => {
            console.log('dis', chart);

            chart?.dispose()
            setChart(null)
        }
    }, [null])

    if (chart) draw()

    return (
        <div ref={el} style={{ width: '143px', height: '143px' }}></div>
    )
}

export const GaugeList = (props: any) => {
    const { list } = props
    return (
        <div className={Style.wrapList}>
            {(list as Array<any>).map((item: any) => (
                <GaugeChart key={item.name} {...item}></GaugeChart>
            ))}
        </div>
    )
}