import { Outlet } from 'react-router-dom'
import Style from './Style.module.less'

const Layout = () => {
    return (
        <div className={Style.cj}>
            <header></header>
            <Outlet />
            <footer></footer>
        </div>
    )

}

export default Layout