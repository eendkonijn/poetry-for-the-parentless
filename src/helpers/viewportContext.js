import React from "react";

export const viewportContext = React.createContext({});

export const ViewportProvider = ({ children }) => {

    const [width, setWidth] = React.useState(window.innerWidth);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
      }
    
    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);

      return (
          <viewportContext.Provider value={{ width }}>
              {children}
          </viewportContext.Provider>
      );
};