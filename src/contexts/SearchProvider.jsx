import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [searchText, setSearchText] = useState("");
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products', searchText],
        queryFn: () => fetch(`${import.meta.env.VITE_APP_API_URL}/products?search=${searchText}`)
            .then(res => {
                return res.json()
            })
        
    })
    console.log("this is data producst"+data)
    return (
        <SearchContext.Provider value={{ setSearchText, products, isLoading }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => useContext(SearchContext);

export default SearchProvider;