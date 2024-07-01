import Link from "next/link";

function HeaderButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center px-4 h-full bg-purple-300 bg-opacity-0 hover:bg-opacity-40 transition">
      <Link
        href={href}
        className="flex items-center h-full text-xl lg:text-2xl text-purple-900"
      >
        {children}
      </Link>
    </div>
  );
}

export default function ManageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="fixed top-16 left-0 w-full h-10 bg-purple-100 shadow-lg flex justify-between">
        <div className="text-xl p-2">ManageMode</div>
        <div className="flex">
          <HeaderButton href="/manage/works">Works</HeaderButton>
          <HeaderButton href="/manage/blog">Blog</HeaderButton>
        </div>
      </div>
      {children}
    </>
  );
}
