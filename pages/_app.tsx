import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "../styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const BrowserRouter = dynamic(
  () => import("react-router-dom").then((mod) => mod.BrowserRouter),
  {
    ssr: false,
  }
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Component {...pageProps} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
