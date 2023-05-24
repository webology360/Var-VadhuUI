import axios from "axios";

export function axiosCancelToken(cancelToken) {
  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel("Operation canceled due to new request.");
  }
  cancelToken = axios.CancelToken.source();
  return cancelToken;
}
