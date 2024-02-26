import {Injectable} from "@angular/core";
import {NgxNLoggerService} from "ngx-n-logger";

@Injectable({
    providedIn: 'root'
})
export class LoggingService {

    constructor(public logger: NgxNLoggerService) {
    }

    info = {
        author: {
            email: 'nasr2ldin@gmail.com',
            website: 'http://nasraldin.com',
            twitter: 'https://twitter.com/nasraldin',
        },
        git: 'https://github.com/nasraldin/ngx-n-logger',
        npm: 'https://www.npmjs.com/package/ngx-n-logger'
    }

    logIt() {
        this.logger.clear();
        this.logger.header('ngx-n-logger is running! - faster logging 😎');
        this.logger.log(this.info);
        this.logger.debug('log debug', this.info);
        this.logger.info('log info', this.info);
        this.logger.warn('log warn', this.info);
        this.logger.error('log error', this.info);
        this.logger.fatal('log fatal', this.info);
        this.logger.trace('log trace', this.info);
        this.logger.table('log trace', this.info);
    }
}
