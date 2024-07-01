"use client";

import { useEffect, useState } from "react";

interface WorkInfo {
  title: string;
  updated_at: Date;
}

export default function Main() {
  const [works, setWorks] = useState<WorkInfo[]>([]);

  useEffect(() => {
    setWorks([
      {
        title: "面白い作品",
        updated_at: new Date(2024, 4, 1, 0, 0, 0),
      },
      {
        title: "面白い作品",
        updated_at: new Date(2024, 4, 1, 0, 0, 0),
      },
      {
        title: "面白い作品",
        updated_at: new Date(2024, 4, 1, 0, 0, 0),
      },
      {
        title: "面白い作品",
        updated_at: new Date(2024, 4, 1, 0, 0, 0),
      },
    ]);
  }, []);

  return (
    <>
      <div className="px-10 py-48 bg-purple-50 h-full">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center m-5">
            <button
              className="px-5 py-2 text-xl rounded-full border border-black bg-white hover:bg-gray-200"
              onClick={() => {}}
            >
              作品投稿
            </button>
          </div>
          <div className="flex justify-center m-5">
            <div className="border border-black w-3/4 rounded-3xl bg-white">
              <div className="text-xl m-5 text-center">作品一覧</div>
              <div className="m-5 border flex flex-col max-h-96 overflow-y-scroll">
                {works.map((elem: WorkInfo, index: number) => (
                  <>
                    <div className="flex justify-between m-1 p-1 border">
                      <div className="">{elem.title}</div>
                      <div>{elem.updated_at.toLocaleDateString("ja-JP")}</div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
