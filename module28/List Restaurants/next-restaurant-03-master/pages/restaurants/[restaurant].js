import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Restaurant() {
  const router = useRouter();

  return (
    <div>
      <h1>Dynamic restaurant Page {router.query.restaurant} for Paz!</h1>

      <a href="/restaurants">
        <h3>Backt to Home Page</h3>
      </a>
    </div>
  );
}
