import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
const query = new QueryClient()
  return( 
    <QueryClientProvider client={query}>
      <Component {...pageProps} />
    </QueryClientProvider>
  
)}
