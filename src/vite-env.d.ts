/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COOP_ROUTE_ACCESS_CODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
