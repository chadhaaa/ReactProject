import React, { useState, useEffect } from 'react';
import { Row, Button, Spin, Space, Col, DatePicker, Input, Select, Table } from 'antd';

import  './session.css';
import axios from 'axios';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;
const { Option } = Select;
const Sessions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sessions, setSessions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sessionSelected, setSessionSelected] = useState({});
  const [isSessionVisible, setSessionVisible] = useState(false);
  const [places, setPlace] = useState(['tabarka','hammamet','mahdia']);
	const [players, setPlayers] = useState(['player1','Player2']);
  const [date,setDate] = useState();
  const [currentUser, setCurrentUser] = useState({id:'id'});
  const current = new Date();
  const columns = [
    {title: 'day',dataIndex: 'day',key: 'day'},
    {title: 'hour',dataIndex: 'hour',key: 'hour'},
    {title: 'player',dataIndex: 'player',key: 'player'},
    {title: 'Competance',dataIndex: 'competences',key: 'competences'},
    {title: 'Statistique',key: 'statistique',dataIndex: 'statistique'},
    {title: 'Programme',dataIndex: 'programme',key: 'programme'},
    {title: 'place',key: 'place',dataIndex: 'playce'},
    
];
  
  const data2= [
    {
        key: '1',
        day: '10/05/2022',
        hour:'16:30',
        player: 'player1',
        competences: 'competence 1',
        statistique: 'statestique 1',
        programme: 'programme 1',
        place: 'tabarka', 
    },
    {
        key: '2',
        day: '11/05/2022',
        hour:'14:30',
        player: 'player1',
        competences: 'competence 2',
        statistique: 'statestique 1',
        programme: 'programme 2',
        place: 'hammamet',
      },
      {
        key: '3',
        day: '14/05/2022',
        hour:'17:00',
        player: 'player1',
        competences: 'competence 6',
        statistique: 'statestique 4',
        programme: 'programme 5',
        place: 'mahdia',
      },
   
];

  const [data, setData] = useState(data2);


  const showModal = () => {
    setSessionSelected({ _id: '0000' });
    setIsModalVisible(true);
  };

  async function getSessions() {
    axios.get('http://localhost:8000/api/listSession')
      .then((response) => {
        console.log('here')
        setSessions(response.data);
      })
      .catch((e) => {console.log(e)});
  }
const onJoueurChange = value => {
  const dataChange = data2.filter(session => session.player === value)
  setData(dataChange);
};
const onLieuxChange = value => {
  
  const dataChange = data2.filter(session => session.place === value)
  console.log(dataChange);
  setData(dataChange);

};
const onDateNowChange = value => {
  const dataChange = data2.filter(session => session.day === value)
  setData(dataChange);

};


  useEffect(() => {
    if(isLoading){
      getSessions();
      setIsLoading(false);
    }
  }, [isLoading]);
  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button key={date} onClick={onDateNowChange} >{date}</Button>
        <RangePicker />
        <Select showSearch onChange={onJoueurChange} placeholder="Filter par joueur ">
        {players.map(player => (
          <Option key={player}>{player}</Option>
        ))}
        </Select>
        <Select showSearch onChange={onLieuxChange} placeholder="Filter par Lieu ">
        {places.map(place => (
          <Option key={place}>{place}</Option>
        ))}
        </Select>
      </Space>
      <Button type="primary" onClick={showModal} style={{ float: 'right' }}>
        Nouvelle séance
      </Button>
      <div className="site-card-wrapper">
        {!isLoading && (
        <Table columns={columns} dataSource={data} />
        )}
        {isLoading && (
          <Row gutter={16}>
            <Col span={8}>
              <Space size="middle" style={{ marginTop: 250, marginLeft: 600 }}>
                <Spin size="large" tip="Loading..." />
              </Space>
            </Col>
          </Row>
        )}
      </div>
      
    </>
  );
};
export default Sessions;