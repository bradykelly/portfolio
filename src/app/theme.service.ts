import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Object, Objects, Package} from "./npm.api/responseTypes";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private apiUrl = `https://registry.npmjs.org/-/v1/search?text=jsonresume-theme`;
    private responseObjects!: Object[];
    packageNames: string[] = [];

    constructor(private client: HttpClient) {
        client.get<Objects>(this.apiUrl)
            .subscribe(data => {
                this.responseObjects = data.objects
            })
    }

    getPackageNames(): string[] {
        let names = this.responseObjects.map(obj => obj.package.name)
        names.sort()
        return names
    }
}
