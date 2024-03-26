import React, { useState, useEffect } from "react";
import { sponsors } from "@/utils/data"
import Link from "next/link";


type Sponsor = {
    name: string,
    description: string,
    website: string,
    image: string,
}


export default function Sponsors() {
    return (
        <div className="grid place-items-center grid-cols-auto gap-2 h-full border w-full p-2 lg:p-8"
        >
            {sponsors.map((sponsor: Sponsor, index: number) => {
                return (
                    <div key={index} className="h-full w-full">
                        <h1>{sponsor.name}</h1>
                        <p>{sponsor.description}</p>
                        <Link href={sponsor.website} />

                    </div>
                )
            })}
        </div>
    )


}