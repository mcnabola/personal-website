import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export default function IndexPage() {
  const { title, description } = useSiteMetadata();

  
  return <>
  <h1>{title}</h1>
  <p>{description}</p>
</>;
}
