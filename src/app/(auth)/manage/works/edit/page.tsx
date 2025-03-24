"use client"

import { OutputWorkDto } from "@/dto/works/OutputWorkDto";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react"
import ReactMakdown from "react-markdown"
import breaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import dynamic from "next/dynamic";
const ReactSimpleMdeEditor = dynamic(()=>import("react-simplemde-editor"), {
  ssr: false
});
import "easymde/dist/easymde.min.css";
import { RoundButton } from "@/components/Buttons/RoundButton";
import { InputDtoWorksToCreate } from "@/dto/works/InputDtoWorksToCreate";

interface WorkEdit {
  nanoId: string;
  title: string;
  isPublic: boolean;
  detail: string;
  tags: number[];
  blobs: number[];
}

export default function Home(){
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  )
}

function HomeContent(){
  const searchParams = useSearchParams();
  const nanoId = searchParams.get("nanoId");
  
  const [workEdit, setWorkEdit] = useState<WorkEdit>({
    nanoId: "",
    title: "",
    isPublic: false,
    detail: "",
    tags: [],
    blobs: []
  });

  useEffect(() => {
    const fetchWork = async (nanoId: string) => {
      const res = await fetch(`/api/works/${nanoId}`);

      if(res.ok){
        const work = await res.json() as OutputWorkDto;

        // const detail = await wasabiAccessor.download(work.detail.filePath);

        
        setWorkEdit(prev => ({
          ...prev,
          nanoId: work.nanoId,
          title: work.title,
          isPublic: work.isPublic
        }));
      }
    }


    if(nanoId){
      fetchWork(nanoId);
    }

  }, []);

  
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
          Detail:
          <div style={{display: "flex", padding: 50}}>
            <div style={{width: "50%"}}>
              <ReactSimpleMdeEditor
                value={workEdit.detail}
                onChange={(value) => setWorkEdit(prev => ({
                  ...prev,
                  detail: value
                }))}
              />
            </div>
            <div style={{width: "50%", overflow: "scroll"}}>
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
        onClick={async ()=>{
          if(workEdit.nanoId){

          }
          else{
            const file = new Blob([workEdit.detail], {type: "text/markdown"});
            const formData = new FormData();
            formData.append("file", file, "detail.md");

            const detailRes = await fetch("/api/contents/markdown", {
              method: "POST",
              body: formData
            });

            const detailResData = await detailRes.json();

            console.log(detailResData);

            const data: InputDtoWorksToCreate = {
              title: workEdit.title,
              blobIds: [],
              isPublic: workEdit.isPublic,
              tagIds: [],
              markdownId: detailResData.id
            };

            const res = await fetch("/api/works", {
              method: "POST",
              body: JSON.stringify(data)
            });

            if(res.ok) console.log("seikou!");
            else console.log("sippai!!");
          }
        }}
      />
    </div>
  )
}
