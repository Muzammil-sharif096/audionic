import React from 'react'
import Card1 from './Card1'
import big_data from '../../Data'
function BlogSection1() {
    return (
        <div className='bg-[#212529] px-4 py-12 '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    big_data.map((ele) => {
                        return (
                            <Card1 data={ele} />

                        )
                    })
                }
            </div>
        </div>
    )
}
export default BlogSection1
