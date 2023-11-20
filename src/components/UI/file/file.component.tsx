import React from 'react'

const File = () => {
    return (
        <>
            <input type="file" name="file" id="file" className="sr-only" />
            <label
                htmlFor="file"
                className="relative"
            >
                <span
                    className="btn"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                    Выбрать
                </span>
            </label>
        </>
    )
}

export default File