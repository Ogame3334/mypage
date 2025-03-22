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
        <div className={styles.aboutmeContainer}>
          <Image
            alt="icon"
            src="/ogame_trans.png"
            width={200}
            height={200}
          />
          <div 
            className={styles.aboutmeCard}
            style={{outlineColor: "var(--ogm-red)"}}
          >
            HN: 緑獺おがめ<br/>
            所属: 九州工業大学 情報工学部 学部3年<br/>
            <br/>
            大学に入ってからWebフロント、バック、ゲーム開発、作曲、3DCG、小説執筆など幅広い創作活動をしてきました。<br/>
            現在はC++を主軸としながら、ゲーム開発やWebアプリ開発をしています。
          </div>
        </div>
        <div>

        </div>
        <RoundButton 
          label="View the details"
          onClick={()=>{router.push("aboutme")}}
        />
      </div>
      <div id="works" className={styles.panel} style={{ backgroundColor: "var(--ogm-red)" }}>
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
      <div id="blog" className={styles.panel} style={{ backgroundColor: "var(--ogm-blue)" }}>
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
