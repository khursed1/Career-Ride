import React from 'react'

const SummaryPreview = ({ resumeInfo }) => {
    return (
        <div>
            <div className='text-center'>
                <div className=' inline-block'>
                    <h2 className='font-bold text-sm mb-1'
                        style={{
                            color: resumeInfo?.headingColor
                        }}>Professional Summary</h2>
                    <hr  className='border-[2px] border-gray-600 w-[80%] mx-auto rounded-xl'/>
                </div>
                <p className='text-xs'>
                    {resumeInfo?.summary}
                </p>
            </div>
        </div>
    )
}

export default SummaryPreview;