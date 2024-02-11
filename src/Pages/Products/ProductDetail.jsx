import moment from 'moment';
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Btn from '../../components/Btn';
import RoundSpinner from '../../components/RoundSpinner';
import { useAuth } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import axios from "axios";
import { Category } from '@mui/icons-material';

const ProductDetail = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [loader, setLoader] = useState(false);
    const { _id, title, image, category, desc, location, seller, createdAt, PhoneNumber } = useLoaderData();
    const handlePurchase = () => {
        setLoader(true);
        fetch(`${import.meta.env.VITE_APP_API_URL}/orders`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                productId: _id,
                buyer: { name: user.displayName, email: user.email }
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.upsertedCount > 0) {
                    toast.success("Purchased successfully!");
                    navigate("/mypurchase");
                }
                setLoader(false);
            })
            .catch(err => {
                setLoader(false);
                console.log(err);
            })
    }

    const handleChat = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/authenticate", { username: user.displayName, secret: user.displayName })
            .catch((e) => console.log("Auth Error", e))
            .then(
                navigate("/chat", { state: { username: user.displayName, secret: user.displayName } })

            );
    };
    
    
    // async function sendAlert () {
    //     const url = 'https://messages-sandbox.nexmo.com/v1/messages';
    //     const username = 'b7d94dcf';
    //     const password = 'za2wlS4GvGPEbRt6';
    
    //     const requestBody = {
    //         from: '14157386102',
    //         to: '918605634407',
    //         message_type: 'text',
    //         text: 'Thank you for your intrested in claiming the listed donation product, we will get in touch soon !',
    //         channel: 'whatsapp'
    //     };
    
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'Authorization': `Basic ${btoa(`${username}:${password}`)}`
    //         },
    //         body: JSON.stringify(requestBody)
    //     });
    
    //     const data = await response.json();
    //     console.log(data);
    // };

    // async function sendMessage() {
    //     const url = 'https://messages-sandbox.nexmo.com/v1/messages';
    //     const username = 'b7d94dcf';
    //     const password = 'za2wlS4GvGPEbRt6';
    
    //     const requestBody = {
    //         from: '14157386102',
    //         to: '918605634407',
    //         message_type: 'text',
    //         text: 'This is a WhatsApp Message sent from the Messages API',
    //         channel: 'whatsapp'
    //     };
    
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'Authorization': `Basic ${btoa(`${username}:${password}`)}`
    //         },
    //         body: JSON.stringify(requestBody)
    //     });
    
    //     const data = await response.json();
    //     console.log(data);
    // }
    
    // // Call the function to send the message
    // sendMessage();
    

    const sendAlert = async () => {
        setLoader(true); // Set loader to true to show loading spinner

        try {
            const response = await fetch('http://localhost:8000/execute-script', {
                method: 'POST'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error('Error executing script:', error);
            alert('Error executing script. Please try again later.');
        } finally {
            setLoader(false); // Reset loader after request completes
        }
    };


    return (
        <div className='flex px-5 md:px-14 bg-base-200 gap-5'>
            <div className=' flex flex-row flex-1 border mt-5 lg:mb-5 bg-base-100'>
                <div className='bg-black h-[430px]'>
                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img className=' object-contain w-full h-full' src={image} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className='p-5'>
                    <h1 className='text-lg font-bold mb-3'>Description</h1>
                    <p className='text-sm text-accent leading-6 whitespace-pre-line'>{desc}</p>
                    <h1 className='text-lg font-bold mb-3'>category</h1>
                    <p className='text-sm text-accent leading-6 whitespace-pre-line'>{category}</p>

                </div>
            </div>
            <div className=' flex flex-1 flex-col my-5'>
                <div className='mb-2 bg-white border rounded p-5'>
                    <h2 className='text-accent mt-1'>{title}</h2>
                    <div className='text-xs mt-6 flex justify-between text-accent'>
                        <span>{location}</span>
                        <span>{moment(createdAt).format('ll')}</span>
                    </div>
                </div>
                <div className='bg-white border rounded p-5'>
                    <h1 className='text-xl'>Donar description</h1>
                    <h2 className='mt-1 font-bold'>{seller.name}</h2>
                </div>
                {user?.email && (
                    <div className='flex gap-x-5 bg-white border rounded p-5'>
                        <div className='flex-1' onClick={handlePurchase}>
                            <Btn className="w-full"><span className='flex items-center justify-center gap-2'>{loader ? <>Claiming...<RoundSpinner className="fill-white" /> </> : 'Claim'}</span></Btn>
                        </div>
                        <div className='flex-1' onClick={handleChat}>
                            <Btn className="w-full"><span className='flex items-center justify-center gap-2'>{loader ? <>Strting Chat...<RoundSpinner className="fill-white" /> </> : 'Chat'}</span></Btn>
                        </div>

                    </div>
                )}
                <div>
                    <div>
                        <div className='flex-1' onClick={sendAlert}>
                            <Btn className="w-full">
                                <span className='flex items-center justify-center gap-2'>
                                    {loader ? <>Sending Alert...<RoundSpinner className="fill-white" /></> : 'Send Alert'}
                                </span>
                            </Btn>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProductDetail;