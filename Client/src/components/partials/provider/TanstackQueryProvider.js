"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultOptions } from "@/core/config/reactQueryConfig"

// eslint-disable-next-line
const queryClient = new QueryClient({ defaultOptions });
function TanstackQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanstackQueryProvider;
