import React, {useState} from 'react';
import {UilStar} from "@iconscout/react-unicons";

type RatingProps = {
    rating?: number
}

const Rating = (props: RatingProps) => {

    const ratingRender = () => {
        switch (props.rating) {
            case 1:
                return (
                    <>
                        <UilStar style={{color: "orange"}}/>
                        <UilStar />
                        <UilStar />
                        <UilStar />
                        <UilStar />
                    </>
                )
            case 2:
                return (
                    <>
                        <UilStar style={{color: "orange"}}/>
                        <UilStar style={{color: "orange"}}/>
                        <UilStar />
                        <UilStar />
                        <UilStar />
                    </>
                )
            case 3:
                return (
                    <>
                        <UilStar style={{color: "orange"}}/>
                        <UilStar style={{color: "orange"}}/>
                        <UilStar style={{color: "orange"}}/>
                        <UilStar />
                        <UilStar />
                    </>
                )
            case 4:
                return (
                    <>
                        <UilStar style={{color: "orange"}}/>
                        <UilStar style={{color: "orange"}}/>
                        <UilStar style={{color: "orange"}}/>
                        <UilStar style={{color: "orange"}}/>
                        <UilStar />
                    </>
                )
            case 5:
                return (
                    <>
                        <UilStar style={{color: "orange"}}/>
                        <UilStar style={{color: "orange"}}/>
                        <UilStar style={{color: "orange"}}/>
                        <UilStar style={{color: "orange"}}/>
                        <UilStar style={{color: "orange"}}/>
                    </>
                )
        }
        return (
            <>
                <UilStar />
                <UilStar />
                <UilStar />
                <UilStar />
                <UilStar />
            </>
        )
    }

    return (
        ratingRender()
    );
};

export default Rating;