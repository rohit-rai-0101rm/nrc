import { useState,useEffect } from "react";
import { Input, Row, Col, Button, Card ,message} from "antd";
import { useGetMessagesQuery,useUpdateMessageMutation } from "../../services/messagesApi";
import { useParams } from "react-router-dom"
import ColumnGroup from "antd/lib/table/ColumnGroup";

const key = "updatable";

const EditMessage = ({history,match}) => {
  const [item, setItem] = useState({
    title: "",
    creator: "",
    message: "",
  });
  const [updateMessage, { isLoading, isSuccess }] = useUpdateMessageMutation();
const { data:messageData } = useGetMessagesQuery(undefined, {
  selectFromResult: ({ data }) => ({
    data:data?.find((el) => el.id == match.params.id),
  }),
});
useEffect(() => {
  if (isLoading) {
    message.loading({ content: "updating student...", key });
  }
  if (isSuccess) {
    message.success({
      content: "student updated successfully",
      key,
      duration: 3,
    });
  }
}, [isLoading, isSuccess]);

useEffect(() => {
  if (messageData) {
    setItem(messageData);
  }
}, [messageData]);
  const handleChange = (e) =>
  setItem({ ...item, [e.target.name]: e.target.value });
const handleSubmit = async (e) => {
  e.preventDefault();
  await updateMessage(item);
  // after submit data
  setItem({
    title: "",
    creator: "",
    message: "",
  });

};

   
  return (
    <form onSubmit={handleSubmit} >
      <Card title="Edit a new student">
        <Row gutter={[0, 20]}>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Edit title"
              name="title"
              onChange={handleChange}

              
            />
          </Col>
          <Col span={24}>
            <Input
              size="large"
              placeholder="edit creator"
              name="phone"

              onChange={handleChange}

              
            />
          </Col>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Enter message"
              name="message"
              value={item.message}
             
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