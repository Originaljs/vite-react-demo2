import Style from './style.module.less'
import { InfoTitle } from '../../InfoTitle'

import hBg from '../../../assets/imgs/标题框.png'
import { useRef, useEffect } from 'react'

export const RightInfos = (props: any) => {

    const { list, errorList } = props

    const errorListEl = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tisk = () => {
            requestAnimationFrame(tisk)
            errorListEl.current!.scrollTop++
            if (errorListEl.current!.scrollTop >= (errorListEl.current!.scrollHeight - errorListEl.current!.clientHeight) / 2 + errorListEl.current!.clientHeight / 2)
                errorListEl.current!.scrollTop = 0
        }

        tisk()
    }, [errorListEl])
    return (
        <div className={Style.rightInfo}>
            <div>
                <InfoTitle bg={hBg} width={211} title='运行状态' />
                <div className={Style.listItem}>
                    {(list as Array<any>).map((item: any) => (
                        <div key={item.name} className={Style.runparamsitem}>
                            <span>{item.name}</span>
                            <div>
                                <span className={Style.statusname + ` ${item.status ? Style.green : Style.blue}`}>待机</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <InfoTitle bg={hBg} width={211} title='故障信息' />
                <div className={Style.errorinfolist} ref={errorListEl}>
                    {(errorList as Array<any>).map((item: any, index: number) => (
                        <div key={item + index} className={Style.errorInfo}> {item}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}