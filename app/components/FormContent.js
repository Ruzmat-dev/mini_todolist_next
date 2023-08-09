// "use client"
// import { getData, postData } from '@/api/data';
// import Input from '@/components/Input';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';


// const FormContent = () => {
//     const [count, setCount] = useState(0)
//     const { handleSubmit, register, formState: { errors } } = useForm()
//     const fetchData = async() => {
//         const res = await getData()
//         setCount(res.data.length)
//     }

//     useEffect(() => {
//         fetchData()
//     }, [])

//     const onSubmit = data => {
//         const new_data = {
//             id: count + 1,
//             title: data.title,
//             price: data.price,
//             weight: data.weight,
//             isActive: false
//         }
//         try {
//             const res = postData(new_data)
//             console.log(res)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//            <input type="text" {...register("title")} />
//            <input type="number" {...register("price")} />
//            <input type="number" {...register("weight")} />
//            <button>
//                 SUBMIT
//            </button>
//         </form>
//     );
// }

// export default FormContent;
