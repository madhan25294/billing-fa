import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/constants/api-url';
import { environment } from '../../../environments/environment';
import { FileStatusTypes, ImportFilesDetails, SourceTypes,FilterObj } from './tools.model';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private httpClient: HttpClient) { }

  public getSourceTypes() {
    return this.httpClient.get<Array<SourceTypes>>(`${environment.backendUrl}${API_URL.SOURCE_TYPE}`)
  }
  public getImportFileStatuses() {
    return this.httpClient.get<Array<FileStatusTypes>>(`${environment.backendUrl}${API_URL.GET_IMPORT_FILE_STATUSES}`)
  }
  public getImportFileDetails({fileCurrentStatusId,pageSize, pageNumber, sortColumnId}:FilterObj) {
    return this.httpClient.get<Array<ImportFilesDetails>>(`${environment.backendUrl}${API_URL.GET_IMPORT_FILES_DETAILS}` + '?' +
      'fileCurrentStatusId=' + fileCurrentStatusId + '&pageSize=' + pageSize + '&pageNumber=' + pageNumber + '&sortColumnId=' + sortColumnId)
  }

}
