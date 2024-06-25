'use client'

import WorkPanel from "./WorkPanel";
import WorkPanelInfo from "./WorkPanelInfo";

const workInfo: WorkPanelInfo = {
  title: "面白い作品！！！",
  thumbnail: "/tuba.png",
  tags: ["game"],
  created_at: new Date().getTime(),
  work_id: 'asoidjgldkcvnlzosruigh'
}

export default function Main() {
  return (
    <>
      <main className=" bg-red-50 h-auto">
        <div className="text-center text-5xl pt-36 pb-16">Works</div>
        <div className="mx-10 my-5 p-5 bg-white rounded-2xl">
          <div>
            絞り込み
          </div>
        </div>
        <div className="flex flex-wrap justify-center mx-0 md:mx-20 lg:mx-32">
          <WorkPanel workInfo={workInfo} />
          <WorkPanel workInfo={workInfo} />
          <WorkPanel workInfo={workInfo} />
          <WorkPanel workInfo={workInfo} />
          <WorkPanel workInfo={workInfo} />
          <WorkPanel workInfo={workInfo} />
          <WorkPanel workInfo={workInfo} />
          <WorkPanel workInfo={workInfo} />
          <WorkPanel workInfo={workInfo} />
          <WorkPanel workInfo={workInfo} />
          <WorkPanel workInfo={workInfo} />
          <WorkPanel workInfo={workInfo} />
        </div>
      </main>
    </>
  );
}
