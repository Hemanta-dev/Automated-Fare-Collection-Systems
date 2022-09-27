/* This example requires Tailwind CSS v2.0+ */
import { useSession, signOut, getSession } from "next-auth/react";
import Link from "next/link";

export default function Example() {
  const { data: session } = useSession();

  return (
    <>
      <div className="min-h-full">
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <section className="mb-10">
                <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
                  <div className="container mx-auto xl:px-32">
                    <div className="grid lg:grid-cols-2 items-center">
                      <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                        <div
                          className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                          style={{
                            background: "hsla(0, 0%, 100%, 0.55)",
                            backdropFilter: "blur(30px)",
                          }}
                        >
                          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">
                            Automated Fare Collection System <br />
                            <span className="text-blue-600">Admin Console</span>
                          </h1>

                          {session && (
                            <>
                              <button
                                className="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                onClick={() => signOut()}
                              >
                                Sign Out
                              </button>
                              <button
                                className="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                              >
                                <Link href="/dashboard">Dashboard</Link>
                              </button>
                              <h4>You are logged as: {session.user.name}</h4>
                              <div>
                                <h4>Email: {session.user.email}</h4>
                                <br />
                                {session.user.image && (
                                  <span>
                                    <img
                                      src={session.user.image}
                                      className="rounded-full w-32"
                                      alt={session.user.name}
                                    />
                                  </span>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="md:mb-12 lg:mb-0">
                        <img
                          src="https://images.unsplash.com/photo-1532939163844-547f958e91b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                          className="w-full rounded-lg shadow-lg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
