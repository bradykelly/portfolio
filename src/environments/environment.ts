import {NgxLoggerLevel} from "ngx-logger";

export const environment = {
    gitHubUser: "bradykelly",
    jrUrlTemplate: `https://registry.jsonresume.org/{user}?theme={theme}`,
    defaultTheme: "elegant",
    logger: {
        level: NgxLoggerLevel.TRACE,
        serverLevel: NgxLoggerLevel.WARN,
        // TODO: Level up and make this TLS
        apiUrl: "http://localhost:5126"
    }
}
