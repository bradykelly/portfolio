import {Component, Input} from '@angular/core';

@Component({
    selector: 'cv-frame',
    standalone: true,
    imports: [],
    templateUrl: './cv-frame.component.html',
    styleUrl: './cv-frame.component.css'
})
export class CvFrameComponent {

    private baseUrl = "https://registry.jsonresume.org/bradykelly"
    @Input() currentTheme: string = ""

    getCvUrl(): string {
        if (this.currentTheme) {
            return this.baseUrl + "?" + this.currentTheme
        }
        return this.baseUrl
    }
}
