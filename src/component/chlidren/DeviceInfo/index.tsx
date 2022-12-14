import Style from './style.module.less'

export const DeviceInfo = (props: any) => {
    const { list } = props
    return (
        <div className={Style.deviceBox}>{(list as Array<any>).map((item: any) => (
            <div className={Style.deviceItem} key={item.name}>
                <p className={Style.name} style={{ background: `url(${item.bg})` }}>{item.name}</p>
                <p className={Style.textbox}>
                    <span >{item.val}</span>
                    <span className={Style.unit}>{item.unit}</span>
                </p>
                <img src={item.icon} alt="" className={Style.icon} />
            </div>
        ))}</div>
    )
}