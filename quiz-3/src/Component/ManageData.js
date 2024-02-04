import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ManageDataGame = () => {
    // State untuk menyimpan data game dari API
    const [data, setData] = useState(null)

    // State untuk menyimpan data yang akan di-input atau di-update
    const [input, setInput] = useState(
        {
            image_url: "",
            name: "",
            category: "",
            description: "",
            price: 0,
            rating: 0,
            release_year: 2009,
            size: 0,
            is_android_app: 0,
            is_ios_app: 0
        }

    )

    // Indikator untuk fetching data
    const [fetchStatus, setFetchStatus] = useState(true)

    // Indikator untuk menyimpan ID data yang akan di-edit
    const [currentId, setCurrentId] = useState(-1)

    // Effect untuk fetching data dari API
    useEffect(() => {
        // Fetch data hanya jika fetchStatus bernilai true
        if (fetchStatus === true) {
            axios.get("https://backendexample.sanbercloud.com/api/mobile-apps")
                .then((res) => {
                    setData([...res.data])
                })
                .catch((error) => {
                })
            setFetchStatus(false)
        }

    }, [fetchStatus, setFetchStatus])

    // Handler untuk meng-update state input sesuai dengan nilai input pengguna
    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        // Menggunakan spread operator untuk mempertahankan nilai-nilai sebelumnya
        if (name === "image_url") {
            setInput({ ...input, image_url: value })
        } else if (name === "name") {
            setInput({ ...input, name: value })
        } else if (name === "category") {
            setInput({ ...input, category: value })
        } else if (name === "description") {
            setInput({ ...input, description: value })
        } else if (name === "price") {
            setInput({ ...input, price: value })
        } else if (name === "rating") {
            setInput({ ...input, rating: value })
        } else if (name === "release_year") {
            setInput({ ...input, release_year: value })
        } else if (name === "size") {
            setInput({ ...input, size: value })
        } else if (name === "is_android_app") {
            setInput({ ...input, is_android_app: value })
        } else if (name === "is_ios_app") {
            setInput({ ...input, is_ios_app: value })
        }
    }

    // Handler untuk meng-handle submit form
    const handleSubmit = (event) => {
        event.preventDefault()

        // Mendapatkan nilai input yang akan dikirim
        let {
            image_url, name, category, description, price, rating, release_year, size, is_android_app, is_ios_app
        } = input

        if (currentId === -1) {
            // Membuat data baru jika currentId masih -1
            axios.post('https://backendexample.sanbercloud.com/api/mobile-apps', { image_url, name, category, description, price, rating, release_year, size, is_android_app, is_ios_app })
                .then((res) => {
                    console.log(res)
                    setFetchStatus(true)
                })
        } else {
            // Meng-update data jika currentId tidak -1
            axios.put(`https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`, { image_url, name, category, description, price, rating, release_year, size, is_android_app, is_ios_app })
                .then((res) => {
                    setFetchStatus(true)
                })
        }

        // Mengembalikan currentId ke -1 setelah submit
        setCurrentId(-1)

        // Mengosongkan nilai input setelah submit
        setInput(
            {
                image_url: "",
                name: "",
                category: "",
                description: "",
                price: 0,
                rating: 0,
                release_year: 2009,
                size: 0,
                is_android_app: 0,
                is_ios_app: 0
            }
        )
    }

    // Handler untuk meng-handle penghapusan data   
    const handleDelete = (event) => {

        let ID_MOBILE_APPS = parseInt(event.target.value)

        // Konfirmasi penghapusan
        const isConfirmed = window.confirm("Apakah Anda yakin ingin menghapus data ini?");

        if (isConfirmed) {
            // Menghapus data jika konfirmasi diterima
            axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`)
                .then((res) => {
                    setFetchStatus(true)
                })
            console.log("Data Berhasil Dihapus");
        } else {
            return;
        }
    }

    // Handler untuk meng-handle pengeditan data
    const handleEdit = (event) => {
        let ID_MOBILE_APPS = parseInt(event.target.value)

        // Menyimpan ID data yang akan di-edit ke dalam currentId
        setCurrentId(ID_MOBILE_APPS)

        // Fetch data yang akan di-edit
        axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`)
            .then((res) => {
                let data = res.data

                // Meng-update nilai input dengan nilai data yang akan di-edit
                setInput(
                    {
                        image_url: data.image_url,
                        name: data.name,
                        category: data.category,
                        description: data.description,
                        price: data.price,
                        rating: data.rating,
                        release_year: data.release_year,
                        size: data.size,
                        is_android_app: data.is_android_app,
                        is_ios_app: data.is_ios_app
                    }
                )

            })

    }

    // Fungsi untuk membatasi panjang teks
    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    }

    return (
        <>
            <div className='mx-20 my-10 p-20 rounded-10 shadow-md'>
                <span className='font-bold text-2xl'>Manage Data</span><br /><br />
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-white uppercase bg-purple-500">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kategori
                                </th>
                                <th scope="col" className="px-6 py-3 overflow-y-hidden">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rating
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Release Year
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Size
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Is_Android_App
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Is_IOS_App
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {data !== null && data.map((res, index) => {
                                return (
                                    <tr key={res.id} className="odd:bg-white even:bg-gray-50 border-b">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {index + 1}
                                        </th>
                                        <td className="px-6 py-4">
                                            {res.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {res.category}
                                        </td>
                                        <td className="px-6 py-4 overflow-hidden whitespace-nowrap">
                                            {truncateText(res.description, 20)}
                                        </td>
                                        <td className="px-6 py-4">
                                            {res.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            {res.rating}
                                        </td>
                                        <td className="px-6 py-4">
                                            {res.release_year}
                                        </td>
                                        <td className="px-6 py-4">
                                            {res.size}
                                        </td>
                                        <td className="px-6 py-4">
                                            {res.is_android_app}
                                        </td>
                                        <td className="px-6 py-4">
                                            {res.is_ios_app}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={handleEdit} value={res.id}>Edit</button>
                                            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={handleDelete} value={res.id}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='mx-20 my-10 p-20 rounded-10 shadow-md'>
                <span className='font-bold text-2xl'>Create Data</span><br /><br />
                <form className="w-full mx-auto" onSubmit={handleSubmit}>
                    <span className='font-bold'>Gambar Data Game</span>
                    <hr /><br />
                    <div className="mb-5">
                        <label
                            htmlFor="image_url"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Image URL
                        </label>
                        <input
                            type="text"
                            name="image_url"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.image_url}
                        />
                    </div>
                    <span className='font-bold'>Date Game</span>
                    <hr /><br />
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Nama
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.name}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="category"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.category}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Description
                        </label>
                        <input
                            type="textarea"
                            name="description"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.description}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.price}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="rating"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Rating
                        </label>
                        <input
                            type="number"
                            name="rating"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.rating}
                            max={5}
                            min={0}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="release_year"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Release Year
                        </label>
                        <input
                            type="number"
                            name="release_year"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.release_year}
                            min={2009}
                            max={2023}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="size"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Size
                        </label>
                        <input
                            type="number"
                            name="size"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.size}
                        />
                    </div>
                    <span className='font-bold'>Jenis Perangkat</span>
                    <hr /><br />
                    <div className="mb-5">
                        <label
                            htmlFor="is_android_app"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Android ?
                        </label>
                        <input
                            type="number"
                            name="is_android_app"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.is_android_app}
                            max={1}
                            min={0}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="is_ios_app"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            IOS ?
                        </label>
                        <input
                            type="number"
                            name="is_ios_app"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.is_ios_app}
                            max={1}
                            min={0}
                        />
                    </div>
                    <button
                        type={"submit"}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default ManageDataGame