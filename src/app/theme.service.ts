import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Object, Objects} from "./npm.api/responseTypes";
import {lastValueFrom} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private apiUrl = `https://registry.npmjs.org/-/v1/search?text=jsonresume-theme`;
    private responseObjects!: Object[];

    constructor(private client: HttpClient) { }

    async getPackageNames(): Promise<string[]> {
        let objects = await lastValueFrom(this.client.get<Objects>(this.apiUrl))
        return objects.objects.map(obj => obj.package.name.replace("jsonresume-theme-", "")).sort()
    }
}
