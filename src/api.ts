import { useReducer, useEffect } from "react";

const DEV_SVR = 'https://dev.dummy-svr.com';
const PROD_SVR = 'https://prod.dummy-svr.com';
const METRIC_ENDPOINT = '/metrics';
export function genQuery(
  timeRange: string,
  componentName: string,
  seed: number
) {
  return `SELECT ${timeRange} WHERE c = ${componentName} AND x = ${
    seed % 7 === 0
  }`;
}

interface IRequestState<T = any, E = any> {
  loading: boolean;
  data: T;
  error: E;
}

interface IRequestAction {
  type: 'START' | 'ERROR' | 'SUCCESS';
  payload?: any;
}

const initialState: IRequestState = {
  loading: false,
  data: null,
  error: null,
};


function requestReducer(state: IRequestState, action: IRequestAction): IRequestState {
  switch(action.type) {
    case 'START': {
      return {
        loading: true,
        data: null,
        error: null,
      };
    }
    case 'ERROR': {
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    }
    case 'SUCCESS': {
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    }
    default:
      throw new Error(`Unexpected action: ${action.type}`);
  }
}

export function request() {
  return new Promise((resolve) =>
    setTimeout(() => resolve('data:' + Math.random()), 500)
  );
}

export function useApi<T = any, E = any>(query: string, forceRefresh?: any) {
  const endpoint =
    (process.env.NODE_ENV === 'production' ? PROD_SVR : DEV_SVR) +
    METRIC_ENDPOINT;
  console.log('get data from: ' + endpoint);
  console.log('body: ' + query);
  const [state, dispatch] = useReducer(requestReducer, initialState);
  useEffect(() => {
    dispatch({
      type: 'START'
    });
    request().then((response: any) => {
      dispatch({
        type: 'SUCCESS',
        payload: response,
      });
    }).catch(err => {
      dispatch({
        type: 'ERROR',
        payload: err,
      });
    })
  }, [query, forceRefresh]);
  return state as IRequestState<T, E>;
}
