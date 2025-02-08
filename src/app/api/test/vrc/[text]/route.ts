import { fromIni } from "@aws-sdk/credential-provider-ini";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { createReadStream } from "fs";
import { WorkInfoNew } from "@/types/WorkInfo";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { text: string } },) {
    const text = params.text;

    console.log(text);

    return new NextResponse(`ok! you sended \"${text}\"`);
}
