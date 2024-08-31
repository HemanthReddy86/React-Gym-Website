import React from 'react';
import './JoinSection.css';
import container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';
import PurpleBtn from '../PurpleBtn/PurpleBtn';

function JoinSection() {
  return (
    <div className='join-section py-5 text-light'>
      <container className='h-100'>
        <div className='h-100 d-flex flex-column align-items-center justify-content-center'>
          <motion.h2
          className='section-title text-capitalize fw-bold'
          initial= {{ opacity:0, x: -300 }}
          whileInView={{ opacity:1, x: 0 }}
          transition={{ duration:1 }}
          >
            <span className='text-purple'>Shape</span> your body
          </motion.h2>
          <motion.p
          className='text-center w-75'
          initial= {{ opacity:0, x: 300 }}
          whileInView={{ opacity:1, x: 0 }}
          transition={{ duration:1 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure laudantium impedit soluta, molestias enim totam vitae magni quam quas? Fugiat eos reprehenderit sed natus. Ad expedita totam velit? Et?
          </motion.p>
          <motion.div
          initial= {{ opacity:0, x: -200 }}
          whileInView={{ opacity:1, x: 0 }}
          transition={{ duration:1 }}
          >
            <PurpleBtn btnTitle='Join now' />
          </motion.div>
        </div>

      </container>
    </div>
  )
}

export default JoinSection;