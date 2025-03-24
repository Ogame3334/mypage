import { Tag } from "@prisma/client";

interface OutputWorkDtoOpened {
    id: number;
    nanoId: string;
    title: string;
    isPublic: boolean;
    blobs: string[];
    detail: string;
    tags: {tag: Tag}[];
    createdAt: Date;
    updatedAt: Date;
}

export type {OutputWorkDtoOpened}
