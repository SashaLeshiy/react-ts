type NavigateType = {
    path: string, 
    title: string
}
export enum AppNavigate {
    HOME = 'home',
    ABOUT = 'about',
    LOGIN = 'login'
}

export const NavigatePath: Record<AppNavigate, string> = {
    [AppNavigate.HOME]: '/',
    [AppNavigate.ABOUT]: '/about',
    [AppNavigate.LOGIN]: '/login'
}

export const NavigateConfig: Array<NavigateType> = [
    {
        path: NavigatePath.home,
        title: 'Home'
    },
    {
        path: NavigatePath.about,
        title: 'About'
    },
    {
        path: NavigatePath.login,
        title: 'Login'
    },
]