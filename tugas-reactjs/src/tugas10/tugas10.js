import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Tugas10ReactJS = () => {
    const [data, setData] = useState(null)

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

    useEffect(() => {
        axios.get("https://backendexample.sanbercloud.com/api/student-scores")
            .then((res) => {
                setData([...res.data])
            })
            .catch((error) => {
            })
    }, [])

    return (
        <>
            <div className='mx-20 my-10 p-20 rounded-10 shadow-md'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-white uppercase bg-purple-500 dark:bg-gray-700 dark:text-gray-400">
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
                            </tr>
                        </thead>
                        <tbody>
                            {data !== null && data.map((res, index) => {
                                return (
                                    <tr key={res.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Tugas10ReactJS;