import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Tugas11ReactJS = () => {
    const [data, setData] = useState(null)

    const [input, setInput] = useState(
        {
            name: "",
            course: "",
            score: 0
        }

    )

    const handleIndexScore = (score) => {
        if (score >= 80) {
            return 'A';
        } else if (score >= 70) {
            return 'B';
        } else if (score >= 60) {
            return 'C';
        } else if (score >= 50) {
            return 'D';
        } else {
            return 'E';
        }
    };

    const [fetchStatus, setFetchStatus] = useState(true)

    useEffect(() => {
        if (fetchStatus === true) {
            axios.get("https://backendexample.sanbercloud.com/api/student-scores")
                .then((res) => {
                    setData([...res.data])
                })
                .catch((error) => {
                })
            setFetchStatus(false)
        }

    }, [fetchStatus, setFetchStatus])

    const handleInput = (event) => {

        let name = event.target.name
        let value = event.target.value

        if (name === "name") {
            setInput({ ...input, name: value })
        } else if (name === "course") {
            setInput({ ...input, course: value })
        } else if (name === "score") {
            setInput({ ...input, score: value })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let {
            name, course, score
        } = input

        axios.post('https://backendexample.sanbercloud.com/api/student-scores', { name, course, score })
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
            })

        setInput(
            {
                name: "",
                course: "",
                score: 0
            }
        )
    }

    const handleDelete = (event) => {

        let idData = parseInt(event.target.value)

        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
            .then((res) => {
                setFetchStatus(true)
            })

    }

    return (
        <>
            <div className='mx-20 my-10 p-20 rounded-10 shadow-md'>
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
                                    Mata Kuliah
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nilai
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Index Nilai
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
                                            {res.course}
                                        </td>
                                        <td className="px-6 py-4">
                                            {res.score}
                                        </td>
                                        <td className="px-6 py-4">
                                            {handleIndexScore(res.score)}
                                        </td>
                                        <td className="px-6 py-4">
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
                <form className="w-full mx-auto" onSubmit={handleSubmit}>
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
                            value={input.nama}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="course"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Mata Kuliah
                        </label>
                        <input
                            type="text"
                            name="course"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.course}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="score"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Nilai
                        </label>
                        <input
                            type="number"
                            name="score"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required=""
                            onChange={handleInput}
                            value={input.score}
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

export default Tugas11ReactJS