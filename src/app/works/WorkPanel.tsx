import Image from "next/image";
import { WorkInfo } from "@/types/WorkInfo";
import Link from "next/link";

export default function WorkPanel({ workInfo }: { workInfo: WorkInfo }) {
  return (
    <>
      <Link href={`/works/${workInfo.id}`}>
        <div className="m-2 p-2 w-64 bg-white rounded-xl shadow-md hover:scale-105 transition-transform">
          <Image
            src={workInfo.thumbnail}
            alt="thumbnail"
            width={200}
            height={150}
            style={{ width: "240px", height: "135px", objectFit: "cover" }}
          />
          <div className="text-center p-3">{workInfo.title}</div>
          <div className="text-right text-xs">
            {new Date(workInfo.created_at).toLocaleDateString("ja-JP")}
          </div>
        </div>
      </Link>
    </>
  );
}
