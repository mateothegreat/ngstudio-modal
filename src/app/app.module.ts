import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ModalModule } from '../../projects/modal/src/lib/modal.module';

@NgModule({

    declarations: [

        AppComponent,
        OneComponent,
        TwoComponent

    ],

    imports: [

        BrowserModule,
        ModalModule

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
