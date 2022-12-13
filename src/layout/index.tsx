import { Outlet } from 'react-router-dom'
import Style from './Style.module.less'

const Layout = () => {
    return (
        <div className={Style.cj}>
            <header className={Style.header}></header>
            <Outlet />
            <footer className={Style.footer}></footer>
        </div>
    )

}

export default Layout