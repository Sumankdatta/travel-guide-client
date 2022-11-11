import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewRow from '../ReviewRow/ReviewRow';


const Review = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState({})

console.log(reviews)
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
            <h1>review {reviews.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Location</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                    

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Review;