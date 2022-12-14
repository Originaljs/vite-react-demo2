import Style from './style.module.less'
import { InfoTitle } from '../../InfoTitle'

import hBg from '../../../assets/imgs/标题框.png'

export const RightInfos = (props: any) => {

    const { list, errorList } = props
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
            </div>
        </div>
    )
}