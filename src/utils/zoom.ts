import { useEffect } from 'react';

export const useZoom = (zoomLevel: string) => {
  useEffect(() => {
    document.body.style.zoom = zoomLevel;
  }, [zoomLevel]);
};
