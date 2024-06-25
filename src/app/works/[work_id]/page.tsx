'use client'

import Slider from "@/components/Slider";
import WorkInfo from "./WorkInfo";

function FormatDate(timestamp: number){
  const date = new Date(timestamp);
  return `${date.toLocaleDateString('ja-JP')} ${date.toLocaleTimeString('ja-JP')}`;
}

export default function Main() {
  const workInfo: WorkInfo = {
    work_id: "asoidjgldkcvnlzosruigh",
    title: "面白い作品！！！",
    assets: ["/tuba.png", "/icon.jpg", "/video.mp4"],
    tags: [],
    created_at: new Date().getTime(),
    updated_at: new Date().getTime(),
    detail: "# ほげほげ\nわいわい"
  }

  return (
    <>
      <main className="bg-red-50 h-auto py-20">
        <div className="flex justify-center">
          <div className="m-5 md:m-10 p-10 bg-white rounded-2xl shadow-md w-10/12 lg:w-auto max-w-[900px]">
            <Slider assets_path={workInfo.assets} />
            <div className="text-2xl text-center p-3">{workInfo.title}</div>
            <div className="text-right">{`投稿日時: ${FormatDate(workInfo.created_at)}`}</div>
            <div className="text-right">{`更新日時: ${FormatDate(workInfo.updated_at)}`}</div>
          </div>
        </div>
      </main>
    </>
  );
}
