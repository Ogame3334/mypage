import { ReactNode } from "react";

export default function TopPageContentsContainer({ children, className, id }: { children: ReactNode, className: string, id: string }) {
  return (
    <>
      <div className={className + " w-screen h-screen"} id={id}>
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex-row justify-center items-center w-full ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
