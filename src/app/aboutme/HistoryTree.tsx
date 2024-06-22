import Image from 'next/image';
import './HistoryTree.css'
import { ReactNode } from 'react';

function HistoryTreeImage({ src }: { src: string }) {
  return (
    <Image
      className='history-tree-leaf-image'
      src={src}
      alt='image'
      width={1000}
      height={1000}
    />
  );
}

function HistoryTreeText({ children }: { children: ReactNode }) {
  return (
    <div className='history-tree-leaf-text'>
      {children}
    </div>
  );
}

function HistoryTreeRow({ headline, children }: { headline: ReactNode, children: ReactNode }) {
  return (
    <>
      <div className='history-tree-row'>
        <div className='history-tree-column-left'>
          <h2 className='history-tree-headline'>
            {headline}
          </h2>
        </div>
        <div className='history-tree-column-right'>
          {children}
        </div>
      </div>
    </>
  );
}

export default function HistoryTree() {
  return (
    <>
      <div className='history-tree-container'>
        <HistoryTreeRow headline={<>2003<br />05/22</>}>
          <>
            <HistoryTreeText>
              山口県にて爆誕。
              <br />
              たくあんを口に入れたまま一晩寝たり、祖母の家で栽培しているまだ緑色のトマトをちぎって食べるなど、好きなものはとことん好きな子供だった。
            </HistoryTreeText>
          </>
        </HistoryTreeRow>
        <HistoryTreeRow headline={<>2015</>}>
          <>
            <HistoryTreeText>
              中学校に進学し、吹奏楽部に入部。チューバを始める。
              <br />
              高校生の時に楽器を買ってもらった。
            </HistoryTreeText>
            <HistoryTreeImage src='/tuba.png' />
          </>
        </HistoryTreeRow>
        <HistoryTreeRow headline={<>2022/04</>}>
          <>
            <HistoryTreeText>
              九州工業大学　情報工学部に入学。
              <br />
              Composite Computer Clubに入部。
            </HistoryTreeText>
            <HistoryTreeImage src='/C3_Logo.webp' />
            <HistoryTreeText>
              入部してから3DCGや作曲、ゲーム制作など様々な創作活動に触れた。
              <br />
              その中で、最も楽しく続いたのがプログラミングであり、ゲーム業界を志す。
            </HistoryTreeText>
          </>
        </HistoryTreeRow>
        <HistoryTreeRow headline={<>2022/12</>}>
          <>
          <HistoryTreeText>
            Siv3Dを始め、C++に出会う。
            <br />
            そこからC++にハマり、drogonフレームワークを用いたバックエンド開発やdppライブラリを用いたdiscord botなどを作りつつ、言語の理解を深めた。
          </HistoryTreeText>
          </>
        </HistoryTreeRow>
        <HistoryTreeRow headline={<>現在</>}>
          <>
            <HistoryTreeText>
              常に他分野の技術や新たな技術に目を向けながら、開発する日々を過ごしている。
            </HistoryTreeText>
          </>
        </HistoryTreeRow>
      </div>
    </>
  );
}
