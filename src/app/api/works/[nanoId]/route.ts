import { OutputWorkDtoFull } from "@/dto/works/OutputWorkDtoFull";
import { OutputWorkDtoOpened } from "@/dto/works/OutputWorkDtoOpened";
import { prisma } from "@/utils/PrismaClient";
import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: {params: Promise<{nanoId: string}>}){
    const url = new URL(req.url);
    const isFull = url.searchParams.get("full") != null ? true : false;
    const {nanoId} = await params;
    
    const work = await prisma.work.findFirst({
        where: {
            nanoId: nanoId
        },
        include: {
            blobs: true,
            detail: true,
            tags: {
                include: {
                    tag: true
                }
            },
        }
    });

    if(!work) return NextResponse.json({}, {status: 404});

    console.log(`request : /api/contents/${work.detail?.filePath}`);

    const detailText = await fetch(`${process.env.BASE_URL}/api/contents/${work.detail?.filePath}`)
                            .then(async response => await response.arrayBuffer()
                                .then(ab => Buffer.from(ab).toString())
                            );

                            console.log("work: ", work);

    if(isFull){
        const outDtoWorkFull: OutputWorkDtoFull = {
            ...work,
            detail: work.detail!,
            detailContext: detailText
        };
    
        return NextResponse.json({...outDtoWorkFull});
    }
    else{
        const outDtoWork: OutputWorkDtoOpened = {
            id: work.id,
            nanoId: work.nanoId,
            title: work.title,
            isPublic: work.isPublic,
            blobs: work.blobs.map(blob => `/api/contents/${blob.filePath}`),
            detail: detailText,
            tags: [],
            createdAt: work.createdAt,
            updatedAt: work.updatedAt
        }
    
        return NextResponse.json({...outDtoWork});
    }
}
