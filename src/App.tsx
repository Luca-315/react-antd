import React from "react";
interface AppProps {
  exact?: boolean;
}

export const App: React.FC<AppProps> = ({ exact }) => <div>App</div>;
