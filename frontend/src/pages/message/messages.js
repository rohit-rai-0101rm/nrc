import { Row, Col, Card, Typography, Spin,message } from "antd";
import { useHistory } from "react-router-dom";
import MessageItem from "./message-item";
import { useGetMessagesQuery } from "../../services/messagesApi";
const { Title, Paragraph } = Typography;

const Messages = () => {
  const {data,isFetching,isError}=useGetMessagesQuery()
const posts=data?.Messages
  return (
    <>
      {isFetching ? (
        <div className="spinner-wrapper">
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[20, 20]}>
          {posts.map((post) => (
            <MessageItem key={post.id} post={post} />
          ))}
        </Row>
      )}
      
    </>
  )

};

export default Messages;
