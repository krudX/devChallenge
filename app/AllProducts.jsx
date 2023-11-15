'use client'

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

// async function getData() {
//     const res = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')

//     if (!res.ok) {
//         throw new Error('Failed to fetch data')
//     }

//     return res.json()
// }

export default function ProductTabs() {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
            .then((res) => res.json())
            .then((data) => {
            setData(data)
            setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    // const data = await getData();
    // console.log(data);

    return (
        <div className="product-grid grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {
            data.map(el => {
                return <ProductCard key={el.id} {...el} />
            })
            }
        </div>
    )
}