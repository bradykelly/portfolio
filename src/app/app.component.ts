import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
export class AppComponent implements OnInit{

    themeNames: string[] = []
    selectedTheme = ""

    constructor(private themeService: ThemeService) {
    }

    ngOnInit(): void {
        this,this.getThemes().then(names => this.themeNames = names)
    }

    private async getThemes(): Promise<string[]> {
        return  await this.themeService.getPackageNames()
    }
}
