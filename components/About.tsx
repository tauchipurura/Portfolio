import React from 'react'
import SectionTitle from './SectionTitle'
import { AiFillThunderbolt } from "react-icons/ai"
import Image from 'next/image'
// import { profile } from '../public/assets/images/profileImg.jpg'
import { tau} from '@/public/assets'


const About = () => {
  return (
      <section
          id="about"
          className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
      >
          <SectionTitle
              title="About Me"
              titleNo="01"
          />
          <div className='flex flex-col lgl:flex-row gap-16'>
              <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum provident et laboriosam iste asperiores atque. Laudantium vitae, dolor tenetur.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus blanditiis ad beatae sunt dolorem.<span className='text-textGreen'> Error asperiores dolor minus minima? Blanditiis ducimus ut nemo culpa beatae a,</span> est voluptate non.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisem veritatis voluptate molestiae atque, iure doloremque voluptas?<span className='text-textGreen'> Temporibus tempora, enim dolores inventore officiis illo? Expedita veritatis</span> voluptate quod quae, consectetur temporibus minus reprehenderit possimus?</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quis repellat non corporis voluptas, dolore pariatur id, cum tempore unde iste similique.</p>
                  <p>Here are a few technologies I have been woring with recently</p>

                  <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2'>
                      <li className='flex items-center gap-2'>
                          <span className='text-textGreen'><AiFillThunderbolt /></span>
                          JavaScript (ES6+)
                      </li>
                      <li className='flex items-center gap-2'>
                          <span className='text-textGreen'><AiFillThunderbolt /></span>
                          Next.js
                      </li>
                      <li className='flex items-center gap-2'>
                          <span className='text-textGreen'><AiFillThunderbolt /></span>
                          React
                      </li>
                      <li className='flex items-center gap-2'>
                          <span className='text-textGreen'><AiFillThunderbolt /></span>
                          TypeScript
                      </li>
                      <li className='flex items-center gap-2'>
                          <span className='text-textGreen'><AiFillThunderbolt /></span>
                          Express.js
                      </li>
                      <li className='flex items-center gap-2'>
                          <span className='text-textGreen'><AiFillThunderbolt /></span>
                          MongoDb
                      </li>
                      <li className='flex items-center gap-2'>
                          <span className='text-textGreen'><AiFillThunderbolt /></span>
                          Tailwindcss
                      </li>
                      <li className='flex items-center gap-2'>
                          <span className='text-textGreen'><AiFillThunderbolt /></span>
                          C#
                      </li>
                  </ul>
                  
              </div>
              <div className='w-full lgl:w-1/3 h-80 relative group'>
                  <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                      <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                          <Image
                                className='rounded-lg h-full object-cover'
                                src={tau}
                              alt='tau'
                              height="385"
                              width="380"
                          />
                          <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
                      </div>                          
                  </div>
                    <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 '>
                              
                          </div>
              </div>
          </div>
          
    </section>
  )
}

export default About