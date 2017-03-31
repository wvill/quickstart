import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { ModalModule, OverlayRenderer, DOMOverlayRenderer, Overlay } from 'angular2-modal'
import { Modal, BootstrapModalModule } from 'angular2-modal/plugins/bootstrap'

import { HOME_COMPONENTS } from './home.components'

const MODAL_PROVIDERS = [
    Modal,
    Overlay,
    { provide: OverlayRenderer, useClass: DOMOverlayRenderer }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ModalModule.forRoot(),
        BootstrapModalModule,
    ],
    declarations: [ HOME_COMPONENTS ],
    exports: [ HOME_COMPONENTS ],
    entryComponents: [],
    providers: [ MODAL_PROVIDERS ]
})

export class HomesModule {}