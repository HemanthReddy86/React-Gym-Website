import React from 'react';
import './TrainSection.css';
import Container  from 'react-bootstrap/Container';
import { motion } from 'framer-motion';

function TrainSection() {
  return (
    <div className='train-section py-5 position-relative'>

    <motion.div
    className='bg-shape position-absolute'
    initial={{ opacity:0, x: -300 }}
    whileInView={{ opacity:1, x: 0 }}
    transition={{ duration: 1 }}
    >        
    </motion.div>
    <Container>
        <div className="row">
            <div className='col-md-12 col-lg-6 z-2'>
                <h2 className='text-start text-capitalize fw-bold'>Let's train together</h2>
                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugiat quos obcaecati voluptatum id ex provident, ullam ipsum odit reprehenderit veniam animi at et placeat, quidem numquam pariatur voluptas magnam?</p>
                <div className='d-flex'>
                    <h5 className='text-capitalize fw-semibold text-wrap'> call Us:</h5>
                    <a href='./' className='mx-2 text-decoration-none h5'>+919177598521</a>
                </div>
            </div>
        </div>
    </Container>
    </div>
  )
}

export default TrainSection;