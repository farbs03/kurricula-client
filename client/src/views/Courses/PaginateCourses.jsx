import React, {useState, useEffect} from 'react'

const PaginateCourses = ({data, itemsPerPage, pageNumber, onChange}) => {

    const [pages, setPages] = useState([])

    function splitData() {
        let page = []
        let newPages = []

        let remainder = data.length % itemsPerPage

        for(let i = 0; i < data.length; i++) {
            if(page.length < itemsPerPage) {
                page.push(data[i])
            }
            else {
                newPages.push(page)
                page = [data[i]]
            }
        }
        let lastPage = data.slice(-remainder)
        newPages.push(lastPage)
        setPages(newPages)
    }

    useEffect(() => {
        splitData()
    }, [])

    return (
        <div className='flex items-center justify-center'>
            {Array.from({length: pages.length}).map(() => (
                <button className='bg-emerald-500 rounded-lg text-white text-sm w-6 h-6 mx-1'>
                    1
                </button>
            ))}
        </div>
    )
}

export default PaginateCourses
