import React from 'react'
import classNames from 'classnames'
import styles from '../style/ScrollToTopBtn.module.css'
import commonStyles from '../style/Common.module.css'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const ScrollToTopBtn = ({ setActiveIndex }) => {
    const location = useLocation();
    const isFullPagePath = location.pathname === '/business' || location.pathname === '/employee';

    return (
        <div 
            className={classNames(styles.scrollToTopBtn, commonStyles.flexCenter)}
            onClick={() => isFullPagePath ? setActiveIndex(0) : window.scrollTo(0, 0)}
        >
            <FontAwesomeIcon icon={faChevronUp}/>
        </div>
    )
}

export default ScrollToTopBtn