import { QueryClient } from "@tanstack/react-query";
import {
  PersistedClient,
  Persister,
  persistQueryClient,
} from "@tanstack/react-query-persist-client";
import { del, get, set } from "idb-keyval";

/**
 * Creates an Indexed DB persister
 * @see https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
 */
const createIDBPersister = (idbValidKey: IDBValidKey = "reactQuery") => {
  return {
    persistClient: async (client: PersistedClient) => {
      await set(idbValidKey, client);
    },
    restoreClient: async () => {
      return await get<PersistedClient>(idbValidKey);
    },
    removeClient: async () => {
      await del(idbValidKey);
    },
  } as Persister;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
      gcTime: Infinity,
    },
  },
});

persistQueryClient({
  queryClient,
  persister: createIDBPersister(),
  maxAge: Infinity, // Keep data forever unless manually cleared
});

export default queryClient;
