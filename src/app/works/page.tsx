"use client"

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface WorkSummary {
  nanoId: string;
  title: string;
  thumbnailSrc: string;
  isPublic: boolean;
}

export default function Home(){
  const [works, setWorks] = useState<WorkSummary[]>([]);
  const router = useRouter();

  useEffect(()=> {
    const fetchWorks = async () => {
      const tempWorks = await fetch("/api/works")
                          .then(async response => await response.json()
                              .then(data => {
                                const works = data.works as {nanoId: string, title: string, blobs: {filePath: string}[], isPublic: boolean}[];
                                return works.map(work => ({
                                  nanoId: work.nanoId,
                                  title: work.title,
                                  thumbnailSrc: work.blobs[0] ? `/api/contents/${work.blobs[0].filePath}` : "",
                                  isPublic: work.isPublic
                                }));
                              }))

      setWorks(tempWorks);
    }

    fetchWorks();
  }, []);
  
  return (
    <div style={{marginTop: "6vh", backgroundColor: "var(--ogm-red)", height: "100vh", paddingTop: "2vh"}}>
      <div className={styles.container}>
        <div className={styles.heading}>Works</div>
        <div className={styles.worksContainer}>
          {works.filter(work => work.isPublic).map((work, i) => (
            <div
              key={i}
              className={styles.worksCard}
              onClick={()=>{
                router.push(`/works/${work.nanoId}`)
              }}
            >
              <div style={{textAlign: "center", fontSize: 20, height: 50}}>
                {work.title}
              </div>
              {work.thumbnailSrc ? 
              <Image
              alt="thumbnail"
              src={work.thumbnailSrc}
              width={300}
              height={200}
              className={styles.worksCardImage}
              />
              :
              <div style={{width: 300, height: 200, backgroundColor: "lightgray"}} />
            }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
