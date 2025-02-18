import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import react from '../images/react.png'
import javascript from '../images/javascript.png'
import github from '../images/github.png'
import tailwind from '../images/tailwind.png'
import node from '../images/node.png'
import mysql from '../images/mysql.png'
import php from '../images/php.png'

const Experience = () => {

    const techs =[
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: mysql,
            title: 'MySql',
            style: 'shadow-orange-500'
        },
        {
            id: 7,
            src: node,
            title: 'Node',
            style: 'shadow-yellow-500'
        },
        {
            id: 8,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 9,
            src: php,
            title: 'PHP',
            style: 'shadow-blue-600'
        },
    ]

    return (
        <div 
        name='experience' 
        className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'
        >
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='mt-20'>
                    <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>
                        Experience
                    </p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>
            
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 
                gap-8 text-center py-8 px-12 sm:px-0'>

                    {techs.map(({id, src, title, style}) =>(
                        <div 
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500
                            py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt=""  className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;
