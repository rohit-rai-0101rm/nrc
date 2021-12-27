import React from "react";
import moment from "moment";

import { useParams } from "react-router-dom";
import { useGetMessageByIdQuery } from "../../services/messagesApi";
import { Row, Col, Card, Image, Descriptions, Spin } from "antd";
const Message = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isFetching, isError } = useGetMessageByIdQuery(id);
  console.log(data, isFetching, isError);
  if (isFetching) return <Spin />;
  const post = data?.post;
  console.log(post);
  const { creator, message, title, _id, createdAt } = post;
  return (
    <div>
      <Card title="View Message Detials">
        <Row gutter={[0, 20]}>
          <Col span={8}>
            <Image width={200} />
          </Col>
          <Col span={16}>
            <Descriptions title={title} layout="vertical">
              <Descriptions.Item label="title">{post.title}</Descriptions.Item>
              <Descriptions.Item label="creator">
                {post.creator}
              </Descriptions.Item>
              <Descriptions.Item label="message">
                {post.message}
              </Descriptions.Item>
              <Descriptions.Item  label="created">
                {moment(post.createdAt).startOf("ss").fromNow()}{" "}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default Message;
