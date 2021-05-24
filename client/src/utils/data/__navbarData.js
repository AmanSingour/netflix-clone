import { _routes } from "./__routesData";

export const _navData = [
    {
        label: 'Home',
        title: 'Netflix Clone',
        path: _routes.HOME,
    },
    {
        label: 'Favorite',
        title: 'Favorite Movies',
        path: _routes.FAVMOVIES,
    },
    {
        label: 'Watched',
        title: 'Watched Movies',
        path: _routes.WATCHED,
    },
    {
        label: 'Profile',
        tabs: [
            {
                label: 'My Profile',
                title: 'Profile',
                path: _routes.PROFILE,
            },
            {
                label: 'Logout',
                title: 'Logout',
                path: _routes.LOGOUT,
            },
        ]
    }
]

export default _navData