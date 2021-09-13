import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../../constants/api-url';
import { environment } from '../../../../environments/environment';
import { GetFiles } from './all-files.model';


@Injectable({
  providedIn: 'root'
})
export class AllFilesService {

  constructor(private httpClient: HttpClient) { }


  public getFiles() {
    return this.httpClient.get<Array<GetFiles>>(environment.backendUrl + API_URL.GET_FILES);
  }

  public updateFileStatus(body: { fileID: number, userAction: string, userName: string }) {
    return this.httpClient.post<string>(`${environment.backendUrl + API_URL.UPDATE_FILE_STATUS}`, body);
  }

}
