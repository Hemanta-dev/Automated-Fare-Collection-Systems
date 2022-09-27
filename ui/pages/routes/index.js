import { useSession, getSession } from "next-auth/react";
import { Formik, Field, Form } from "formik";

export default function Routes() {
  const { data: session } = useSession();

  if (session === "loading") {
    return <p>Loading</p>;
  }
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Routes Management
          </h1>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col w-full border-opacity-50">
            <div className="grid ">
              {/* Stat */}
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Number of Routes</div>
                  <div className="stat-value">31K</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Active</div>
                  <div className="stat-value">4,200</div>
                </div>

                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Inactive</div>
                  <div className="stat-value">1,200</div>
                </div>
              </div>

              <div className="divider"></div>

              {/* Input  */}
              <div className="flex w-full">
                <div className="grid flex-grow ">
                  <h2 className="text-xl font-bold">Add New Route</h2>
                  <Formik
                    initialValues={{
                      name: null,
                      locationNameStart: null,
                      locationNameEnd: null,
                      locationGPSStart: null,
                      locationGPSEnd: null,
                      totalDistance: null,
                    }}
                    onSubmit={async (values) => {
                      await new Promise((r) => setTimeout(r, 500));
                      alert(JSON.stringify(values, null, 2));
                    }}
                  >
                    <Form>
                      <div className="flex justify-start mt-4">
                        <div>
                          <div className="form-floating mb-3 xl:w-96">
                            <Field
                              type="text"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="locationNameStart"
                              name="locationNameStart"
                              placeholder="Enter Location Name Start"
                            />
                          </div>
                          <div className="form-floating mb-3 xl:w-96">
                            <Field
                              type="text"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="locationNameEnd"
                              name="locationNameEnd"
                              placeholder="Enter Location Name End"
                            />
                          </div>

                          <div className="form-floating mb-3 xl:w-96">
                            <Field
                              type="text"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="locationGPSStart"
                              name="locationGPSStart"
                              placeholder="Enter GPS Location Start"
                            />
                          </div>
                          <div className="form-floating mb-3 xl:w-96">
                            <Field
                              type="text"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="locationGPSEnd"
                              name="locationGPSEnd"
                              placeholder="Enter GPD Location End"
                            />
                          </div>
                          <div className="form-floating mb-3 xl:w-96">
                            <Field
                              type="number"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="totalDistance"
                              name="totalDistance"
                              placeholder="Enter Total Distance in KM"
                            />
                          </div>

                          <button
                            type="submit"
                            className="btn btn-sm  btn-outline  w-full btn-accent"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="grid flex-grow ">
                  <h2 className="text-xl font-bold">Assigne Vehicle</h2>
                  <Formik
                    initialValues={{
                      vehicleId: "",
                      routeId: "",
                    }}
                    onSubmit={async (values) => {
                      await new Promise((r) => setTimeout(r, 500));
                      alert(JSON.stringify(values, null, 2));
                    }}
                  >
                    <Form>
                      <div className="flex justify-start mt-4">
                        <div>
                          <div className="form-floating mb-3 xl:w-96">
                            <Field
                              type="text"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="vehicleId"
                              name="vehicleId"
                              placeholder="Enter Vehicle Id"
                            />
                          </div>
                          <div className="form-floating mb-3 xl:w-96">
                            <Field
                              type="text"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="routeId"
                              name="routeId"
                              placeholder="Enter Route Id"
                            />
                          </div>

                          <button
                            type="submit"
                            className="btn btn-sm  btn-outline  w-full btn-accent"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                </div>

              </div>
            </div>

            <div className="divider"></div>

            {/* Table */}
            <div className="grid ">
              <div>
                <h2 className="text-xl font-bold">Routes List</h2>
              </div>

              <div className="px-4 py-6 sm:px-0">
                <div className="">
                  <table className="table table-compact w-full">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Plate No</th>
                        <th>Passenger Capacity</th>
                        <th>Routes</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(100)].map((x, i) => (
                        <tr key={i}>
                          <th>{i}</th>
                          <td>Cy Ganderton</td>
                          <td>Quality Control Specialist</td>
                          <td>Littel, Schaden and Vandervort</td>
                          <td>Canada</td>
                          <td>12/16/2020</td>
                          <td className="dropdown">
                            <label
                              tabIndex={i}
                              className="btn  btn-xs btn-outline btn-warning"
                            >
                              Actions
                            </label>
                            <ul
                              tabIndex={i}
                              className="dropdown-content menu shadow bg-base-100  w-22"
                            >
                              <li>
                                <a>Item {i}</a>
                              </li>
                              <li>
                                <a>Item {i}</a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
