import React from 'react';
import { Postsdata } from './Postsdata';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Posts() {
    const carrousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carrousel.current.scrollLeft += carrousel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
    }

    if (!Postsdata || !Postsdata.length) return null;

    return (
        <div className='flex justify-between items-center'>
            <button className=' w-[40px] h-[40px] flex items-center justify-center rounded-[50%] ' id='rigtset' onClick={handleRightClick}><ChevronLeft color='#808080'/></button>
           
            <div className='carrousel' ref={carrousel}>
                {Postsdata.map((item, index) => {
                    return (
                        <div key={index} id='tt' className='w-[156px] h-[259px] rounded-[20px] flex items-center justify-center flex-none'>
                            {item.name}
                        </div>
                    )
                })}
            </div>
            <button id='leftset' className='w-[40px] h-[40px] flex items-center justify-center rounded-[50%]' onClick={handleLeftClick}><ChevronRight color='#808080'/></button>
        </div>
    );
}
