"use client";
import React, {useState} from "react";
import Avatar from "../avatar/Avatar";
import useCurrentUser from '@/libs/hooks/useCurrentUser';

export function NewChirpForm() {
    const [inputValue, setInputValue] = useState("");
    const { data: currentUser } = useCurrentUser();
    console.log("Test CurrentUser: ", currentUser)
    return (
        <form className="flex flex-col gap-2 border-b px-4 py-2">
            <div className="flex gap-4">
                <Avatar userId={currentUser?.data?.id} isLarge />
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