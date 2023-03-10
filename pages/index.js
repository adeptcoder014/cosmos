import Head from "next/head";
import Header from "../components/header";
import { Container } from "@mui/system";
import Hero from "../components/hero";
import { useTheme } from "@mui/system";
import Services from "../components/services";
import Footer from "../components/footer";
import TryOut from "../components/tryOut";
//===================================================
export default function Home() {
  //===================================================
  return (
    <>
      <Header />

      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "white",
        }}
      >
        <Head>
          <title>Cosmos</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght..300&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Hero />
      </Container>
      <TryOut />
      <Services />
      <Footer />
    </>
  );
}
