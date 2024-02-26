import {NgxLoggerLevel} from "ngx-logger";


export const environment = {
    logger: {
        level: NgxLoggerLevel.TRACE,
        serverLevel: NgxLoggerLevel.WARN,
        // TODO: Level up and make this TLS
        apiUrl: "http://localhost:5126"
    }
}
