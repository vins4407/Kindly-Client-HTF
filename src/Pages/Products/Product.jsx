import React from 'react';
import moment from 'moment';
import { TbHeart } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, title, image, price, location, createdAt } = product;
    return (
        <Link to={`products/${_id}`}>
            <div className="card border rounded-md relative bg-base-100">
                <figure><img className='w-40 h-40 pt-2 object-contain' src={image} alt={title} /></figure>
                <div className="card-body gap-1 p-4">
                    <p className='m-0 p-0 mb-1 text-accent text-sm'>{title.length > 30 ? title.slice(0, 30) + '...' : title}</p>
                    <div className='text-xs flex justify-between text-accent'>
                        <span>{location.length > 16 ? location.slice(0, 16) + '...' : location}</span>
                        <span>{moment(createdAt).format('ll')}</span>
                    </div>
                </div>
                <TbHeart className='w-6 h-6 absolute top-0 right-0 m-2 cursor-pointer' title='Favourite' />
            </div>
        </Link>
    );
};

export default Product;