import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// icons
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
//styles
import './Project.scss';

const Project = ({title, description, link, img, live}) => {
    return (
        <li className='project' key={title}>
            <div className='project__wrapper'>
                <h3 className='project__title'>{title}</h3>
                <p className='project__description'>{description}</p>
                <a href={link} target='_blank' rel='noreferrer'  className='project__link'>
                    <FontAwesomeIcon className='project__link-icon' icon={faGithub} />
                    Code
                </a>
            </div>
            {/*SOMETHING IS WRONG HERE XDDD. This should be live but i dont why why i still get error "live is not defined"*/}
            <a href={live} target='_blank' rel='noreferrer' className='project__img-wrapper project__img-wrapper--active'>
                <img src={img} alt={title} className='project__img' />
                <FontAwesomeIcon className='project__glass' icon={faSearch} />
            </a>
        </li>
    );
};

export default Project;