import React, { useState, useEffect } from "react";

export default function Contact() {
    return (
        <div className="grid place-items-center w-full gap-2">
            <form className="grid place-items-center gap-2 lg:w-1/2 w-auto">
                <h1 className="text-2xl">Contact Us</h1>
                <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"/>
                <textarea placeholder="Message" className="textarea textarea-bordered w-full max-w-xs"></textarea>
                <button className="btn">Submit</button>
            </form>

        </div>
    )
}