import React from "react";
import { useParams, Link } from 'react-router-dom';

import { eventData } from '../../constant/eventData'




const EventDetails = () => {
    const {id} = useParams();
    console.log(id);

    return (
        <div>haha</div>
    )
};

export default EventDetails;