import Head from "next/head";

function App({ children }) {
  return (
    <>
      <Head>
        <title>Dealshare</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      {children}
    </>
  );
}

export default App;
