import { ERRORS_VALIDATIONS } from "@data/constants/errors/errors-validations.const";
import { IMAGES_ROUTES } from "@data/constants/routes/images.routes";
import { ENUM_VALIDATION_OPTIONS } from "@data/enum";
import { IField } from "@data/interfaces";
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { ValidationsService } from "@shared/services/validations/validations.service";

export const CONST_LOGIN_PAGE: {
    FORM: {
        email: IField;
        password: IField;
    };
    ICONS: any[];
    STYLE_BACKGROUND: any;
    LOGO: any;
} = {
    FORM: {
        email: {
            value: '',
            error: ERRORS_VALIDATIONS.EMAIL_REQUIERED_FIELD,
            isValid() {
                const validationService = new ValidationsService();
                const validateEmail = validationService.validateField(this.value, ENUM_VALIDATION_OPTIONS.EMAIL);
                this.error = validateEmail.message;
                return validateEmail.isValid;
            }
        },
        password: {
            value: '',
            error: ERRORS_VALIDATIONS.PASSWORD_REQUIRED_FIELD,
            isValid() {
                const validationService = new ValidationsService();
                const validatePassword = validationService.validateField(this.value, ENUM_VALIDATION_OPTIONS.PASSWORD);
                this.error = validatePassword.message;
                return validatePassword.isValid;
            }
        }
    },
    ICONS: [
        faFacebookSquare,
        faTwitterSquare,
        faInstagramSquare
    ],
    STYLE_BACKGROUND: {
        backgroundImage: `url(${IMAGES_ROUTES.BACKGROUD_LOGIN})`
    },
    LOGO: IMAGES_ROUTES.LOGO
};