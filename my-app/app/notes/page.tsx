import CreateNoteForm from "./form";
interface Note {
    title: string;
    content: string;
    id: number;
}

export default async function NotesDisplay()
{
    const response = await fetch("http://localhost:5204/api/notesapi");
    console.log("STATUS:", response.status, response.statusText);

    const data = await response.json();
    console.log("What did C# actually send?", data);

    const notes: Note[] = data;

    return (
        <div className="flex flex-col gap-10">
            <CreateNoteForm/>
            <h1>Your Notes</h1>

            {/* Responsive grid of notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {notes.map((note) => (
                    <div
                    key={note.id}
                    className="flex flex-col items-center p-5 border border-white text-white">
                        <h2>
                            {note.title}
                        </h2>
                        <p>{note.content}</p>
                    </div>
                ))}
            </div>
            
        </div>
        
    )
}