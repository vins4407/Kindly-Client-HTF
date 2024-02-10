import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { TbCameraPlus } from 'react-icons/tb';
import avatar from '../../assets/avatar.png';
import Btn from '../../components/Btn';
import { useAuth } from '../../contexts/AuthProvider';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AddDonation = () => {
    const { user } = useAuth();
    const [loading, isLoading] = useState(false);
    const navigate = useNavigate();
    const [getImage, setGetImage] = useState("");
    const [imageErr, setiImageErr] = useState(null);
    const onDrop = useCallback(acceptedFiles => {

        setGetImage(acceptedFiles[0]);
        setiImageErr(null);

    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        isLoading(true);
        if (!getImage) {
            setiImageErr("Image is required");
            return;
        }
        const formData = new FormData();
        
        const image = formData.append('image', getImage);
        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_APP_IMGBB_API_KEY}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                data.seller = { email: user.email, name: user.displayName };
                data.image = imgData.data.display_url
                // saving product to the db
                fetch(`${import.meta.env.VITE_APP_API_URL}/products`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(result => {
                        toast.success(data.title.slice(0, 10) + ' is added successfully');
                        navigate('/');
                        isLoading(false);
                    })
                    .catch(err => {
                        console.log(err);
                        isLoading(false);
                    });
            })
            .catch(err => {
                console.log("This is error:" + err);
            });
    }

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Call API to get city based on latitude and longitude
                fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
                    .then(response => response.json())
                    .then(data => {
                        const city = data.city;
                        console.log("Current city:", city);
                        // Now you can do whatever you want with the city, such as updating the input field value
                        document.getElementById('locationInput').value = city;
                    })
                    .catch(error => console.error('Error fetching current location:', error));
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }


    return (
        <div className='w-11/12 md:w-8/12 lg:w-7/12 max-w-screen-xl mx-auto pb-20'>
            <h1 className='text-2xl font-bold text-center mb-5 mt-3'>POST YOUR DONATION</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-0 border border-gray-400 rounded">
                <div className='md:w-7/12 p-8 pb-3 md:pr-0'>
                    <h3 className='text-xl font-bold mb-2'>INCLUDE SOME DETAILS</h3>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Donation title *</span>
                        </label>
                        <input {...register('title', { required: true })} type="text" className="input input-bordered rounded-md border-gray-400" />
                        <small className='text-xs text-accent flex justify-between mt-1'>
                            <span>Mention the key features of your item (e.g. brand, model, age, type)</span>
                            <span>0 / 70</span>
                        </small>
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Description *</span>
                        </label>
                        <textarea {...register('desc', { required: true })} className="textarea textarea-bordered rounded-md h-28 border-gray-400"></textarea>
                        <small className='text-xs text-accent flex justify-between mt-1'>
                            <span>Include condition, features and reason for donating</span>
                            <span>0 / 4096</span>
                        </small>
                    </div>
                </div>

                <div className='border-t border-slate-400 pt-5 p-8 pb-3 md:pr-0'>
                <div className='md:w-7/12'>
                    <div className="form-control mb-5">
                        <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose a category:</h3>
                        <ul class="grid w-full gap-6 md:grid-cols-3">
                            <li>
                                <input type="radio" id="food-option" name="category" value="Food" class="hidden peer" required="" {...register("category")} />
                                <label for="food-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <div class="w-full text-lg font-semibold">Food</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="cloths-option" name="category" value="Cloths" class="hidden peer" {...register("category")} />
                                <label for="cloths-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <div class="w-full text-lg font-semibold">Cloths</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="books-option" name="category" value="Books" class="hidden peer" {...register("category")} />
                                <label for="books-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div class="block">
                                        <div class="w-full text-lg font-semibold">Books</div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

           
                <div className='border-t border-slate-400 pt-5 p-8 pb-3 md:pr-0'>
                    <div className='md:w-7/12'>
                        <div className="form-control mb-5">
                            <label className="label pl-0 mb-1">
                                <span className="label-text font-bold text-xl">UPLOAD PHOTOS</span>
                            </label>
                            <div className='h-32 w-32 hover:opacity-60 cursor-pointer flex items-center text-center border-2 border-black' {...getRootProps()}>
                                <input className='w-fit' {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <p>Drop here ...</p> :
                                        <p className='flex flex-col items-center text-sm'>
                                            {getImage ? getImage?.name : <>
                                                <TbCameraPlus className='w-8 h-8' />
                                                Add Photo
                                            </>}
                                        </p>
                                }
                            </div>
                            {
                                imageErr && <p className='text-red-500 text-sm mt-1'>Add a image</p>
                            }
                        </div>
                    </div>
                </div>
                <div className='border-t border-slate-400 pt-5 p-8 pb-3 md:pr-0'>
                    <div className='md:w-7/12'>
                        <div className="form-control mb-5">
                            <label className="label pl-0">
                                <span className="label-text font-bold text-xl">CONFIRM YOUR LOCATION</span>
                            </label>
                            <label className="label pl-0">
                                <span className="label-text">Location *</span>
                            </label>
                            <input
                                {...register('location', { required: true })}
                                type="text"
                                id="locationInput" // Add an ID to identify the input field
                                className="input input-bordered rounded-md border-gray-400"
                            />
                            {/* <label for="books-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                    <div class="w-full text-lg font-semibold">Books</div>
                                </div>
                            </label> */}

                            <button className='inline-flex items-center justify-between w-full p-5 mt-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700' onClick={getCurrentLocation}>Get Current Location</button>

                        </div>
                    </div>
                </div>
                <div className='border-t border-slate-400 pt-5 p-8 pb-3 md:pr-0'>
                    <div className='md:w-7/12'>
                        <div className="form-control mb-5">
                            <label className="label pl-0">
                                <span className="label-text font-bold text-xl">REVIEW YOUR DETAILS</span>
                            </label>
                            <div className='flex items-center gap-4'>
                                <div>
                                    {
                                        user?.photoURL
                                            ? <img className='w-20 mt-3 rounded-full' src={user?.photoURL} alt="" />
                                            : <img className='w-20 mt-3 rounded-full' src={avatar} alt="" />
                                    }
                                </div>
                                <div className='flex-1 mb-2'>
                                    <label className="label pl-0">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" className="w-full input input-bordered rounded-md border-gray-400" defaultValue={user?.displayName} disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-t border-slate-400 p-8 md:pr-0'>
                    <div className="form-control">
                        {
                            loading
                                ? <button className='btn-disabled w-fit p-3 px-4 rounded font-bold flex items-center gap-1'>Loading... <div className='w-6 h-6 border-4 border-dashed rounded-full animate-spin border-gray-400'></div></button>
                                : <Btn className="w-fit px-2">Post Now</Btn>
                        }
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddDonation;