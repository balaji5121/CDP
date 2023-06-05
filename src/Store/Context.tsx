import { createContext } from "react";
import { AppContextRootState } from "../Types/RootcontextTypes";

export const AppContext = createContext<AppContextRootState>({});
