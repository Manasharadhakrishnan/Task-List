import React from 'react';

import { Form, Input, Button } from 'antd';

const AddTaskForm = ({ onAddTask }) => {
    const [form] = Form.useForm();

    const onFinish = values => {
        onAddTask(values);
        form.resetFields();
    };

    return (
        <div className="card mt-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div className="card-body p-0 ">
                <h2 className="card-title text-center mb-3 fs-2 p-2" style={{ borderBottom: '1px solid #ccc', color: '#526D82', marginBottom: '10px' }}>
                    Add Task
                </h2>
                <Form
                    form={form}
                    onFinish={onFinish}
                    layout="vertical"
                    labelAlign="left"
                    className='ps-4 pe-4 pt-4'
                    labelCol={{ span: 8 }}
                    style={{ flexGrow: 1 }}
                >
                    <Form.Item
                        name="name"
                        label="Task Name"
                        rules={[{ required: true, message: 'Please enter the task name' }]}
                    >
                        <Input placeholder=" " />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true, message: 'Please enter the task description' }]}
                    >
                        <Input.TextArea placeholder=" " />
                    </Form.Item>
                    <Form.Item
                        name="dueDate"
                        label="Due Date"
                        rules={[{ required: true, message: 'Please select the due date' }]}
                    >
                        <Input type="date" placeholder=" " />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="mb-0" style={{ float: 'right' }}>
                            Add
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default AddTaskForm;

