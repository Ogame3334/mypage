import { createHash } from "crypto";

export default function hash16(str: string){
    const hash = createHash('sha256').update(str).digest('hex');
    return hash.slice(0, 16);
}
