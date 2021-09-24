import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/constants/api-url';
import { environment } from '../../../environments/environment';
import { GetSourceTypes } from './tools.model';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private httpClient: HttpClient) { }

  public getSourceTypes() {
    return this.httpClient.get<Array<GetSourceTypes>>(`${environment.backendUrl}${API_URL.SOURCE_TYPE}`)
  }

}
