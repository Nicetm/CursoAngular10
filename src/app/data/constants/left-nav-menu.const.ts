import { ILeftNavMenu } from '@data/interfaces';
import { faUser, faCog, faClipboard, faHeart, faBookmark, faChartLine, faCogs, faComment, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export const LEFT_NAV_MENUS: ILeftNavMenu[] = [
    {
        title: 'Mi Cuenta',
        links: [
            {
                icon: faUser,
                name: 'Perfil'
            },
            {
                icon: faCog,
                name: 'Mi Cuenta'
            },
            {
                icon: faClipboard,
                name: 'Historial'
            },
            {
                icon: faComment,
                name: 'Comentarios'
            },
        ]
    },
    {
        title: 'Servicios',
        links: [
            {
                icon: faYoutube,
                name: 'Videos'
            },
            {
                icon: faHeart,
                name: 'Favoritos'
            },
            {
                icon: faBookmark,
                name: 'Articulos'
            },
            {
                icon: faChartLine,
                name: 'Estadisticas'
            },
            {
                icon: faCogs,
                name: 'Settings'
            },
        ]
    }
]