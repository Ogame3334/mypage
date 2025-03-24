interface InputDtoWorksToCreate {
    title: string;
    blobs: {
        filePath: string;
        mimeType: string;
    }[];
    isPublic: boolean;
    tagIds: number[];
    markdownId: number;
}

export type {InputDtoWorksToCreate}
