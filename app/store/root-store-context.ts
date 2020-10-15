import { IRootModel } from './index';
import React from 'react'






export const StoreContext = React.createContext<IRootModel>({} as IRootModel)

export const StoreProvider = StoreContext.Provider