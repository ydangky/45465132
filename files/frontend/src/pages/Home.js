import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Typography } from "antd";

export default function Home() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <Typography.Title>Learning Buddy</Typography.Title>
      <Typography.Paragraph>
        两人互学，专注于暖通、CFD、金融知识交流与档案互传
      </Typography.Paragraph>
      <Card style={{ maxWidth: 400, margin: "20px auto" }}>
        <Button type="primary" block style={{ marginBottom: 16 }}>
          <Link to="/login">登录</Link>
        </Button>
        <Button block>
          <Link to="/register">注册新账号</Link>
        </Button>
      </Card>
      <div style={{ marginTop: 40 }}>
        <Typography.Title level={3}>主要功能</Typography.Title>
        <ul style={{ textAlign: "left", display: "inline-block" }}>
          <li>学习伙伴一对一配对</li>
          <li>实时聊天与文件互传</li>
          <li>暖通、CFD、金融专区</li>
          <li>学习资料共享与知识库</li>
          <li>共同学习计划与进度追踪</li>
        </ul>
      </div>
    </div>
  );
}