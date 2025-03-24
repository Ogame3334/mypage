import { BlobObject, MarkdownObject, Tag } from "@prisma/client";

interface OutputWorkDtoFull {
    id: number;
    nanoId: string;
    title: string;
    isPublic: boolean;
    blobs: BlobObject[];
    detail: MarkdownObject;
    detailContext: string;
    tags: {tag: Tag}[];
    createdAt: Date;
    updatedAt: Date;
}

export type {OutputWorkDtoFull}
