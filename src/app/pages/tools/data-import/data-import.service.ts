import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../../constants/api-url';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataImportService {

  constructor(private httpClient: HttpClient) { }


  getImportDataFiles(text: string, srcId: number | string, strtDate: string, endDate: string) {
    const url = `${environment.backendUrl}${API_URL.BILLING_SEARCH}?searchText=${text}&sourceTypeId=${srcId}&billingStartDate=${strtDate}&billingEndDate=${endDate}`;
    return this.httpClient.get(url);
  }

  getSourceTypes() {
    return this.httpClient.get(`${environment.backendUrl}${API_URL.BILLING_SRC_TYPE}`)
  }

  getViewLogsData(fileId: string, sourceId: string, periodId: string) {
    return this.httpClient.get(`${environment.backendUrl}${API_URL.VIEW_LOGS}?fileid=${fileId}&sourceid=${sourceId}&periodid=${periodId}`);
  }
}
