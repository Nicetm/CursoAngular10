export const ROUTH_PATH = {
    AUTH: {
        DEFAULT: 'auth',
        LOGIN: 'login'
    },
    PANEL: {
        DEFAUL: 'panel',
        USER: 'user'
    },
    SERVER: {
        E_401: '401'
    }
};

export const INTERNAL_PATH = {
    /**
     * AUTHENTICATION
     */
    AUTH_DEFAULT: `${ROUTH_PATH.AUTH.DEFAULT}`,
    AUTH_LOGIN: `${ROUTH_PATH.AUTH.LOGIN}`,
    /**
     * PANEL
     */
    PANEL_DEFAULT: `${ROUTH_PATH.PANEL.DEFAUL}`,
    PANEL_USER_LIST: `${ROUTH_PATH.PANEL.USER}`,
    /**
     * SERVER
     */
    SERVER_E_401: `${ROUTH_PATH.SERVER.E_401}`
};

export const INTERNAL_ROUTES = {
    /**
     * AUTHENTICATION
     */
    AUTH_LOGIN: `/${INTERNAL_PATH.AUTH_DEFAULT}/${INTERNAL_PATH.AUTH_LOGIN}`,
    /**
     * PANEL
     */
    PANEL_USER_LIST: `/${INTERNAL_PATH.PANEL_DEFAULT}/${INTERNAL_PATH.PANEL_USER_LIST}`,
    /**
     * SERVER
     */
    SERVER_E_401: `/${INTERNAL_PATH.SERVER_E_401}`
}