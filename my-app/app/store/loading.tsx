export default function Loading() {
    const skeletons = 9;
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 font-sans animate-pulse">
            <div className="h-9 w-48 bg-gray-200 rounded-mb mb-6"></div> 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: skeletons}).map((_, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-5 h-55 w-90 flex flex-col justify-between bg-gray-50 shadow-sm"
                    >
                        <div>
                            <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
                            <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 w-full bg-gray-200 rounded mb-1"></div>
                            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <div className="h-7 w-16 bg-gray-200 rounded"></div>
                            <div className="h-9 w-24 bg-gray-200 rounded"></div>
                        </div>

                    </div>
                ))}
            </div>


        </div>
    )
}