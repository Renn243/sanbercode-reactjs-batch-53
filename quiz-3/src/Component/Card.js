import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CardGame = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        // Fetch data saat komponen pertama kali di-mount
        axios.get("https://backendexample.sanbercloud.com/api/mobile-apps")
            .then((res) => {
                setData([...res.data])
            })
            .catch((error) => {
            })
    }, [])

    // Fungsi untuk mengubah ukuran bytes menjadi format yang lebih mudah dibaca
    const formatBytes = (bytes, decimals = 2) => {
        if (!+bytes) return '0 Bytes'

        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['MB', 'GB', 'TB']

        const i = Math.floor(Math.log(bytes) / Math.log(k))

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }

    // Fungsi untuk menentukan jenis sistem operasi (OS)
    const handleOS = (is_android_ap, is_ios_ap) => {
        if (is_android_ap === 1 && is_ios_ap === 0) {
            return 'Android';
        } else if (is_android_ap === 0 && is_ios_ap === 1) {
            return 'IOS';
        } else if (is_android_ap === 1 && is_ios_ap === 1) {
            return 'Android & IOS';
        }
    }

    return (
        <div className="bg-gray-200 p-5">
            <div className="container mx-auto mt-10">
                <h1 className="text-xl font-bold ">Find your data that you need!</h1>
            </div>
            <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">

                {data !== null && data.map((res) => {
                    const formatter = new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        minimumFractionDigits: 0,
                    });

                    return (
                        <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={res.image_url}
                                className="w-1/3 bg-cover bg-center bg-landscape"
                                alt='Game'
                            />
                            <div className="w-2/3 p-4">
                                <h1 className="text-gray-900 font-bold text-2xl line-clamp-1">
                                    {res.name}
                                </h1>
                                <small>{res.release_year}</small>
                                <p className="mt-2 text-gray-600 text-sm line-clamp-5">
                                    {res.description}
                                </p>
                                <div className=" item-center mt-2 text-gray-500">
                                    <span>{res.category + ', '}</span>
                                    <span>{formatBytes(res.size) + ', '}</span>
                                    <span>{handleOS(res.is_android_app, res.is_ios_app)}</span>
                                </div>
                                <div className="flex item-center justify-between mt-3">
                                    <h1 className="text-gray-700 font-bold text-xl">{res.price === 0 ? 'Free' : formatter.format(res.price)}</h1>
                                    <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                                        {res.rating + ' Rating'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardGame