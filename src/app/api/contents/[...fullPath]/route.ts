import { wasabiAccessor } from "@/utils/WasabiAccessor";
import { NextResponse } from "next/server";
import path from "path";


export async function GET(req: Request, {params}: {params: Promise<{fullPath: string[]}>}){
    const { fullPath } = await params;
    console.log(fullPath);
    const result = await wasabiAccessor.download(path.join(...fullPath));
    

    if(!result){
        return NextResponse.json({error: "not found"}, {status: 404});
    }
    

    return new NextResponse(result, {
        status: 200,
        headers: {
            'Content-Disposition': `attachment; filename="${fullPath.pop()}"`,
        }
    });
}
