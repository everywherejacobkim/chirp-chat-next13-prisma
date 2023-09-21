"use client";
import React, {useState} from "react";
import Avatar from "../avatar/Avatar";

export function NewChirpForm() {
    const [inputValue, setInputValue] = useState("");
    return (
        <form className="flex flex-col gap-2 border-b px-4 py-2">
            <div className="flex gap-4">
                {/* <Avatar userId={currentUser?.id as string} isLarge /> */}
                <Avatar userId="1" isLarge />
                <textarea 
                className="flex-grow resize-none overflow-hidden p-2 outline-none rounded" 
                placeholder="Share your chirpy moments!"  
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <div className="flex justify-end">
                <button className="text-white fonr-bold px-4 py-2 bg-primary-30 rounded-lg">Chirp</button>
            </div>
        </form>
    )
}