import { GetObjectCommand, HeadObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";
import path from "path";
import { Readable } from "stream";

function streamToBuffer(stream: Readable): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const chunks: (Buffer | string)[] = [];
        stream.on('data', (chunk) => {
            chunks.push(chunk);
        });
        stream.on('end', () => {
            resolve(Buffer.concat(chunks as Buffer[]));
        });
        stream.on('error', (err) => {
            reject(err);
        });
    });
}

async function fileToBuffer(file: File): Promise<Buffer> {
    const arrayBuffer = await file.arrayBuffer();
    return Buffer.from(arrayBuffer);
}

class WasabiAccessor {
    s3Client: S3Client;
    bucketName: string;

    constructor() {
        this.s3Client = new S3Client({
            region: process.env.WASABI_REGION,
            credentials: {
                accessKeyId: process.env.WASABI_ACCESS_KEY!,
                secretAccessKey: process.env.WASABI_SECRET_ACCESS_KEY!,
            },
            endpoint: process.env.WASABI_ENDPOINT,
            forcePathStyle: true
        });

        this.bucketName = process.env.WASABI_BUCKET_NAME!;
    }

    async upload(file: File, dirPath: string): Promise<{success: boolean, fullPath: string, mimeType: string}> {
        const fileName = randomUUID();
        const fileEx = `.${file.name.split('.').pop()}`;
        const fullPath = path.join(dirPath, `${fileName}${fileEx}`);
        const dataBuffer = await fileToBuffer(file);

        const command = new PutObjectCommand({
            Bucket: this.bucketName,
            Key: fullPath,
            Body: dataBuffer
        });

        const success = await this.s3Client.send(command)
            .then(() => true)
            .catch((error) => {
                console.error(error);
                return false;
            });

        return {success, fullPath: fullPath, mimeType: file.type};
    }

    async download(filePath: string): Promise<Buffer | null> {
        const command = new GetObjectCommand({
            Bucket: this.bucketName,
            Key: filePath
        });

        try{
            await this.s3Client.send(new HeadObjectCommand({
                Bucket: this.bucketName,
                Key: filePath
            }));
        }
        catch(error){
            console.log(error);
            return null;
        }

        try {
            const result = await this.s3Client.send(command);
            const body = result.Body as Readable;
            const data = await streamToBuffer(body);
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

const wasabiAccessor = new WasabiAccessor();

export { wasabiAccessor }
