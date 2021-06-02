// root-wrapper.js
//If there are any changes needed to the wrapPageElement function, can do in the one file
//this wraps every other element on the website = index + slug.mdx
import React from "react";
import { Layout } from "./src/components/layout";

export const rootWrapper = ({ element }) => {
  return <Layout>{element}</Layout>;
};
