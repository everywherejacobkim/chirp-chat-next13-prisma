"use client";
import React, {useState} from "react";
import Avatar from "../avatar/Avatar";
import { useSession } from "next-auth/react";

export function NewChirpForm() {
    const [inputValue, setInputValue] = useState("");
    const { data: session } = useSession();

    return (
        <form className="flex flex-col gap-2 border-b px-4 py-2">
            <div className="flex gap-4">
                <Avatar userId={session?.user?.id} isLarge />
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