import { useState } from 'react';

const useFetchList = () => {

   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

   const fetchData = async (url) => {
      try {
         setIsLoading(true);
         const token = JSON.parse(sessionStorage.getItem("credencial")).token;
         const response = await fetch(`${url}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });
         if (!response.ok) {
            throw new Error('Erro ao buscar os dados da API');
         }
         const jsonData = await response.json();
         setData(jsonData);
      } catch (error) {
         setError(error.message);
      } finally {
         setIsLoading(false);
      }
   };

   return { data, fetchData, isLoading, error };
};

export default useFetchList;