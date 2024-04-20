import { createContext } from "react";

const ToggleContextProvider = createContext({ toggle: true, action: () => { } })

export default ToggleContextProvider