import React, { useState, useEffect, useRef } from 'react';
import { IProps } from './models';
import { genQuery, useApi } from '../api';
import { Loading } from './loading';

export function C1(props: IProps) {
  const refreshInterval_Secs = 5; // for demo purpose
  const [query] = useState(() =>
    genQuery(props.timeRange, 'c1', Math.random()) // this allway return same result because Math.random() only return a number from [0,1).
  ); // only init once
  const [forceRefresh, setForceRefresh] = useState(0);
  const { loading, data, error } = useApi<number>(query, forceRefresh);
  const trackingRendered = useRef(0);
  useEffect(() => {
    trackingRendered.current++; // increment every time the component render
    // we can apply `if condition` to inc only if the value <= 1
  });

  useEffect(() => {
    const id = setInterval(() => {
      setForceRefresh((pre) => ++pre);
    }, refreshInterval_Secs * 1000);
    return () => clearInterval(id);
  }, []);

  if (trackingRendered.current <= 1 && loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Some thing went wrong!</p>;
  }
  return <>Hi {data}</>;
}

export function C2(props: IProps) {
  const refreshInterval_Secs = 10;
  const [query] = useState(() =>
    genQuery(props.timeRange, 'c2', Math.random())
  );
  const [forceRefresh, setForceRefresh] = useState(0);

  const { loading, data, error } = useApi<number>(query, forceRefresh);
  const trackingRendered = useRef(0);
  useEffect(() => {
    trackingRendered.current++;
  });
  useEffect(() => {
    const id = setInterval(() => {
      setForceRefresh((pre) => ++pre);
    }, refreshInterval_Secs * 1000);
    return () => clearInterval(id);
  }, []);

  if (trackingRendered.current <= 1 && loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Some thing went wrong!</p>;
  }
  return <>Hello there {data}</>;
}
export function C3(props: IProps) {
  const refreshInterval_Secs = 15;
  const [query] = useState(() =>
    genQuery(props.timeRange, 'c3', Math.random())
  );

  const [forceRefresh, setForceRefresh] = useState(0);

  const { loading, data, error } = useApi<number>(query, forceRefresh);
  const trackingRendered = useRef(0);
  useEffect(() => {
    trackingRendered.current++;
  });

  useEffect(() => {
    const id = setInterval(() => {
      setForceRefresh((pre) => ++pre);
    }, refreshInterval_Secs * 1000);
    return () => clearInterval(id);
  }, []);

  if (trackingRendered.current <= 1 && loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Some thing went wrong!</p>;
  }
  return <>Charlie {data} Tango</>;
}
export function C4(props: IProps) {
  const refreshInterval_Secs = 42;
  const [query] = useState(() =>
    genQuery(props.timeRange, 'c4', Math.random())
  );
  const [forceRefresh, setForceRefresh] = useState(0);

  const { loading, data, error } = useApi<number>(query, forceRefresh);

  const trackingRendered = useRef(0);
  useEffect(() => {
    trackingRendered.current++;
  });

  useEffect(() => {
    const id = setInterval(() => {
      setForceRefresh((pre) => ++pre);
    }, refreshInterval_Secs * 1000);
    return () => clearInterval(id);
  }, []);

  if (trackingRendered.current <= 1 && loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Some thing went wrong!</p>;
  }
  return <>A fox jumped {data}</>;
}
export function C5(props: IProps) {
  const refreshInterval_Secs = 30;
  const [query] = useState(() =>
    genQuery(props.timeRange, 'c5', Math.random())
  );
  const [forceRefresh, setForceRefresh] = useState(0);

  const { loading, data, error } = useApi<number>(query, forceRefresh);

  const trackingRendered = useRef(0);
  useEffect(() => {
    trackingRendered.current++;
  });

  useEffect(() => {
    const id = setInterval(() => {
      setForceRefresh((pre) => ++pre);
    }, refreshInterval_Secs * 1000);
    return () => clearInterval(id);
  }, []);

  if (trackingRendered.current <= 1 && loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Some thing went wrong!</p>;
  }
  return <>{data} is king</>;
}
