import React from "react";

export interface IContextValue {
  secrets: Record<string, unknown>
}

export interface AppContextProps {
  appContext: IContextValue;
}

const defaultValue:IContextValue = {
  secrets: {}
};

export const AppContext = React.createContext(defaultValue);

export function withAppContext<P extends AppContextProps>(Child: React.ComponentClass<P> | React.FunctionComponent<P>) {
  return (props: Omit<P, keyof AppContextProps>) => {
    return (
      <AppContext.Consumer>
        {(context) => <Child {...(props as P)} appContext={context} />}
      </AppContext.Consumer>
    );
  };
}
