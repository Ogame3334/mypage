import { wasabiAccessor } from "@/utils/WasabiAccessor";
import { NextRequest, NextResponse } from "next/server";

export const config = {
    api: {
        bodyParser: false
    }
}

export async function POST(req: NextRequest){
    const formData = await req.formData();
    const files = formData.getAll("file") as File[];

    if(files.length <= 0){
        return NextResponse.json({}, {status: 400});
    }

    const uploadPromises = files.map(async (file, index) => {
        const result = await wasabiAccessor.upload(file, "blobs");

        return {index, result};
    })

    const uploadResults = await Promise.all(uploadPromises);

    const resultObj = {
        succeeded: uploadResults.filter(r => r.result.success).map(r => ({fullPath: r.result.fullPath, mimeType: r.result.mimeType})),
        failed: uploadResults.map((r, i) => ({r, i})).filter(d => !d.r.result.success).map(d => ({index: d.i}))
    };

    if(resultObj.failed.length > 0){
        return NextResponse.json(resultObj, {status: 500});
    }

    return NextResponse.json(resultObj);
}
