export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'movies',
            title: 'Movies',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'add_movie',
                    title: 'Add movie',
                    type: 'item',
                    url: '/add_movie',
                    icon: 'feather icon-home',
                },
                {
                    id: 'all_movies',
                    title: 'List movies',
                    type: 'item',
                    url: '/all_movies',
                    icon: 'feather icon-home',
                },
                {
                    id: 'settings',
                    title: 'Settings',
                    type: 'item',
                    url: '/settings',
                    icon: 'feather icon-home',
                }
            ]
        }
    ]
}