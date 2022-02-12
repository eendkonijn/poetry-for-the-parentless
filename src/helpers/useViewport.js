import React from 'react';
import { viewportContext } from "./viewportContext";

export function useViewport() {
  const { width } = React.useContext(viewportContext);
  
  return { width };

}

