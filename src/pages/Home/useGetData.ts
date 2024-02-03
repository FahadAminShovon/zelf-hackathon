import { useEffect, useState } from 'react';
import { getContent } from '../../utils/apiRoutes';
import { TableData } from './data.types';

const defaultTableData: TableData = {
  page: 1,
  next: 2,
  data: null,
  total_contents: 0,
  page_size: 10,
};

export const useData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(defaultTableData);
  const [error, setError] = useState();

  console.log('data', data);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    fetch(getContent())
      .then((res) => res.json())
      .then((d) => {
        const typedData = d as TableData;
        if (!ignore) {
          setData(typedData);
        }
      })
      .catch((e) => {
        if (!ignore) {
          setError(e);
        }
      })
      .finally(() => {
        if (!ignore) {
          setIsLoading(false);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  // Return JSX based on data and error state
  return { data, error, isLoading };
};
