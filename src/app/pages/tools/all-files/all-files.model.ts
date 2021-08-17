// export class AllGetFiles {
//     "data": GetFiles;

// }
export class GetFiles {
    "id": number;
    "fileName": string | null;
    "source": string | null;
    "sourceId": number;
    "periodId": number;
    "receivedFileStatus": boolean;
    "validateFileStatus": boolean;
    "processedFileStatus": boolean;
    "receivedFileDate": string | null;
    "validateFileDate": string | null;
    "processedFileDate": string | null;
    "fileProcessStatus": number;
    "fileProcessStatusDesc": string | null;
    "receivedUserName": string | null;
    "processedUserName": string | null;
    "validatedUserName": string | null;
}