"use client"

import { Work } from "@prisma/client";
import { useEffect, useState } from "react";
import styles from "./page.module.css"
import { RoundButton } from "@/components/Buttons/RoundButton";
import { useRouter } from "next/navigation";

export default function Home(){
  const [works, setWorks] = useState<Work[]>([]);
  const router = useRouter();
  
  useEffect(()=>{
    const fetchWorks = async () => {
      const res = await fetch("/api/works");
      const tempWorks = await res.json() as {works: Work[]};

      setWorks(tempWorks.works);
    }

    fetchWorks();
  }, []);
  
  return (
    <div className={styles.container}>
      <div style={{fontSize: 30, margin: 30}}>Works</div>
      <div className={styles.worksContainer}>
        {works.map((work, index) => (
          <div key={index}>{work.title}</div>
        ))}
      </div>
      <RoundButton
        label="新規作成"
        onClick={()=>{router.push("/manage/works/edit")}}
      />
    </div>
  )
}
