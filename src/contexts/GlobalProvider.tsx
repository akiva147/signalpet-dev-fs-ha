import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { TranslationProvider } from "./TranslationProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: Infinity,
      staleTime: Infinity,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

export interface GlobalProviderProps {
  children?: React.ReactNode;
}

// added a presistence query client provider to save the queries in the local storage
// to save the translation results to decrease the number of requests
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => (
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
  >
    <TranslationProvider>{children}</TranslationProvider>
  </PersistQueryClientProvider>
);
