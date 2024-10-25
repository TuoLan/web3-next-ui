import { Link } from "@nextui-org/react";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center py-3 pl-12 pb-8">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://github.com/TuoLan/web3-next-ui"
          title="nextui.org homepage"
        >
          <span className="text-default-600">© Calf Foundation, 2024. All rights reserved.</span>
          {/* <p className="text-primary">web3-next-ui</p> */}
        </Link>
      </footer>
    </div>
  );
}
