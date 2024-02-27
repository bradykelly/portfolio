import {Pipe, PipeTransform} from "@angular/core";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {environment} from "../environments/environment";

@Pipe({
    standalone: true,
    name: 'jsonResumeUrl'
})
export class JrUrlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(themeName: string): SafeResourceUrl {
        const url = environment.jrUrlTemplate
            .replace("{user}", environment.gitHubUser)
            .replace("{theme}", themeName)
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
