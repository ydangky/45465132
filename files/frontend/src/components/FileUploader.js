import React from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function FileUploader({ onSuccess }) {
  return (
    <Upload
      name="file"
      action="/api/file/upload"
      showUploadList={false}
      onChange={(info) => {
        if (info.file.status === "done") {
          message.success("上传成功");
          onSuccess && onSuccess(info.file.response);
        } else if (info.file.status === "error") {
          message.error("上传失败");
        }
      }}
    >
      <Button icon={<UploadOutlined />}>上传文件</Button>
    </Upload>
  );
}