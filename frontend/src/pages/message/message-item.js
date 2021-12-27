import { useEffect } from "react";
import { Col, Card, Typography, message } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { createStore } from "@reduxjs/toolkit";

const key = "deletable";

const { Title, Paragraph } = Typography;
const MessageItem = ({post}) => {
  const history=useHistory()
const{creator,message,title,_id:id}=post

  return (
    <Col span={6} >
      <Card
        hoverable={true}
        bordered={false}
        
        actions={[
          <EyeOutlined
            key="view"
            onClick={() => history.push(`/messages/${id}`)}

          />,
          <EditOutlined
            key="edit"
            onClick={() => history.push(`/messages/edit/${id}`)}

          />,
          <DeleteOutlined key="setting"  />,
        ]}
      >
        <div className="student-info">
          <Title level={5}>{title}</Title>
          <Paragraph>{message}</Paragraph>
          <Paragraph>{creator}</Paragraph>
          <Paragraph>{id}</Paragraph>

        </div>
      </Card>
      </Col>
  );
};

export default MessageItem;