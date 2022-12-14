import { ModalThemeButton } from './modal-theme-button';

export class ModalTheme {

    public background: string = '#eee';
    public buttons: {

        ok: ModalThemeButton,
        delete: ModalThemeButton,
        cancel: ModalThemeButton

    } = {

        ok: {

            background: '#499b51',
            color: '#fff'

        },

        delete: {

            background: '#ec4c5e',
            color: '#fff'

        },

        cancel: {

            background: '#aaa',
            color: '#000'

        }

    };

}
