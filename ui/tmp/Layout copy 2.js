import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Header from "./Header";

export default function Example({ children }) {
  const currentPath = useRouter().pathname;

  if (currentPath === "/") {
    return (
      <>
        <Head>
          <title>Automated Fare Collection System | Admin Console</title>
          <meta name="keywords" content="AFC" />
        </Head>

        {children}
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Automated Fare Collection System | Admin Console</title>
          <meta name="keywords" content="AFC" />
        </Head>
        <div className="min-h-full">
          <Navbar />
          {/* <Header title={"Dashboard"} /> */}

          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-6 sm:px-0">
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </>
    );
  }
}
