import { Component } from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-logging-test',
  standalone: true,
  imports: [],
  templateUrl: './logging-test.component.html',
  styleUrl: './logging-test.component.css'
})
export class LoggingTestComponent {

    constructor(private logSvc: LoggingService) {
    }

    public showTrace(): void {
        this.logSvc.logger.trace('TRACE level');
    }

    public showDebug(): void {
        this.logSvc.logger.debug('DEBUG level');
    }

    public showInfo(): void {
        this.logSvc.logger.info('INFO level');
    }

    public showWarn(): void {
        this.logSvc.logger.warn('WARN level');
    }

    public showError(): void {
        this.logSvc.logger.error('ERROR level');
    }

    public showFatal(): void {
        this.logSvc.logger.fatal('FATAL level');
    }
}
