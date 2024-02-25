import {AfterViewInit, Component, ElementRef, viewChild, ViewChild} from '@angular/core';

@Component({
    selector: 'cv-frame',
    standalone: true,
    imports: [],
    templateUrl: './cv-frame.component.html',
    styleUrl: './cv-frame.component.css'
})
export class CvFrameComponent implements AfterViewInit {

    @ViewChild(`cvframe`) cvframeRef!: ElementRef;
    ngAfterViewInit() {
        // TODO Fix CORS errors and missing `window` property.
        // if (this.cvframeRef) {
        //     const frame: HTMLIFrameElement = this.cvframeRef.nativeElement;
        //     frame.onload = (): void => {
        //         if (frame.contentWindow) {
        //             frame.style.height = frame.contentWindow.document.body.scrollHeight + "px";
        //             frame.style.width = frame.contentWindow.document.body.scrollWidth + "px";
        //         }
        //
        //     }
        // }


    }

}
