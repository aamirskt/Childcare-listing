import"styles/globals.css";
import"./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './youtubeStyles.css'; // 👈 Import custom styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import './styles.css';
import type { AppProps } from "next/app";
import ProviderWrapper from "./ProviderWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return        <ProviderWrapper> 

   <Component {...pageProps}  />
         </ProviderWrapper> 

}
