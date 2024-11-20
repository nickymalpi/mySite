import CavaniState from "@/src/Context";
import CavaniHead from "@/src/layout/CavaniHead";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CavaniState>
      <CavaniHead />
      <Component {...pageProps} />
    </CavaniState>
  );
}
