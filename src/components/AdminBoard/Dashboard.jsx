import React, {useState, useEffect} from "react";
import { Table, Modal } from "antd";
import '../../css/dashboard.css'
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
import axios from "axios";
const Dashboard = () => {
    const [dataSource, setDataSource] = useState([])

  
        const fetchData = async () => {
            const response = await fetch('http://localhost:8000/api/cases/get-cases') 
            const data = await response.json();
            setDataSource(data.data.cases)
        }

    

    useEffect(() => {
        fetchData();
        const interval = setInterval(() => {
            fetchData();
        }, 5000); // Poll every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
    const columns = [
        {
            title:'First Name',
            dataIndex: 'firstName',
            key:'firstname'
        },
        {
            title:'Last Name',
            dataIndex: 'lastName',
            key:'lastName'
        },
        {
            title:'Address',
            dataIndex: 'address',
            key:'address'
        },
        {
            title:'Phone',
            dataIndex: 'phoneNumber',
            key:'phoneNumber'
        },
        {
            title:'Description',
            dataIndex: 'description',
            key:'description'
        },
        {
            title: 'Actions',
            key: 'actions',
            render:(text, record)=>{
                return <>
                    <EditOutlined />
                    <DeleteOutlined onClick={() => {
                        HandleDelete(record)
                    }} style={{color: 'red', marginLeft: 12}} />
                </>
            }
        }
    ]
    const HandleDelete =  (record) => {
        try {
            Modal.confirm({
                title: 'Want to delete this',
                onOk: async () => {
                    const response = await axios.delete(`http://localhost:8000/api/cases/delete-cases/${record._id}`)
                    if (response.status === 200) {
                      const updateCategory = dataSource.filter(
                        (categoryItem) => categoryItem._id !== record.key
                      );
                      setDataSource(updateCategory);
                    }
                }
            })
          
          } catch (error) {
           
              console.log(error);
            
            }
           
          }
    
    return (
        <div className="table">
           <Table 
           columns={columns}
           dataSource={dataSource}
           > 
            </Table> 
        </div>
    )
}

export default Dashboard;