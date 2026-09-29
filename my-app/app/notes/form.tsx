"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNoteForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter();

    const handleSUbmit = async (e: React.FormEvent) => {
        e.preventDefault(); //this prevents the browser from refreshing the page
        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:5204/api/notesapi", {
                method: "POST", // This tells the server i'm sending data IMPORTANT
                headers: {
                    "Content-Type": "application/json", // this tells C# to expect JSON
                },
                // these property names must match exactly what the c# model expects
                body: JSON.stringify({ Title: title, Content: content }),
            });

            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }

            // 1. Clear the form fields upon success
            setTitle("");
            setContent("");

            // 2. re-run your server component to fetch the updated list
            router.refresh();
        } catch (error) {
            console.error("Failed to post data:", error);
            alert("Failed to create note.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col gap-10 p-5">
            <h1 className="text-2xl">Create Your Note</h1>
            <form onSubmit={handleSUbmit} className="flex flex-col bg-white gap-4 max-w-md mb-8 rounded-xl">
                <input
                    type="text"
                    placeholder="Note Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="border border-zinc-200 p-2 rounded text-black bg-zinc-200"
                />
                <textarea
                    placeholder="Note Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    className="border border-zinc-200 p-2 rounded text-black h-32 bg-zinc-200"
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 mx-auto w-30 h-10 flex items-center justify-center rounded disabled:bg-gray-400"
                >
                    {isSubmitting ? "Saving..." : "Submit Note"}
                </button>
            </form>
        </div>
    )
}