import { prisma } from "@/utils/PrismaClient";
import { wasabiAccessor } from "@/utils/WasabiAccessor";
import { NextRequest, NextResponse } from "next/server";

export const config = {
    api: {
        bodyParser: false
    }
}

export async function POST(req: NextRequest){
    const formData = await req.formData();
    const file = formData.get("file") as File;

    console.log(file.size);

    if(!file){
        return NextResponse.json({}, {status: 400});
    }

    const result = await wasabiAccessor.upload(file, "markdowns");

    if(!result.success) return NextResponse.json({error: "failed"}, {status: 500});

    const markdown = await prisma.markdownObject.create({
        data: {
            filePath: result.fullPath
        }
    })

    return NextResponse.json({fullPath: result.fullPath, mimeType: result.mimeType, id: markdown.id});
}
