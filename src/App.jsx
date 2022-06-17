import Head from 'next/head';
import { useState } from "react";
import styles from '../styles/App.module.css'
import { Input } from "./components/Input";
import { QRCode } from "./components/QRCode";

export function App() {
  const [text, setText] = useState("https://s.tosspayments.com/BgSTJLOsFtd");

  return (
    <div className={styles.container}>
      <Head>
        <title>QR Code Playground</title>
        <meta name="description" content="QR Code Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>QR Code Playground</h1>

        <Input
          className={styles.input}
          defaultValue={text}
          onChange={event => {
            setText(event.currentTarget.value);
          }}
        />

        <QRCode text={text} width="1024" height="1024" />
      </main>
    </div>
  );
}
