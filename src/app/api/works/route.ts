import { InputDtoWorksToCreate } from "@/dto/works/InputDtoWorksToCreate";
import { prisma } from "@/utils/PrismaClient";
import { Work } from "@prisma/client";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export async function GET(){
    const works = await prisma.work.findMany() as Work[];

    return NextResponse.json({works: works});
}

export async function POST(req: Request){
    const inputDto = await req.json() as InputDtoWorksToCreate;
    console.log(inputDto);

    const work = await prisma.work.create({
        data: {
            title: inputDto.title,
            isPublic: inputDto.isPublic,
            nanoId: nanoid(),
            blobs: {
                createMany: {
                    data: inputDto.blobs
                }
            },
            detail: {
                connect: {id: inputDto.markdownId}
            }
        }
    });

    if(inputDto.tagIds.length > 0){
        await prisma.workTag.createMany({
            data: inputDto.tagIds.map(tagId => ({
                workId: work.id,
                tagId: tagId
            }))
        });
    }
    
    return NextResponse.json({message: "created"}, {status: 200})
}
