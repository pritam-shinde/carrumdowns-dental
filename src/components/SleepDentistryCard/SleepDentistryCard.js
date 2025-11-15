"use client"

import { Card, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";

const SleepDentistryCard = ({ height, cardMedia, cardMediaAlt, mediaHeight,mediaWidth, navlink, anchor, link, cardText, cardTitle, bgColor, cardList, icon, offerBtn, price, small, blogMedia, cls, date }) => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    return (
        <>
            <Card className={`shadow grow ${cls}`} style={{ height: height && width > 900 ? height : "auto", position: "relative" }}>
                {
                    cardMedia ? <CardMedia component="img" image={cardMedia.src} alt={cardMediaAlt} width={mediaWidth ? mediaWidth : "420"}  height={mediaHeight ? mediaHeight : "400"} /> : null
                }
                {
                    blogMedia ? <CardMedia component="img" image={blogMedia} alt={cardMediaAlt} height={mediaHeight ? mediaHeight : "200"} /> : null
                }
            </Card>
        </>
    )
}

export default SleepDentistryCard