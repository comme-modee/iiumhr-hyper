import React from 'react'
import commonStyles from '../style/Common.module.css'
import styles from '../style/Contact.module.css'
import classNames from 'classnames';
import { contactApi } from '@/common/api';
import { useNotificationContext } from '@/common/context';

const Contact = ({ type }) => {
    const isBusiness = type === 'business';
    const isEmployee = type === 'employee';
    const { showNotification } = useNotificationContext();
    
    const inquiry = async (e) => {
        e.preventDefault();

        const privacyCheckbox = e.target.elements['privacy-consent'];

        if (!privacyCheckbox.checked) {
            console.log('체크안됨')
            showNotification({message: '개인정보 수집에 동의해야 합니다.', type: 'error'})
            return;
        }

        try {
            const res = await contactApi.contact({
                name: e.target.name.value,
                phone: e.target.tel.value,
                local: e.target.address.value,
                content: e.target.content.value
            });
            console.log(res)
            if(res) {
				showNotification({message: '상담 예약이 완료되었습니다.', type: 'success'})
            }
        } catch (error) {
			showNotification({message: '상담 예약이 실패하였습니다. 다시 시도해주세요.', type: 'error'})
        }
    }    

    return (
        <div className={classNames(styles.contact, commonStyles.flexCenter)}>
            <div className={commonStyles.layout}>
                <div className={styles.title}>
                    {isBusiness ? '노무 업무에 관한 모든 것을 함께 합니다.' :
                        isEmployee ? '기본적인 권리! 스스로 지켜야 합니다.' :
                            '여러분의 최고의 파트너 노무법인 이음'}
                </div>
                <div className={styles.description}>
                    {isBusiness ? '대표님들께서는 오직 사업장의 성장에만 집중하시길 바랍니다.' :
                        isEmployee ? '세상에 당연한 것은 없습니다. 이음이 여러분과 함께합니다.' :
                            '어렵고 곤란한 문제들, 이음이 여러분과 함께하겠습니다.'}
                </div>

                <form onSubmit={inquiry}>
                    <div className={styles.formRow}>
                        <input id='name' name='name' type='text' placeholder='성함' required />
                        <input id='tel' name='tel' type='tel' placeholder='전화번호' maxLength='11' required />
                        <input id='address' name='address' type='text' placeholder={isBusiness ? '사업장 소재지' : isEmployee ? '직장 소재지' : '사업장 및 직장 소재지'} required />
                    </div>
                    <textarea name='content' placeholder='상담내용' required />
                    <button type='submit'>상담 예약하기</button>
                    <div className={styles.checkbox}>
                        <label>
                            <input id='privacy-consent' name='privacy-consent' type='checkbox' />
                            <p>개인정보수집동의</p>
                        </label>
                        <p className={styles.privacyRightBtn}>개인정보 취급방침 전문</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact