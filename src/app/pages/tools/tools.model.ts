export class GetImportFiles {
    "id": number;
    "fileName": string | null;
    "invoiceType": string | null;
    "folderId": number;
    "sendMethod": string | null;
    "importType": string | null;
    "fileType": string | null;
    "sourceType": string | null;
    "ownerType": string | null;
    "ownerEmail": string | null;
    "fileProcessStatus": string | null;
    "action1"?: string | null;
    "action2"?: string | null;
}

export class GetSourceTypes {
    "transSourceId": number | null;
    "sourceDesc": string | null
}
