/// <reference types="vite/client" />

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.webm" {
  const src: string;
  export default src;
}

declare module "*.m4v" {
  const src: string;
  export default src;
}
