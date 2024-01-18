import { Reducer } from 'react'

export type AppState = {
  user?: UserInfo | undefined | null,
  setupUser?: ({ endPoint, userInfo }: ISetupUser) => void
} | undefined

interface AppAction {
  type: string;
  payload: string;
}

const reducer: Reducer<AppState, AppAction> = (state, action) => {
  if (action.type === "test") {
    return {
      ...state
    }
  }
};

export default reducer;