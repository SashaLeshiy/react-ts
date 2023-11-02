import { RouteProps } from "react-router-dom"
import { HomeAsync } from '../Home/Home.async'
import { AboutAsync } from "../About/About.async"

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
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
]