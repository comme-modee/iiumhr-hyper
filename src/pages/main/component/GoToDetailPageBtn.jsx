import React from 'react'
import styles from '../style/GoToDetailPageBtn.module.css'
import btn from '../assets/img/go-to-detail-btn.png'
import { Link } from 'react-router-dom'

const GoToDetailPageBtn = ({ url }) => {
    return (
        <button className={styles.btn}>
            <Link to={url}>
                <p>자세히 보기</p>
                <img src={btn} alt='자세히보기' width={16} />
            </Link>
        </button>
    )
}

export default GoToDetailPageBtn