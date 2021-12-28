import { useState,useEffect } from "react";
import { useAddMessageMutation } from "../../services/messagesApi";
import { Input, Row, Col, Button, Card,message } from "antd";
const key="add_message"
const AddMessage = ({history}) => {
  const [addMessage, { isLoading, isSuccess }] = useAddMessageMutation();

  const [data, setData] = useState({
    title: "",
    creator: "",
    message: "",
  });
 
  const handleChange = (e) =>
  setData({ ...data, [e.target.name]: e.target.value });
const handleSubmit = async (e) => {
  e.preventDefault();
  await addMessage(data);
  //console.log(data);

  // after submit data
  setData({
    title: "",
    creator: "",
    message: "",
  });

  history.push("/");
  window.location.reload(true);

};
useEffect(() => {
  if(isLoading){
    message.loading({content:"creating new message...",key})
  }
  if(isSuccess){
    message.success({content:"creating student message...",key,duration:3})
  }
 
}, [isLoading,isSuccess])
  return (
    <form onSubmit={handleSubmit} >
      <Card title="Create a new message">
        <Row gutter={[0, 20]}>
          <Col span={24}>
            <Input
              size="large"
              placeholder="enter title"
              name="title"
              value={data.title}
              onChange={handleChange}
              
              
            />
          </Col>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Enter your name"
              name="creator"
              value={data.creator}
              onChange={handleChange}
              
            
            />
          </Col>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Enter message"
              name="message"
              value={data.message}
              onChange={handleChange}
             
            />
          </Col>
          <Col span={24}>
            <Button disabled={isLoading}  htmlType="submit" type="primary">
              Add Message
            </Button>
          </Col>
        </Row>
      </Card>
    </form>
  );
};

export default AddMessage;
