export const ROUTH_PATH = {
    AUTH: {
        DEFAULT: 'auth',
        LOGIN: 'login'
    },
    PANEL: {
        DEFAUL: 'panel',
        USER: 'user'
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
};

export const INTERNAL_ROUTES = {
    /**
     * AUTHENTICATION
     */
    AUTH_LOGIN: `/${INTERNAL_PATH.AUTH_DEFAULT}/${INTERNAL_PATH.AUTH_LOGIN}`,
    /**
     * PANEL
     */
    PANEL_USER_LIST: `/${INTERNAL_PATH.PANEL_DEFAULT}/${INTERNAL_PATH.PANEL_USER_LIST}`
}