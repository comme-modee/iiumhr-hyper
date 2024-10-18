import React from 'react'
import styles from '../style/GoToDetailPageBtn.module.css'
import btn from '../assets/img/go-to-detail-btn.png'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

const GoToDetailPageBtn = ({ url }) => {
    const location = useLocation();
    const isBusinessPath = location.pathname === '/business';
    const isEmployeePath = location.pathname === '/employee';

    return (
        <button className={classNames(styles.btn, isBusinessPath ? styles.businessBtn : isEmployeePath ? styles.employeeBtn : null)}>
            <Link to={url}>
                <p>자세히 보기</p>
                <img src={btn} alt='자세히보기' width={16} />
            </Link>
        </button>
    )
}

export default GoToDetailPageBtn