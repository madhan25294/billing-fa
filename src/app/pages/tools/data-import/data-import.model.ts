export class GetSourceTypes {
  "transSourceId": number | null;
  "sourceDesc": string | null
}

export class GetImportDataSearchResults {
  "id": number | null;
  "fileName": string | null;
  "sourceId": number | null;
  "periodId": string | null;
  "receivedFileDate": string | null;
  "validateFileDate": string | null;
  "processedFileDate": string | null;
  "validatedUserName": string | null;
}

export class GetViewLogsData {
  "statusCode": string | null;
  "statusMessage": string | null;
  "transactionSourceID": number | null;
  "sourceDesc": string | null;
  "importedDatetime": string | number | null;
  "periodID": number | null;
  "fromDate": string | null;
  "toDate": string | null;
  "fullPathTransFileName": string | null;
  "rowsOnFile": number | null;
  "rowsWithError": number | null;
  "rowsImported": number | null;
  "totalDollars": number | null;
  "quantity": number | null;
  "logs": Array<any> | null;
}
