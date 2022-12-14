import { ModalButtonType } from './modal-button-type';
import { ModalThemeButton } from './modal-theme-button';
import { ModalThemes } from './modal-themes';

export class ModalButton {

    public label: string;
    public type?: ModalButtonType = ModalButtonType.SUCCESS;
    public closeAfterButtonClick?: boolean = true;
    public disabled?: boolean;

    public theme?: ModalThemeButton = ModalThemes.default.buttons['ok'];

    public constructor(button: ModalButton) {

        Object.assign(this, button);

    }

}
