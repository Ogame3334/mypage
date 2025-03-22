"use client"

import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css"
import { Header } from "@/components/Header/Header";
import { RoundButton } from "@/components/Buttons/RoundButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  return (
    <div>
      <Header />
      <div id="top" className={styles.panel} style={{ backgroundColor: "var(--ogm-green)" }}>
        <div className={styles.panelHeading} style={{textAlign: "left"}}>
          Everyday, enjoy. <br/>
          Everyday, make_unique;
        </div>
      </div>
      <div id="aboutme" className={styles.panel} style={{ backgroundColor: "var(--ogm-yellow)" }}>
        <div className={styles.panelHeading}>
          About me
        </div>
        <Image
          alt="icon"
          src="/ogame_trans.png"
          width={200}
          height={200}
        />
        <div>

        </div>
        <RoundButton 
          label="View the details"
          onClick={()=>{router.push("aboutme")}}
        />
      </div>
      <div id="works" className={styles.panel} style={{ backgroundColor: "var(--ogm-blue)" }}>
        <div className={styles.panelHeading}>
          Works
        </div>
        <div>

        </div>
        <RoundButton 
          label="View the details"
          onClick={()=>{router.push("works")}}
        />
      </div>
      <div id="blog" className={styles.panel} style={{ backgroundColor: "var(--ogm-red)" }}>
        <div className={styles.panelHeading}>
          Blog
        </div>
        <div>

        </div>
        <RoundButton 
          label="View the details"
          onClick={()=>{router.push("blog")}}
        />
      </div>
      <div id="contactme" className={styles.panel} style={{ backgroundColor: "var(--ogm-white)" }}>
        <div className={styles.panelHeading}>
          Contact me
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
