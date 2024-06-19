'use client'

import ScrollReveal from "@/components/ScrollReveal";
import TypingSentence from "@/components/TypingSentence";
import AroundButton from "@/components/buttons/AroundButton";
import RoundedButton from "@/components/buttons/RoundedButton";
import InputText from "@/components/inputs/InputText";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <div className="fixed w-screen h-screen top-main-container -z-50" />
        <div className="pt-16 w-screen h-screen flex justify-center items-center bg-lime-100 bg-opacity-65 -z-10">
          <div className="flex-row text-xl md:text-4xl lg:text-6xl">
            <TypingSentence text="everyday, enjoy." duration={100} />
            <TypingSentence text="everyday, make_unique." duration={100} delay={2000} />
          </div>
        </div>
        <div className="w-screen h-screen bg-yellow-50" id="aboutme">
          <div className="flex justify-center items-center w-full h-full">
            <div className="flex-row justify-center items-center w-full ">
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
                  <div className="break-words w-3/4 md:w-1/2 lg:w-1/4 rounded-lg border border-pink-300 p-5 bg-white text-[9px] md:text-base">
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
                    color="#fee"
                    href='/aboutme'
                  >
                    View the details
                  </RoundedButton>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        <div className="w-screen h-screen bg-red-50" id="works">
          <div className="flex justify-center items-center w-full h-full">
            <div className="flex-row justify-center items-center w-full ">
              <ScrollReveal>
                <h1 className="text-4xl md:text-6xl pb-12 md:pb-16 lg:p-24 text-center">
                  Works
                </h1>
              </ScrollReveal>
              <ScrollReveal>
                <div className="m-10 text-center">
                  <RoundedButton
                    color="#fee"
                    href='/works'
                  >
                    View the details
                  </RoundedButton>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        <div className="w-screen h-screen bg-blue-50" id="blog">
          <div className="flex justify-center items-center w-full h-full">
            <div className="flex-row justify-center items-center w-full ">
              <ScrollReveal>
                <h1 className="text-4xl md:text-6xl pb-12 md:pb-16 lg:p-24 text-center">
                  Blog
                </h1>
              </ScrollReveal>
              <ScrollReveal>
                <div className="m-10 text-center">
                  <RoundedButton
                    color="#fee"
                    href='/blog'
                  >
                    View the details
                  </RoundedButton>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        <div className="w-screen h-screen bg-white" id="contactme">
          <div className="flex justify-center items-center w-full h-full">
            <div className="flex-row justify-center items-center w-full ">
              <ScrollReveal>
                <h1 className="text-4xl md:text-6xl pb-12 md:pb-16 lg:p-24 text-center">
                  Contact me
                </h1>
              </ScrollReveal>
              <ScrollReveal>
                <div className="flex justify-center items-center">
                  <div className="w-1/2 flex">
                    <p>
                      この度はサイトをご覧いただきありがとうございました。このサイトを通じて私のことが少しでも伝わっていましたら幸いです。もし私へのご連絡などありましたら、以下のフォームをご利用ください。
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
                  <div className="col-span-3" />
                  <AroundButton 
                    className="col-span-2 border border-gray-400"
                    onClick={()=>{console.log('click')}}
                  >
                    Send
                  </AroundButton>
                </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
