import {Component, Input} from '@angular/core';
import {environment} from "../../environments/environment";
import {JrUrlPipe} from "../jr-url.pipe";

@Component({
    selector: 'cv-frame',
    standalone: true,
    imports: [
        JrUrlPipe
    ],
    templateUrl: './cv-frame.component.html',
    styleUrl: './cv-frame.component.css'
})
export class CvFrameComponent {

    @Input() selectedTheme: string = ""

    private urlFn = (user: string, theme: string) => environment.jrUrlTemplate

    cvUrl = this.urlFn(environment.gitHubUser, this.selectedTheme)
}
