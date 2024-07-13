export const enum Routes {
  ROOT = "/",
  COOP_REPORT = "coop-report",
  DOLL_DIRECTORY = "dolls",
  DOLL_INFO = "dolls/:name",
}

const BREAKPOINTS: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const MEDIA_QUERIES = Object.keys(BREAKPOINTS)
  .map((key) => [key, BREAKPOINTS[key]] as [string, number])
  .reduce<Record<string, string>>((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint}px)`;
    return prev;
  }, {});

export const CDN_BASE_URL = "https://cdn.jsdelivr.net/gh";
export const DOLL_INFO_REPO_IMAGES_PATH = "huebama-ting/doll-info/images";
