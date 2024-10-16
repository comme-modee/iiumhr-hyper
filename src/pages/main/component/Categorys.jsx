import React from 'react'
import classNames from 'classnames'
import commonStyles from '../style/Common.module.css'
import styles from '../style/Categorys.module.css'
import B1 from '../assets/img/business/category1.png'
import B2 from '../assets/img/business/category2.png'
import B3 from '../assets/img/business/category3.png'
import B4 from '../assets/img/business/category4.png'
import B5 from '../assets/img/business/category5.png'
import E1 from '../assets/img/employee/category1.png'
import E2 from '../assets/img/employee/category2.png'
import E3 from '../assets/img/employee/category3.png'
import E4 from '../assets/img/employee/category4.png'
import { useLocation, useNavigate } from 'react-router-dom'

const Categorys = ({ url }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const rootURL = location.pathname.includes('business') ? 'business' : 'employee';

    return (
        rootURL === 'business' ? (
            <div className={classNames(commonStyles.flexCenter, styles.categoryContainer)}>
                <div className={commonStyles.layout}>
                    <div className={classNames(styles.category, styles.businessCategory)}>
                        <div className={classNames(styles.box, url === 'advisory' && styles.active)} onClick={() => navigate('/business/advisory')}>
                            <img src={B1} alt='' />
                            <p>기업자문</p>
                        </div>
                        <div className={classNames(styles.box, url === 'payroll' && styles.active)} onClick={() => navigate('/business/payroll')}>
                            <img src={B2} alt='' />
                            <p>급여관리</p>
                        </div>
                        <div className={classNames(styles.box, url === 'hr' && styles.active)} onClick={() => navigate('/business/hr')}>
                            <img src={B3} alt='' />
                            <p>HR컨설팅</p>
                        </div>
                        <div className={classNames(styles.box, url === 'ir' && styles.active)} onClick={() => navigate('/business/ir')}>
                            <img src={B4} alt='' />
                            <p>IR컨설팅</p>
                        </div>
                        <div className={classNames(styles.box, url === 'edu' && styles.active)} onClick={() => navigate('/business/edu')}>
                            <img src={B5} alt='' />
                            <p>강의 및 교육</p>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className={classNames(commonStyles.flexCenter, styles.categoryContainer)}>
                <div className={commonStyles.layout}>
                    <div className={classNames(styles.category, styles.employeeCategory)}>
                        <div className={classNames(styles.box, url === 'wages' && styles.active)} onClick={() => navigate('/employee/wages')}>
                            <img src={E1} alt='' />
                            <p>임금체불/대지급금</p>
                        </div>
                        <div className={classNames(styles.box, url === 'dismissal' && styles.active)} onClick={() => navigate('/employee/dismissal')}>
                            <img src={E2} alt='' />
                            <p>부당해고/징계</p>
                        </div>
                        <div className={classNames(styles.box, url === 'harassment' && styles.active)} onClick={() => navigate('/employee/harassment')}>
                            <img src={E3} alt='' />
                            <p>직장 내 괴롭힘</p>
                        </div>
                        <div className={classNames(styles.box, url === 'injury' && styles.active)} onClick={() => navigate('/employee/injury')}>
                            <img src={E4} alt='' />
                            <p>산업재해</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Categorys