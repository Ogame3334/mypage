import { wasabiAccessor } from "@/utils/WasabiAccessor";
import { NextResponse } from "next/server";


export async function GET(req: Request, {params}: {params: {fileName: string}}){
    const {fileName} = await params;
    console.log(fileName);
    const result = await wasabiAccessor.download(`blobs/${fileName}`);

    if(!result){
        return NextResponse.json({error: "not found"}, {status: 404});
    }
    

    return new NextResponse(result, {
        status: 200,
        headers: {
            'Content-Type': 'image/png',
            'Content-Disposition': `attachment; filename="${fileName}"`,
        }
    });
}
