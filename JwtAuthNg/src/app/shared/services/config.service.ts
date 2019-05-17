import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IJwtAuthConfig } from '../models';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  private appConfig: IJwtAuthConfig;

  constructor(private http: HttpClient) { }

  loadAppConfig(): Promise<void> {
    return this.http.get<IJwtAuthConfig>('assets/app-config.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  getApiBaseUrl(): string {
    return this.appConfig.apiBaseUrl;
  }
}
