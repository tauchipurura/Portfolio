import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import { motion } from "framer-motion";

const Archive = () => {
    const [showMore, setShowMore] = useState(false)

  return (
      <div className='max-w-contentContainer mx-auto px-4 py-24 '>
          <div className='w-full flex flex-col items-center'>
              <h2 className='text-3xl font-titleFont font-semibold'>Other Noteworthy Projects</h2>
              <p className='text-sm font-titleFont text-textGreen'>
                  view the archive
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
              <ArchiveCard
                  title="Educare English Learning Academy"
                  des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam earum similique harum saepe magni sequi iste consequatur quaerat voluptate ratione, vel, ex eaque libero ea."
                  listItem={["Reactjs", "Tailwindcss CSS", "getform"]}
                  link="#"
              />
              <ArchiveCard
                  title="Security Blog"
                  des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam earum similique harum saepe magni sequi iste consequatur quaerat voluptate ratione, vel, ex eaque libero ea."
                  listItem={["Reactjs", "Tailwindcss CSS", "getform"]}
                  link="#"
              />
              <ArchiveCard
                  title="React db web development"
                  des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam earum similique harum saepe magni sequi iste consequatur quaerat voluptate ratione, vel, ex eaque libero ea."
                  listItem={["Reactjs", "Tailwindcss CSS", "getform"]}
                  link="#"
              />
              <ArchiveCard
                  title="Amzon clone"
                  des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam earum similique harum saepe magni sequi iste consequatur quaerat voluptate ratione, vel, ex eaque libero ea."
                  listItem={["Reactjs", "Tailwindcss CSS", "getform"]}
                  link="#"
              />
              <ArchiveCard
                  title="Dynamic Respo portfolio"
                  des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam earum similique harum saepe magni sequi iste consequatur quaerat voluptate ratione, vel, ex eaque libero ea."
                  listItem={["Reactjs", "Tailwindcss CSS", "getform"]}
                  link="#"
              />
              <ArchiveCard
                  title="Eecommerce shopping store"
                  des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam earum similique harum saepe magni sequi iste consequatur quaerat voluptate ratione, vel, ex eaque libero ea."
                  listItem={["Reactjs", "Tailwindcss CSS", "getform"]}
                  link="#"
              />              
              
              {
                  showMore && (
                      <>
                          <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{delay: 0.1}}
                          >   
                            <ArchiveCard
                                title="Online shopping center"
                                des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam earum similique harum saepe magni sequi iste consequatur quaerat voluptate ratione, vel, ex eaque libero ea."
                                listItem={["Reactjs", "Tailwindcss CSS", "getform"]}
                                link="#"
                            />
                          </motion.div>
                          <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{delay: 0.2}}
                          > 
                            <ArchiveCard
                                title="Personalisd blog"
                                des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam earum similique harum saepe magni sequi iste consequatur quaerat voluptate ratione, vel, ex eaque libero ea."
                                listItem={["Reactjs", "Tailwindcss CSS", "getform"]}
                                link="#"
                                />
                          </motion.div>
                          <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{delay: 0.3}}
                          > 
                            <ArchiveCard
                                title="Todi application"
                                des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam earum similique harum saepe magni sequi iste consequatur quaerat voluptate ratione, vel, ex eaque libero ea."
                                listItem={["Reactjs", "Tailwindcss CSS", "getform"]}
                                link="#"
                                />
                            </motion.div>
                      </>
                  )
              }
          </div>
          <div className='mt-12 flex items-center justify-center'>
              {
                  showMore ? <button
                  onClick={() => setShowMore(false)}
                  className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                  Show Less
              </button> : <button
                  onClick={() => setShowMore(true)}
                  className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
                  Show More
              </button>
              }
          </div>
    </div>
  )
}

export default Archive