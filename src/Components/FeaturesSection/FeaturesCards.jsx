import React from 'react';
import Card  from 'react-bootstrap/Card';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FeaturesCards(props) {
  return (
    <motion.div
    className='col-lg-6'
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    >
        <card className='bg-black text-light'>
            <Card.Body className='d-flex flex-column align-items-center'>
                <FontAwesomeIcon icon={props.itemIcon} style={{ 
                    color: '#0197FC' }} />
                    <Card.Title className='text-center text-capitalize fw-bold my-3'>{props.itemTitle}</Card.Title>
                    <Card.Text className='text-center'>{props.itemDescription}</Card.Text>
            </Card.Body>

        </card>
    </motion.div>
  )
}

export default FeaturesCards;