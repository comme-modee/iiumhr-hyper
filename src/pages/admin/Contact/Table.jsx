import { useEffect, useState } from 'react';
import useContactList from './useContactList';
import { useModal } from '@/pages/ui/base/hooks';
import './Table.css';
import { Modal } from 'react-bootstrap';
import './Switch.css';
import contact from '@/common/api/contact';

const Table = () => {

	const { data, getContactList } = useContactList();
	const [ isModalOpen, setIsModalOpen ] = useState(false);
	const { toggleModal } = useModal();
	const [ modalData, setModalData ] = useState(null);

	console.log(data)

	useEffect(() => {
	  getContactList();
	}, []);

	const openModal = (item) => {
		setIsModalOpen(true);
		setModalData(item);
	};

	const switchToggle = async (idx, currentFlag) => {
		const newFlag = !currentFlag;
		try {
			const stringIdx = idx.toString();
			const res = await contact.switchContactFlag({ idx: stringIdx, flag: newFlag });
			if (res) {
				getContactList(); // 목록 업데이트
			} else {
				throw new Error('toggle flag fail');
			}
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		console.log(modalData)
	},[modalData])

	return (
		<>
			{modalData && (
				<Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} dialogClassName='modal-dialog-centered contact-modal' size='sm'>
					<Modal.Header onHide={toggleModal} closeButton>
						<h4 className="modal-title">문의 No.{modalData.idx}</h4>
					</Modal.Header>

						<div className='modal-inner'><span className='fw-bold'>작성일</span><span>{modalData.add_date}</span></div>
						<div className='modal-inner'><span className='fw-bold'>성함</span><span>{modalData.company}</span></div>
						<div className='modal-inner'><span className='fw-bold'>전화번호</span><span>{modalData.name}</span></div>
						<div className='modal-inner'><span className='fw-bold'>소재지</span><span>{modalData.phone}</span></div>
						<div className='modal-inner'><span className='fw-bold'>상담 내용</span><span>{modalData.content}</span></div>
						<div className='modal-inner'><span className='fw-bold'>첨부파일</span>{modalData.filename !== '' ? <a href={modalData.filename} target='_blank' download><i className='ri-download-line' /></a> : '없음'}</div>

				</Modal>
			)}
			<div className='table'>
				<div className='header'>
					<div className='num'>No</div>
					<div className='date'>작성일</div>
					<div className='name'>성함</div>
					<div className='tel'>전화번호</div>
					<div className='local'>소재지</div>
					<div className='flag'>확인</div>
					<div className='more'>상세보기</div>
				</div>
				<div className='body'>
					{data && data.length !== 0 ? 
						data.map((item) => (
							<div key={item.idx} className='content'>
								<div className='num'>{item.idx}</div>
								<div className='date'><p>{item.add_date}</p></div>
								<div className='name'><p>{item.name}</p></div>
								<div className='tel'><p>{item.phone}</p></div>
								<div className='local'><p>{item.local}</p></div>
								<div className='flag' onClick={(e) => e.stopPropagation()}>
									<input
										className="react-switch-checkbox"
										id={`react-switch-${item.idx}`}
										type="checkbox"
										checked={item.flag}
										onChange={() => switchToggle(item.idx, item.flag)}
									/>
									<label
										className="react-switch-label"
										htmlFor={`react-switch-${item.idx}`}
									>
										<span className={`react-switch-button`} />
									</label>
								</div>
								<div className='more' onClick={() => openModal(item)}><i className='ri-file-copy-line font-18'/></div>
							</div>
						))
						: <div className='m-3'>데이터가 없습니다.</div>
					}
				</div>
			</div>
		</>
	);
};

export default Table;
