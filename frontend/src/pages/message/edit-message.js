import { useState,useEffect } from "react";
import { Input, Row, Col, Button, Card ,message} from "antd";
const key = "updatable";

const EditMessage = () => {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

 

  

  

   
  console.log(Object.values(data).every((el) => el == ""));
  return (
    <form >
      <Card title="Edit a new student">
        <Row gutter={[0, 20]}>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Enter Student Full Name"
              name="fullName"
              
            />
          </Col>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Enter Student Phone Number"
              name="phone"
              
            />
          </Col>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Enter Student E-mail address"
              name="email"
             
            />
          </Col>
          <Col span={24}>
            <Button
              htmlType="submit"
             
              type="primary"
            >
              Update Student
            </Button>
          </Col>
        </Row>
      </Card>
    </form>
  );
};

export default EditMessage;