"use client"

import { useEffect, useState } from "react";
import styles from "./page.module.css"
import { RoundButton } from "@/components/Buttons/RoundButton";
import { useRouter } from "next/navigation";
import { OutputWorkDtoOpened } from "@/dto/works/OutputWorkDtoOpened";

export default function Home(){
  const [works, setWorks] = useState<OutputWorkDtoOpened[]>([]);
  const router = useRouter();
  
  useEffect(()=>{
    const fetchWorks = async () => {
      const res = await fetch("/api/works");
      const tempWorks = await res.json() as {works: OutputWorkDtoOpened[]};

      setWorks(tempWorks.works);
    }

    fetchWorks();
  }, []);
  
  return (
    <div className={styles.container}>
      <div style={{fontSize: 30, margin: 30}}>Works</div>
      <div className={styles.worksContainer}>
        {works.map((work, index) => (
          <div 
            key={index} 
            className={styles.workPanel}
            onClick={()=>{
              router.push(`/manage/works/edit?nanoId=${work.nanoId}`)
            }}
          >
            <div style={{padding: 10}}>{work.nanoId}</div>
            <div style={{padding: 10}}>{work.title}</div>
          </div>
        ))}
      </div>
      <RoundButton
        label="新規作成"
        onClick={()=>{router.push("/manage/works/edit")}}
      />
    </div>
  )
}
