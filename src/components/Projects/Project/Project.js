import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// icons
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
//styles
import './Project.scss';

function createMarkup(description) {
    return {__html: description};
}
// TODO
// after you get images from your graphic designer refactor these styles because they don't look that good with these images.

const Project = ({title, description, link, image, live, id}) => {
    return (
        <li className='project' key={id}>
            <div className='project__wrapper'>
                <h3 className='project__title'>{title}</h3>
                {/*<p className='project__description'>{description}</p>*/}
                <p className="project__description" dangerouslySetInnerHTML={createMarkup(description)}/>
                <a href={link} target='_blank' rel='noreferrer'  className='project__link'>
                    <FontAwesomeIcon className='project__link-icon' icon={faGithub} />
                    Code
                </a>
            </div>
            {/*SOMETHING IS WRONG HERE XDDD. This should be live but i dont why why i still get error "live is not defined"*/}
            <a href={live} target='_blank' rel='noreferrer' className='project__img-wrapper project__img-wrapper--active'>
                <img src={image.url} alt={title} className='project__img' />
                <FontAwesomeIcon className='project__glass' icon={faSearch} />
            </a>
        </li>
    );
};

export default Project;