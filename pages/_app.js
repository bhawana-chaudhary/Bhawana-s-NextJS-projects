import React from "react";
import Layout from "../components/layout";
import '../app/globals.css';
import '../styles/homePage.module.scss';
// import "../styles/global.scss";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout >

  );
}

export default App;




// function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default App;
