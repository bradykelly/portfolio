import {Component, Input} from '@angular/core';
import {SafeUrlPipe} from "../safe-url.pipe";

@Component({
    selector: 'cv-frame',
    standalone: true,
    imports: [
        SafeUrlPipe
    ],
    templateUrl: './cv-frame.component.html',
    styleUrl: './cv-frame.component.css'
})
export class CvFrameComponent {

    private baseUrl = "https://registry.jsonresume.org/bradykelly"
    @Input() currentTheme: string = ""

    getCvUrl(): string {
        if (this.currentTheme.length > 0) {
            return this.baseUrl + "?" + this.currentTheme
        }
        return this.baseUrl
    }
}
