import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactPayload {
    name: string;
    email: string;
    phone: string;
    company: string;
    details: string;
}

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private workerUrl = 'https://contact-form-arq-site.arqtechsolns.workers.dev';

    constructor(private http: HttpClient) { }

    send(payload: ContactPayload): Observable<any> {
        return this.http.post(this.workerUrl, payload);
    }
}