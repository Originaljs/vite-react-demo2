import Style from './style.module.less'
import backg from '../../assets/imgs/标题框1.png'
export const InfoTitle = (props: any) => {
    const { title, width, bg } = props
    return (
        <div className={Style.infotitle} style={{ width: `${width || 401}px`, background: `url(${bg || backg})` }}>{title}</div>
    )
}