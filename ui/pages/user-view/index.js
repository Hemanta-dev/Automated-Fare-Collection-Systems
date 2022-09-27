import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";

export default function CardFare() {
  const { data: session } = useSession();

  if (session === "loading") {
    return <p>Loading</p>;
  }
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            User View
          </h1>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <>{/* your code here!! */}</>
            <form>
              <div className="block p-8 font-semibold rounded-xl shadow-xl bg-slate-100 max-w-4xl">
                <div className="card w-100 bg-base-100 shadow-xl ">
                  <div className="text-center">
                    <img
                      src="https://i.postimg.cc/j2prDGk3/291937276-3252492698364681-8116145598230147666-n.jpg"
                      className="rounded-full w-32 mb-4 mx-auto"
                      alt="Avatar"
                    />
                    <h5 className="text-xl font-medium leading-tight mb-2">
                      Hemanta Adhikari
                    </h5>
                    <p className="text-gray-500">
                      hemuadhikari123xyz@gmail.com
                    </p>
                  </div>

                  <div className="card-body">
                    <div className="card-actions justify-center">
                      <button className="btn btn-primary">Log Out</button>
                    </div>
                  </div>
                </div>

                <br></br>

                <div className="card w-100 bg-base-100 shadow-xl">
                  <div className="flex items-center space-x-12">
                    <div>
                      <div className="text-xl opacity-50 pl-5 pt-2 ">
                        {" "}
                        Your Current Balance is
                      </div>
                      <br></br>
                      <div className="font-bold text-2xl px-60 ">
                        {" "}
                        Rs. 100000
                      </div>
                      <br />
                    </div>
                  </div>
                </div>

                <br></br>
                <div className="card w-200 bg-base-200 shadow-xl">
                  <br></br>
                  <h2 className="text-xl font-bold ">History</h2>

                  <div className="stats shadow">
                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <div className="avatar online">
                          <div className="w-16 rounded-full">
                            <img src="https://i.postimg.cc/CxWLs0Sm/sajha-yatayat.jpg" />
                          </div>
                        </div>
                      </div>
                      <div className="stat-value">Bus</div>
                      <div className="stat-title text-green-900">
                        Successful
                      </div>
                      <div className="stat-desc text-secondary">2022-01-05</div>
                      <div className="stat-desc text-secondary">1:45</div>
                    </div>

                    <div className="stat">
                      <div className="stat-title">Source</div>
                      <div className="stat-value text-primary text-base">
                        Balkumari,lalitpur
                      </div>
                    </div>
                    <div className="stat">
                      <div className="stat-title">Destination</div>
                      <div className="stat-value text-secondary text-base">
                        Maitighar,Baneshwor
                      </div>
                    </div>

                    <div className="stat">
                      <div className="stat-value text-lg ">Cost</div>
                      <div className="stat-value text-primary text-xl text-red-800">
                        Rs.50
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
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
