import React from 'react'

const GridLayout = () => {
    return (
        <div className="flex justify-center bg-gray-100">
            {/* Container for all content */}
            <div className="max-w-container w-full flex">
                {/* Auxiliary Space (Left) */}
                <div className="w-[300px] hidden lg:block bg-blue-200">
                    {/* Add logos, menu, patterns */}
                </div>

                {/* Main Grid */}
                <div className="h-screen flex-1 max-w-grid mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                    <div className="bg-white p-4 shadow">Column 1</div>
                    <div className="bg-white p-4 shadow">Column 2</div>
                    <div className="bg-white p-4 shadow">Column 3</div>
                </div>

                {/* Auxiliary Space (Right) */}
                <div className="w-[300px] hidden lg:block bg-blue-200">
                    {/* Add scrolling or patterns */}
                </div>
            </div>
        </div>

    )
}

export default GridLayout