import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);