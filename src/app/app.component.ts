import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CvFrameComponent} from "./cv-frame/cv-frame.component";
import {ThemeService} from "./theme.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {LoggingTestComponent} from "./logging-test/logging-test.component";

/**
 * The ISO 216 standard defines the A4 paper size, and its dimensions are 210 millimeters by 297 millimeters.
 * This gives an aspect ratio of 1:√2 which is equivalent to  1:1.4142
 */

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CvFrameComponent, FormsModule, NgForOf, LoggingTestComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{

    selectedTheme = ""
    themeNames: string[] = []

    constructor(private themeService: ThemeService) {
    }

    ngAfterViewInit(): void {
        this.themeNames = this.themeService.getPackageNames()
    }
}
