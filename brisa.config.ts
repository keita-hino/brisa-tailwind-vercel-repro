import vercel from 'brisa-adapter-vercel';
import brisaTailwindCSS from "brisa-tailwindcss";

export default {
  output: 'node',
  outputAdapter: vercel({}),
  integrations: [brisaTailwindCSS()],
}
