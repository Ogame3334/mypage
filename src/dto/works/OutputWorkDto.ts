import { BlobObject, MarkdownObject, Tag } from "@prisma/client";

interface OutputWorkDto {
    id: number;
    nanoId: string;
    title: string;
    isPublic: boolean;
    blobs: BlobObject[];
    detail: MarkdownObject;
    tags: {tag: Tag}[];
    createdAt: Date;
    updatedAt: Date;
}

export type {OutputWorkDto}
