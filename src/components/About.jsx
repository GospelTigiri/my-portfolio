import React from 'react'

const About = () => {
  return (
    <div name ='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
                
            <p className='mt-10'> I'm Tigiri Burabari Gospel I focus on creating clean, efficient, and scalable software that solves real-world problems. 
            I'm passionate about coding, but I also love the process of understanding user needs, designing intuitive interfaces, 
            and working with teams to deliver impactful solutions. I'm always striving to learn and grow, keeping up with the 
            latest trends in the tech world and continuously improving my craft.
            </p>
        
            <br />
       
            <h2 className='text-xl font-bold'>My approach</h2>
            <p>I take a brief description of your development methodology, e.g., agile, test-driven development (TDD), 
                continuous integration/continuous delivery (CI/CD) approach to software engineering. I believe in writing clean, 
                maintainable code, working collaboratively with cross-functional teams, and always putting the user experience first.
            </p>
    
            <br />
            <h2 className='text-xl font-bold'>Why I Love Software Engineering</h2>
                <p>What excites me about software development is the ability to continuously learn and solve challenging problems. 
                Whether it's optimizing an existing system, building a new feature, or exploring a new technology, 
                I'm driven by the ever-changing nature of this field and the opportunities it presents to create impactful solutions.
                </p>

            <br />
            <h2 className='text-xl font-bold'>Let's Connect!</h2>
                <p>
                    I'm always looking for opportunities to work with passionate individuals who share my love for software engineering. Feel free to reach out if you're interested in discussing projects, collaborating on new ideas, or simply meeting new people who share your interests.
                </p>
        </div>
    </div>
  )
}

export default About