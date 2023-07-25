import React from "react";
import { Table, Input, Form, Button } from "antd";
import { useState } from "react";
export default function FormSearch() {
  const [text, setText] = useState("");
  const [ch, setCh] = useState("");
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filteredValue: [text],
      onFilter: (val, rec) => {
        console.log(val);

        return rec.name.toLowerCase().includes(val.toLowerCase());
      }
    },
    {
      title: "Chinese Score",
      dataIndex: "chinese",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3
      },
      filteredValue: [ch],
      onFilter: (val, rec) => {
        console.log(val);

        return String(rec.chinese).toLowerCase().includes(val.toLowerCase());
      }
    },
    {
      title: "Math Score",
      dataIndex: "math",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2
      }
    },
    {
      title: "English Score",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1
      }
    }
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      chinese: 98,
      math: 60,
      english: 70
    },
    {
      key: "2",
      name: "Jim Green",
      chinese: 98,
      math: 66,
      english: 89
    },
    {
      key: "3",
      name: "Joe Black",
      chinese: 98,
      math: 90,
      english: 70
    },
    {
      key: "4",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89
    }
  ];

  const onFinish = (e) => {
    setText(e.name || "");
    setCh(e.ch || "");
  };
  return (
    <div className="App">
      <Form name={"formSearch"} onFinish={onFinish}>
        <Form.Item name="name" label="name">
          <Input></Input>
        </Form.Item>
        <Form.Item name="ch" label="chinese score">
          <Input></Input>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
