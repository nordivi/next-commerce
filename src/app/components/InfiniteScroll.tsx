'use client'
import { ProductType } from "@/types/ProductType"
import { useState } from "react";
import Product from "./Product";
import {useInView} from 'react-intersection-observer'

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
    return (
        <>
        {products.map((product) =>  (
            <Product key={product.id} product={product}/>
          ))}

        </>
    )
}

export default InfiniteScroll