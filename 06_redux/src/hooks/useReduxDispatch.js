import ReduxContext from "../contexts/ReduxContext";
import {useContext} from "react";

export default function useReduxDispatch() {
  const store = useContext(ReduxContext);
  return store.dispatch;
}