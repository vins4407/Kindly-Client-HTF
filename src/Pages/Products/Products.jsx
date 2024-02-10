import React from 'react';
import { useSearch } from '../../contexts/SearchProvider';
import Product from './Product';
import Spinner from '../../components/Spinner';

const Products = () => {
    const { products, isLoading } = useSearch();
    if (isLoading) {
        return <Spinner />
    }
    return (
        <section className='bg-base-100 pt-10'>
            <div className='w-base mx-auto'>
                {
                    products.length < 1
                        ? <h1 className="text-4xl font-thin mt-10 mb-20 text-center">Nothings found!</h1>
                        : <>
                            <h2 className='text-2xl mb-4'>Recent Donation Listing</h2>
                            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                                {
                                    products?.map(product => <Product key={product._id} product={product} />)
                                }
                            </div>
                            <div className='py-20 flex justify-center'>
                                <button className="btn btn-outline rounded-md">Explore More</button>
                            </div>
                        </>
                }
            </div>
        </section>
    );
};

export default Products;