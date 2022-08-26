import { Client, createClient } from "graphql-ws";
import { createContext, PropsWithChildren, useContext } from "react";

const client = createClient({
  url: `ws://${window.location.hostname}:${window.location.port}/graphql`,
  lazy: false,
});

const ClientContext = createContext<Client>(client);

export const ClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <ClientContext.Provider value={client}>{children}</ClientContext.Provider>
  );
};

export const useClient = () => useContext(ClientContext);
