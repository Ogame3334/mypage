'use client'

import ScrollReveal from "@/components/ScrollReveal";
import TypingSentence from "@/components/TypingSentence";
import AroundButton from "@/components/buttons/AroundButton";
import RoundedButton from "@/components/buttons/RoundedButton";
import InputText from "@/components/inputs/InputText";
import { ReactNode } from "react";
import Image from "next/image";

function ContentsContainer({ children, className, id }: { children: ReactNode, className: string, id: string }) {
  return (
    <>
      <div className={className + " w-full h-full"} id={id}>
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex-row justify-center items-center w-full ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}


export default function Home() {
  return (
    <>
      <main>
        <div className="fixed w-full h-full top-main-container -z-50" />
        <ContentsContainer
          id=""
          className="bg-lime-100 bg-opacity-65"
        >
          <div className="flex justify-center items-center">
            <div className="flex flex-col text-xl md:text-4xl lg:text-6xl">
              <TypingSentence text="everyday, enjoy." duration={100} />
              <TypingSentence text="everyday, make_unique;" duration={100} delay={2000} />
            </div>
          </div>
        </ContentsContainer>
        <ContentsContainer
          id="aboutme"
          className="bg-yellow-50"
        >
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl pb-12 md:pb-16 lg:p-24 text-center">
              About me
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex-col md:flex-row flex items-center justify-center h-full md:p-5">
              <div className="w-1/3 lg:w-1/6">
                <Image
                  src='/ogame.png'
                  width={1000}
                  height={1000}
                  alt='icon'
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="break-words w-3/4 md:w-2/3 lg:w-1/2 rounded-lg border border-pink-300 p-10 bg-white text-[12px] md:text-base">
                <table>
                  <tbody>
                    <tr>
                      <td>HN</td>
                      <td>:</td>
                      <td>緑獺おがめ</td>
                    </tr>
                    <tr>
                      <td>所属</td>
                      <td>:</td>
                      <td>九州工業大学 情報工学部 学部3年</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-5">
                  大学に入ってからWebフロント、バック、ゲーム開発、作曲、3DCG、小説執筆など幅広い創作活動をして来ました。<br />現在はC++を主軸としながら、ゲーム開発やWebアプリ開発をしています。
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="m-10 text-center">
              <RoundedButton
                bg_color="bg-red-50"
                href='/aboutme'
              >
                View the details
              </RoundedButton>
            </div>
          </ScrollReveal>
        </ContentsContainer>
        <ContentsContainer
          id="works"
          className="bg-red-50"
        >
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl pb-12 md:pb-16 lg:p-24 text-center">
              Works
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <div className="m-10 text-center">
              <RoundedButton
                bg_color="bg-blue-50"
                href='/works'
              >
                View the details
              </RoundedButton>
            </div>
          </ScrollReveal>
        </ContentsContainer>
        <ContentsContainer
          id="blog"
          className="bg-blue-50"
        >
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl pb-12 md:pb-16 lg:p-24 text-center">
              Blog
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <div className="m-10 text-center">
              <RoundedButton
                bg_color="bg-yellow-50"
                href='/works'
              >
                View the details
              </RoundedButton>
            </div>
          </ScrollReveal>
        </ContentsContainer>
        <ContentsContainer
          id="contactme"
          className="bg-white"
        >
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl pb-12 md:pb-16 lg:p-24 text-center">
              Contact me
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex justify-center items-center">
              <div className="flex w-2/3 md:w-1/2 text-xs md:text-base">
                <p>
                  この度はサイトをご覧いただきありがとうございました。
                  このサイトを通じて私のことが少しでも伝わっていましたら幸いです。
                  もし私へのご連絡などありましたら、以下のフォームをご利用ください。
                  <br />
                  <span className="text-red-500">※現在は機能していません。</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-col justify-center items-center m-5">
              <div className="grid grid-cols-8 w-2/3">
                <div className="col-span-8 md:col-span-4 flex justify-center">
                  <InputText
                    labelName="Name"
                  />
                </div>
                <div className="col-span-8 md:col-span-4 flex justify-center">
                  <InputText
                    labelName="Mail"
                  />
                </div>
                <div className="col-span-8 flex justify-center">
                  <InputText
                    labelName="Content"
                    isTextarea={true}
                  />
                </div>
                <div className="col-span-2 md:col-span-3" />
                <AroundButton
                  className="col-span-4 md:col-span-2 border border-gray-400"
                  onClick={() => { console.log('click') }}
                >
                  Send
                </AroundButton>
              </div>
            </div>
          </ScrollReveal>
        </ContentsContainer>
      </main>
    </>
  );
}
