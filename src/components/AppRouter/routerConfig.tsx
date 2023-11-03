import { RouteProps } from "react-router-dom"
import { HomeAsync } from '../../pages/Home/Home.async'
import { AboutAsync } from '../../pages/About/About.async'
import { LoginAsync } from '../../pages/Login/Login.async'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    LOGIN = 'login'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.LOGIN]: '/login'
}

export const RouteConfig: Array<RouteProps> = [
    {
        path: RoutePath.main,
        element: <HomeAsync />
    },
    {
        path: RoutePath.about,
        element: <AboutAsync />
    },
    {
        path: RoutePath.login,
        element: <LoginAsync />
    },
]