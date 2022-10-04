import React, { FC, PropsWithChildren, useState } from "react";

interface IDashboardContext {
  color: string;
  onColorChange?: (color: string) => void;
}

const defaultValue = {
  color: "light",
};

export const DashboardContext =
  React.createContext<IDashboardContext>(defaultValue);

export const DashboardContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [color, setColor] = useState("#aabbcc");

  const onColorChange = (color: string) => {
    setColor(color);
  };
  return (
    <>
      <DashboardContext.Provider value={{ color, onColorChange }}>
        {children}
      </DashboardContext.Provider>
    </>
  );
};
