"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react"
import ReactMakdown from "react-markdown"
import breaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import dynamic from "next/dynamic";
const ReactSimpleMdeEditor = dynamic(() => import("react-simplemde-editor"), {
  ssr: false
});
import "easymde/dist/easymde.min.css";
import { RoundButton } from "@/components/Buttons/RoundButton";
import { InputDtoWorksToCreate } from "@/dto/works/InputDtoWorksToCreate";
import Image from "next/image";
import { OutputWorkDtoFull } from "@/dto/works/OutputWorkDtoFull";

interface WorkEdit {
  nanoId: string;
  title: string;
  isPublic: boolean;
  detail: string;
  tagIds: number[];
  blobs: {
    filePath: string;
    mimeType: string;
  }[];
}

export default function Home() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  )
}

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [links, setLinks] = useState<string[]>([]);

  const [workEdit, setWorkEdit] = useState<WorkEdit>({
    nanoId: "",
    title: "",
    isPublic: false,
    detail: "",
    tagIds: [],
    blobs: []
  });

  useEffect(() => {
    const fetchWork = async (nanoId: string) => {
      const res = await fetch(`/api/works/${nanoId}?full`);

      if (res.ok) {
        const work = await res.json() as OutputWorkDtoFull;

        console.log(work);

        setLinks(work.blobs.map(b => `/api/contents/${b.filePath}`));
        setWorkEdit({
          ...work,
          detail: work.detailContext,
          tagIds: work.tags.map(t => t.tag.id),
          blobs: work.blobs
        });
      }
    }

    const nanoId = searchParams.get("nanoId");

    if (nanoId) {
      fetchWork(nanoId);
    }

  }, [searchParams]);

  useEffect(()=> {
    console.log(workEdit);
  }, [workEdit]);


  return (
    <div>
      <div>
        Work{workEdit.nanoId ? "編集" : "作成"}
      </div>
      <div>
        <div>
          Title:
          <input
            value={workEdit.title}
            onChange={(e) => {
              setWorkEdit(prev => ({
                ...prev,
                title: e.target.value
              }))
            }}
          />
        </div>
        <div>
          Files:
          <input
            type="file"
            multiple
            onChange={async (e) => {
              const formData = new FormData();
              if (e.target.files == null) return;

              Array.from(e.target.files).forEach(file => {
                formData.append("file", file);
              })

              const response = await fetch("/api/contents/blobs", {
                method: "POST",
                body: formData
              })

              const result = (await response.json()) as {
                succeeded: { fullPath: string, mimeType: string }[];
                failed: number[];
              };

              setLinks([...links, ...result.succeeded.map(s => `/api/contents/${s.fullPath}`)]);
              setWorkEdit(prev => ({
                ...prev,
                blobs: [...prev.blobs, ...result.succeeded.map(s => ({
                  filePath: s.fullPath,
                  mimeType: s.mimeType
                }))]
              }))
            }}
          />
        </div>
        <div>
          {links.map((l, index) => (
            <Image
              alt="img"
              src={l}
              width={100}
              height={100}
              key={index}
            />
          ))}
        </div>
        <div>
          Detail:
          <div style={{ display: "flex", padding: 50 }}>
            <div style={{ width: "50%" }}>
              <ReactSimpleMdeEditor
                value={workEdit.detail}
                onChange={(value) => setWorkEdit(prev => ({
                  ...prev,
                  detail: value
                }))}
              />
            </div>
            <div style={{ width: "50%", overflow: "scroll" }}>
              <ReactMakdown
                remarkPlugins={[remarkGfm, breaks]}
              >
                {workEdit.detail}
              </ReactMakdown>
            </div>
          </div>
        </div>
        <div>
          isPublic:
          <input
            type="checkbox"
            checked={workEdit.isPublic}
            onChange={(e) => {
              setWorkEdit(prev => ({
                ...prev,
                isPublic: e.target.checked
              }))
            }}
          />
        </div>
      </div>
      <RoundButton
        label={workEdit.nanoId ? "変更" : "作成"}
        onClick={async () => {
          if (workEdit.nanoId) {

          }
          else {
            const file = new Blob([workEdit.detail], { type: "text/markdown" });
            const formData = new FormData();
            formData.append("file", file, "detail.md");

            const detailRes = await fetch("/api/contents/markdown", {
              method: "POST",
              body: formData
            });

            const detailResData = await detailRes.json();

            console.log(detailResData);

            const data: InputDtoWorksToCreate = {
              ...workEdit,
              markdownId: detailResData.id
            };

            const res = await fetch("/api/works", {
              method: "POST",
              body: JSON.stringify(data)
            });

            if(res.ok) router.push("/manage/works");
          }
        }}
      />
    </div>
  )
}
