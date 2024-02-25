import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CvFrameComponent} from "./cv-frame/cv-frame.component";
import {ThemeService} from "./theme.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

/**
 * The ISO 216 standard defines the A4 paper size, and its dimensions are 210 millimeters by 297 millimeters.
 * This gives an aspect ratio of 1:√2 which is equivalent to  1:1.4142
 */

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CvFrameComponent, FormsModule, NgForOf],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    selectedTheme = ""
    themeNames: string[] = []

    constructor(private themeService: ThemeService) {
        this.themeNames = themeService.getPackageNames()
    }
}
