import styles from "../../styles/Home.module.css";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";

export default function CardFare() {
  const { data: session } = useSession();

  if (session === "loading") {
    return <p>Loading</p>;
  }
  return (
    <>
      <div>
        <h1 className={styles.title}>Card & Fare</h1>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p>
        <div className={styles.buttonGroup}>
          <button style="width:25%">Apple</button>
          <button style="width:25%">Samsung</button>
          <button style="width:25%">Sony</button>
          <button style="width:25%">HTC</button>
        </div>
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
