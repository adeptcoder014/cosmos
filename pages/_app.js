// import '@/styles/globals.css'
import "/styles/header.css";
import { ThemeProvider } from "@mui/system";
import { theme } from "../theme";
//======================================
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
