export class ImportFileDetails {
    "fileId": number;
    "fileName": string | null;
    "sourceId": number;
    "fileType": string | null;
    "sourceDescription": string | null;
    "fileCurrentStatusId": number;
    "fileCurrentStatus": string | null;
    "forwardActionId": number;
    "forwardAction": string | null;
    "backwardAction": string | null;
    "backwardActionId": number;
}
export class ImportFilesDetails {
    count: number;
    rows: Array<ImportFileDetails>;
}
export class FilterObj {
    "fileCurrentStatusId": number;
    "pageSize": number;
    "pageNumber": number;
    "sortColumnId": number;
    "sortdirection"?: string | null;
    "userName"?: string | null;
}

export class SourceTypes {
    "transSourceId": number | null;
    "sourceDesc": string | null;
}

export class FileStatusTypes {
    "statusId": number | null;
    "statusDescription": string | null;
}
