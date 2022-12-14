import Style from './style.module.less'
import { InfoTitle } from '../../InfoTitle'
import area from '../../../assets/imgs/形状 2015.png'
import top from '../../../assets/imgs/top.png'
import hBg from '../../../assets/imgs/标题框.png'
import left from '../../../assets/imgs/side.png'
import right from '../../../assets/imgs/positive.png'
export const DevicePreview = () => {
    return (
        <div>
            <div className={Style.toppreviewwrap}>
                <div className={Style.areatip}>
                    <div>
                        <p>机身前进角度：<span className={Style.val}>254°</span></p>
                        <p>机身伸缩角度：<span className={Style.val}>254°</span></p>
                    </div>
                    <div className={Style.areatipwrap}>
                        <div className={Style.areatipitem}>禁停区域</div>
                        <div className={Style.areatipitem}>危险区域</div>
                    </div>
                </div>
                <div className={Style.toppreviewarea}>
                    <div className={Style.coordinateinfo}>
                        <p>x：<span className={Style.val}>254</span></p>
                        <p>y：<span className={Style.val}>254</span></p>
                        <p>z：<span className={Style.val}>254</span></p>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src={area} alt="" />
                        <img src={top} className={Style.area2} alt="" />
                    </div>
                </div>
            </div>
            <div className={Style.sidepreviewwrap}>
                <div className={Style.leftpreviewwrap}>
                    <InfoTitle width={211} bg={hBg} title='掘进左视图' />
                    <img src={left} alt={left} style={{ width: '261px' }} />
                    <div className={Style.horndegree}>
                        <p>滚动角：<span className={Style.yval}>254°</span></p>
                    </div>
                </div>
                <div className={Style.rightpreviewwrap}>
                    <InfoTitle width={211} bg={hBg} title='掘进俯视图' />
                    <img src={right} alt={right} style={{ height: '84px' }} />
                    <div className={Style.horndegree}>
                        <p>滚动角：<span className={Style.yval}>254°</span></p>
                    </div>
                </div>
            </div>
            <div className={Style.btnList}>
                <div className={Style.btnItem}>
                    <span className={Style.btnText}>惯导校准</span>
                </div>
                <div className={Style.btnItem}>
                    <span className={Style.btnText}>全站仪校准</span>
                </div>
                <div className={Style.btnItem}>
                    <span className={Style.btnText}>全站仪跟踪</span>
                </div>
            </div>
        </div>
    )
}