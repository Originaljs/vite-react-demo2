import Style from './style.module.less'

export const EnvIconList = (props: { list: Array<any> }) => {
    const { list } = props
    return (
        <div className={Style.envIcon}>
            {list.map(item => (
                <div key={item.name} className={Style.iconItem}>
                    <img src={item.icon} alt="" />
                    <div>
                        <p>{item.name}</p>
                        <p>
                            <span className={Style.val}>{item.val}</span>
                            <span className={Style.unit}>{item.unit}</span>
                        </p>
                    </div>

                </div>
            ))
            }
        </div >
    )
}