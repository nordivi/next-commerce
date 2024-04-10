'use client'
import { ProductType } from "@/types/ProductType"
import { useCallback, useEffect, useState } from "react";
import Product from "./Product";
import {useInView} from 'react-intersection-observer'
import { fetchProducts } from "../actions";

function InfiniteScroll({
    initialProducts,
} : {initialProducts: ProductType[]}) {
    const [products, setProducts] = useState<ProductType[]>(initialProducts);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: false,
    });

    const lastProductId = products[products.length - 1]?.id

    const loadMoreProducts = useCallback( async () => {
        setIsLoading(true);
        const {formattedProducts, has_more} = await fetchProducts({lastProductId});
        if (formattedProducts){
            setProducts((prevProducts) => [...prevProducts,...formattedProducts]);
            setHasMore(has_more);
        }
        setIsLoading(false);
    },[lastProductId])

    useEffect(()=> {
        if (hasMore && !isLoading && inView) {
            loadMoreProducts()
        }
    }, [hasMore, inView, isLoading, loadMoreProducts]);

    if (!products){
        return <div>Carregando...</div>
    }

    return (
        <>
        {products.map((product) =>  (
            <Product key={product.id} product={product}/>
          ))}
          {hasMore && (
            <div ref={ref}>Carregando mais registros...</div>
          )}

        </>
    )
}

export default InfiniteScroll