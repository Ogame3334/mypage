"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import RoundedButton from "@/components/buttons/RoundedButton";
// import { WorkInfoNew } from "@/types/WorkInfo";

export default function Main() {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState<File>();
  const [thumbnailSrc, setThumbnailSrc] = useState("");
  const [assets, setAssets] = useState<File[]>([]);
  const [assetsSrc, setAssetsSrc] = useState<string[]>([]);
  const [detail, setDetail] = useState("");
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });

  useEffect(() => {
    console.log(assetsSrc)
  }, [assetsSrc])

  return (
    <>
      <div className="px-10 py-48 bg-purple-50 h-full">
        <div className="flex flex-col bg-white p-10 rounded-xl border border-black">
          <div className="flex justify-between">
            <div>タイトル</div>
            <input
              className={styles.short_text_input}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="flex justify-between items-center">
            <div>タグ</div>
          </div>
          <div className="flex justify-between items-center">
            <div>サムネイル</div>
            <div className="m-5 w-20 h-20 border border-black rounded-xl relative">
              {thumbnailSrc !== "" ? (
                <>
                  <Image
                    src={thumbnailSrc}
                    width={100}
                    height={100}
                    alt="thumbnail"
                    className="rounded-xl relative ml-auto mr-auto"
                  />
                  <Image className="w-5 h-5 absolute top-0 right-0" onClick={() => {
                    setThumbnail(undefined);
                    setThumbnailSrc("");
                  }}
                    src="/cross.svg"
                    alt="cross"
                    width={20}
                    height={20} />
                </>
              ) : (
                <input
                  type="file"
                  accept="image/*, video/mp4"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (!files) return;
                    const file = files[0];
                    setThumbnail(file);
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      setThumbnailSrc(event.target?.result as string);
                    };
                    reader.readAsDataURL(file);
                  }}
                  className="opacity-0 w-20 h-20 absolute top-0 left-0"
                />
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>アセット(5個まで)</div>
            <div className="flex">
              {assetsSrc.map((assetSrc, index) => (
                <div className="m-5 w-20 h-20 border border-black rounded-xl relative" key={index}>
                  <Image
                    src={assetSrc}
                    width={80}
                    height={800}
                    alt="thumbnail"
                    className="rounded-xl relative ml-auto mr-auto object-cover"
                  />
                  <Image className="w-5 h-5 absolute top-0 right-0" onClick={() => {
                    setAssets(assets.filter((e) => {
                      let fileSrc = "";
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        fileSrc = event.target?.result as string;
                      };
                      reader.readAsDataURL(e);
                      return assetSrc != fileSrc;
                    }));
                    setAssetsSrc(assetsSrc.filter((e) => (e != assetSrc)));
                  }}
                    src="/cross.svg"
                    alt="cross"
                    width={20}
                    height={20} />
                </div>
              ))}
              {assetsSrc.length < 5 ? <div className="m-5 w-20 h-20 border border-black rounded-xl relative">
                <input
                  type="file"
                  accept="image/*, video/mp4"
                  onChange={(e) => {
                    const files = e.target.files;
                    console.log(files);
                    if (!files || files?.length == 0) return;
                    const file = files[0];
                    setAssets([...assets, file]);
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      setAssetsSrc([...assetsSrc, event.target?.result as string]);
                    };
                    reader.readAsDataURL(file);
                  }}
                  className="opacity-0 w-20 h-20 absolute top-0 left-0"
                />
              </div> : <></>}
            </div>
          </div>
          <div className="flex flex-col">
            <div>説明</div>
          </div>
          <ReactMde
            value={detail}
            onChange={setDetail}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={markdown =>
              Promise.resolve(converter.makeHtml(markdown))
            }
            minEditorHeight={600}
            maxEditorHeight={1000}
            minPreviewHeight={600}
          />
          <div className="p-10 flex justify-center">
          <div className="relative inline-block text-center no-underline border border-gray-600 py-3 px-7 rounded-full overflow-hidden group"
            onClick={async ()=>{
              const res = await fetch("/api/works", {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ work: {
                    title: title,
                    thumbnail: thumbnailSrc,
                    assets: assetsSrc,
                    tags: ["game"],
                    detail: detail
                  }}),
                  // } as WorkInfoNew }),
                }
              );
            }}>
            <span className="relative z-10 text-black transition-colors duration-200 group-hover:text-black">
              投稿
            </span>
            <div className={"bg-violet-400 active:bg-violet-500 absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right group-hover:origin-left"}></div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
