import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import ReactBD from './works/ReactBD'
import Google from './works/Google'
import Apple from './works/Apple'
import Amazon from './works/Amazon'
import Splash from './works/Splash'

const Experience = () => {
    const [workReactBD, setWorkReactBD] = useState(true)
    const [workAmazon, setWorkAmazon] = useState(false)
    const [workApple, setWorkApple] = useState(false)
    const [workGoogle, setWorkGoogle] = useState(false)
    const [workSplash, setWorkSplash] = useState(false)

    const handleReactbd = () => {
        setWorkAmazon(false);
        setWorkApple(false);
        setWorkGoogle(false);
        setWorkReactBD(true);
        setWorkSplash(false)
    }
    const handleGoogle = () => {
        setWorkAmazon(false);
        setWorkApple(false);
        setWorkGoogle(true);
        setWorkReactBD(false);
        setWorkSplash(false)
    }
    const handleApple = () => {
        setWorkAmazon(false);
        setWorkApple(true);
        setWorkGoogle(false);
        setWorkReactBD(false);
        setWorkSplash(false)
    }

    const handleSplash = () => {
        setWorkAmazon(false);
        setWorkApple(false);
        setWorkGoogle(false);
        setWorkReactBD(false);
        setWorkSplash(true)
    }

    const handleAmazon = () => {
        setWorkAmazon(true);
        setWorkApple(false);
        setWorkGoogle(false);
        setWorkReactBD(false);
        setWorkSplash(false)
    }



  return (
      <section
          id="experience"
          className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'
      >
          <SectionTitle
              title='Where I have Worked'
              titleNo='02'
          />
          <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
              <ul className='md:w-32 flex flex-col'>
                  <li
                      onClick={handleReactbd}
                      className={`${
                          workReactBD
                              ? "border-l-textGreen text-textGreen"
                              : "border-l-hoverColor text-textDark"
                          } border-l-2 bg-transparent hover hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                      ReactBd
                  </li>                  
                  <li
                      onClick={handleGoogle}
                      className={`${
                          workGoogle
                              ? "border-l-textGreen text-textGreen"
                              : "border-l-hoverColor text-textDark"
                          } border-l-2 bg-transparent hover hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                      Google
                  </li>                  
                  <li
                      onClick={handleApple}
                      className={`${
                          workApple
                              ? "border-l-textGreen text-textGreen"
                              : "border-l-hoverColor text-textDark"
                          } border-l-2 bg-transparent hover hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                      Apple
                  </li>                  
                  <li
                      onClick={handleSplash}
                      className={`${
                          workSplash
                              ? "border-l-textGreen text-textGreen"
                              : "border-l-hoverColor text-textDark"
                          } border-l-2 bg-transparent hover hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                      Splash
                  </li>                  
                  <li
                      onClick={handleAmazon}
                      className={`${
                          workAmazon
                              ? "border-l-textGreen text-textGreen"
                              : "border-l-hoverColor text-textDark"
                          } border-l-2 bg-transparent hover hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                      Amazon
                  </li>                  
              </ul>
              {workAmazon && <Amazon />}
              {workApple && <Apple/>}
              {workGoogle && <Google/>}
              {workReactBD && <ReactBD />}
              {workSplash && <Splash/>}
              
          </div>
      </section>
  )
}

export default Experience