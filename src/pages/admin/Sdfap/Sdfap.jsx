import sdfap from '@/common/api/sdfap';
import React from 'react'
import { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Button } from 'react-bootstrap'
import { useNotificationContext } from '@/common';
import './Sdfap.css';

const initialData = {
  i1: '',
  i2: '',
  i3: '',
  i4: '',
  i5: '',
  t1: '',
  t2: '',
  t3: '',
  t4: '',
  t5: '',
  h1: '',
  h2: '',
  h3: '',
  h4: '',
  h5: '',
  e1: '',
  slp1: '',
  slp2: '',
}

const Sdfap = () => {
  const [ sdfapData, setSdfapData ] = useState({...initialData});
  const { showNotification } = useNotificationContext();

  const getSdfapData = async () => {
      try {
          const res = await sdfap.getSdfap();
          if(res) {
            setSdfapData(res.list)
          }
      } catch (error) {
          console.log('error: ', error)
      }
  }

  useEffect(() => {
      getSdfapData(); 
  },[])

  const handleInputData = (key) => (event) => {
    const value = event.target.value;

    if (isNaN(value)) {
      showNotification({ message: '숫자를 입력해주세요.', type: 'error' });
      return;
    }

    setSdfapData((prevData) => ({
      ...prevData,
      [key]: Number(value),
    }));
  };

  const editSdfapData = async () => {
    try {
        const res = await sdfap.editSdfap(sdfapData);
        if(res) {
          showNotification({ message: '데이터 수정에 성공했습니다.', type: 'success' });
        } else {
          showNotification({ message: '데이터 수정에 실패했습니다. 다시 시도해주세요.', type: 'error' });
        }
    } catch (error) {
        console.log('error: ', error)
    }
  }
  
  return (
    <>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <h4 className="page-title">체당금 월정상한액 관리</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className='sdfap-container'>
          <Card>
            <Card.Body>
            <div className="title-container">
              <h4 className="page-title">(도산대지급금) 구.일반체당금</h4>
              <p>(단위:만 원)</p>
            </div>
            <Table className="mb-0 mb-4 text-center sdfap sdfap1" bordered>
                <thead>
                    <tr>
                        <th></th>
                        <th>30세 미만</th>
                        <th>30세 이상 40세 미만</th>
                        <th>40세 이상 50세 미만</th>
                        <th>50세 이상 60세 미만</th>
                        <th>60세 이상</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>임금</th>
                        {['i1', 'i2', 'i3', 'i4', 'i5'].map((key) => (
                            <td key={key} className='input-td'>
                                <input
                                    type="text"
                                    value={sdfapData?.[key]}
                                    onChange={handleInputData(key)}
                                />
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <th>퇴직급여등</th>
                        {['t1', 't2', 't3', 't4', 't5'].map((key) => (
                            <td key={key} className='input-td'>
                                <input
                                    type="text"
                                    value={sdfapData?.[key]}
                                    onChange={handleInputData(key)}
                                />
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <th>휴업수당</th>
                        {['h1', 'h2', 'h3', 'h4', 'h5'].map((key) => (
                            <td key={key} className='input-td'>
                                <input
                                    type="text"
                                    value={sdfapData?.[key]}
                                    onChange={handleInputData(key)}
                                />
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <th>출산후 휴가기간 중 급여</th>
                        <td colSpan={5} className='input-td'>
                          <input
                              type="number"
                              value={sdfapData?.e1}
                              onChange={handleInputData('e1')}
                          />
                        </td>
                    </tr>
                </tbody>
            </Table>

            <div className="title-container">
              <h4 className="page-title">(간이대지급금) 구.소액체당금</h4>
              <p>(단위:만 원)</p>
            </div>
            <Table className="mb-3 text-center sdfap sdfap2" bordered>
                <thead>
                    <tr>
                        <th>항목</th>
                        <th>상한액</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>임금, 출산전후휴가기간 중 급여, 휴업수당</th>
                        <td className='input-td'>
                          <input
                              type="number"
                              value={sdfapData?.slp1}
                              onChange={handleInputData('slp1')}
                          />
                        </td>
                    </tr>
                    <tr>
                        <th>퇴직급여등</th>
                        <td className='input-td'>
                          <input
                              type="number"
                              value={sdfapData?.slp2}
                              onChange={handleInputData('slp2')}
                          />
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div className='btn-container'>
              <Button onClick={() => editSdfapData()}>수정</Button>
            </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Sdfap