import React, { useEffect, useState } from 'react';

const ReviewRow = ({ rew }) => {
    const { service, serviceName, customerName, email, phone } = rew;
const [view,setView]=useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
        .then(res=>res.json())
        .then(data=>setView(data))
    }, [service])
    return (
        <div>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="" alt="Avatar Tailwind CSS Component" />
                                {view.length}
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>
                <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </div>
    );
};

export default ReviewRow;