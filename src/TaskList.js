import React from 'react';
import { Table, Checkbox, Button, Space } from 'antd';

import { IconContext } from 'react-icons';
import { BsTrash } from 'react-icons/bs';

const TaskList = ({ tasks, onDeleteTask, onToggleTaskCompletion }) => {
    const columns = [
        {
            title: 'Task Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: description => (
                <div style={{ maxWidth: '300px', wordWrap: 'break-word' }}>{description}</div>
            ),
        },
        {
            title: 'Due Date',
            dataIndex: 'dueDate',
            key: 'dueDate',
        },

        {
            title: 'Status',
            dataIndex: 'completed',
            key: 'completed',
            render: (_, task) => (
                <>
                    {task.completed ? (
                        <span style={{ color: '#03C988', fontWeight: 'bold' }}>Completed</span>
                    ) : (
                        <Checkbox
                            className="ms-3"
                            checked={task.completed}
                            onChange={() => onToggleTaskCompletion(task.id)}
                            style={{ color: '#88ff18' }}
                        />
                    )}
                </>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'action',
            render: taskId => (
                <Space>
                    <Button
                        type="danger"
                        onClick={() => onDeleteTask(taskId)}
                        className="delete-button"
                    >
                        <IconContext.Provider value={{ color: 'red', size: '1.5em' }}>
                            <BsTrash />
                        </IconContext.Provider>
                    </Button>
                </Space>

            ),
        },
    ];

    return (
        <div className="mt-4">

            <Table
                className="custom-table"
                dataSource={tasks}
                columns={columns}
                rowKey="id"
                pagination={false}
            />
        </div>
    );
};

export default TaskList;
