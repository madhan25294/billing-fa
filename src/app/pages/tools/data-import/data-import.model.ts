export class GetSourceTypes {
  "transSourceId": number;
  "sourceDesc": string
}

export class GetImportDataSearchResults {
  "id": number;
  "fileName": string;
  "sourceId": number;
  "periodId": string;
  "receivedFileDate": string;
  "validateFileDate": string;
  "processedFileDate": string;
  "validatedUserName": string;
}

export class GetViewLogsData {
  "statusCode": string | null;
  "statusMessage": string | null;
  "transactionSourceID": number;
  "sourceDesc": string | null;
  "importedDatetime": string | number;
  "periodID": number | null;
  "fromDate": string | null;
  "toDate": string | null;
  "fullPathTransFileName": string | null;
  "rowsOnFile": number | null;
  "rowsWithError": number | null;
  "rowsImported": number | null;
  "totalDollars": number | null;
  "quantity": number | null;
  "logs": Array<any>;
}
