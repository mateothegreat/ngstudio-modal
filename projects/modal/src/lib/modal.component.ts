import { Component, ViewChild, ViewContainerRef, AfterViewInit, HostListener } from '@angular/core';
import { ModalService } from './modal.service';
import { ModalConfig } from './modal-config';
import { DynamicComponentFactoryService } from '@ngstudio/dynamic-component-factory';
import { ModalInstance } from './modal-instance';
import { ModalEvent } from './modal-event';
import { ModalButton } from './modal-button';

@Component({

    selector: 'lib-modal',
    templateUrl: './modal.component.html',
    styleUrls: [ './modal.component.scss' ]

})
export class ModalComponent implements AfterViewInit {

    @ViewChild('center', { read: ViewContainerRef }) private readonly viewContainerRef: ViewContainerRef;

    public config: ModalConfig;
    public instance: ModalInstance;

    public constructor(private readonly dynamicComponentFactoryService: DynamicComponentFactoryService,
                       public readonly modalService: ModalService) {

    }

    public ngAfterViewInit() {

        this.dynamicComponentFactoryService.createInContainer('content', this.viewContainerRef, this.config.componentType);

    }

    @HostListener('document:keydown.escape', [ '$event' ])
    public onEscapeHandler() {

        if (this.config.escapable) {

            this.instance.events$.next(ModalEvent.ESCAPED);

            this.modalService.closeLast();

        }

    }

    public onButtonClick(button: ModalButton): void {

        this.instance.clicks$.next(button.type);

        if (button.closeAfterButtonClick) {

            this.instance.close();

        }

    }

}
