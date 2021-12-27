import { useState,useEffect } from "react";
import { Input, Row, Col, Button, Card,message } from "antd";
const key="add_student"
const AddMessage = () => {

  const [data, setData] = useState({
    title: "",
    creator: "",
    message: "",
  });
 
 
  return (
    <form >
      <Card title="Create a new message">
        <Row gutter={[0, 20]}>
          <Col span={24}>
            <Input
              size="large"
              placeholder="enter title"
              name="title"
              
              
            />
          </Col>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Enter your name"
              name="creator"
              
            
            />
          </Col>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Enter message"
              name="message"
             
            />
          </Col>
          <Col span={24}>
            <Button  htmlType="submit" type="primary">
              Add Message
            </Button>
          </Col>
        </Row>
      </Card>
    </form>
  );
};

export default AddMessage;
