import { Component } from '@angular/core';
import { ModalService } from '../../projects/modal/src/lib/modal.service';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    public constructor(private readonly modalService: ModalService) {

        const instance = modalService.open({

            title: 'one',
            componentType: OneComponent

        });


        const instance2 = modalService.open({

            title: 'two',
            componentType: TwoComponent

        });

        instance.events$.subscribe(event => {

            console.log(event);

        });

        instance2.clicks$.subscribe(event => {

            console.log(event);

        });

        instance.config.rightButtons[1].disabled = true;
        instance2.config.rightButtons[1].disabled = true;

    }

}
