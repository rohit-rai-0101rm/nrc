import { useEffect } from "react";
import { Col, Card, Typography,message } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useDeleteMessageMutation } from "../../services/messagesApi";
import { useHistory } from "react-router-dom";

const key = "deletable";

const { Title, Paragraph } = Typography;
const MessageItem = ({post}) => {
  const history=useHistory()
  const [deleteMessage, { isLoading, isSuccess }] = useDeleteMessageMutation();

const{creator,message:m,title,_id:id}=post;

useEffect(() => {
  if (isLoading) {
    message.loading({ content: "deleting...", key });
  }
  if (isSuccess) {
    message.success({ content: "deleted successfully", key});
    window.location.reload()
  }
}, [isLoading, isSuccess]);


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
          <DeleteOutlined onClick={()=>{deleteMessage(id)}} key="setting"  />,
        ]}
      >
        <div className="student-info">
          <Title level={5}>{title}</Title>
          <Paragraph>{m}</Paragraph>
          <Paragraph>{creator}</Paragraph>
          <Paragraph>{id}</Paragraph>

        </div>
      </Card>
      </Col>
  );
};

export default MessageItem;