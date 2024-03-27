//styles
import './TodoList.css';

//libs
import { useState } from 'react';

//components
import TodoTask from './TodoTask';
import Popup from './Popup';
import EditTask from './EditTask';

export default function TodoList() {
	const [showPopup, setShowPopup] = useState(false);
	const [showEditView, setShowEditView] = useState(false);
	const [taskContent, setTaskContent] = useState('');
	const [editedTaskContent, setEditedTaskContent] = useState('');
	const [editedTaskIndex, setEditedTaskIndex] = useState(null);
	const [tasksArray, setTasksArray] = useState([]);

	const addTaskToArray = (task) => {
		setTasksArray((prevTasks) => [...prevTasks, task]);
	};

	const handleEditClick = (task, index) => {
		setEditedTaskContent(task);
		setShowEditView(true);
		setEditedTaskIndex(index);
	};

	const handleEditTask = (e) => {
		if (e?.key === 'Enter' || e === undefined) {
			if (editedTaskIndex !== null && editedTaskContent.trim() !== '') {
				tasksArray[editedTaskIndex] = editedTaskContent;
				setTasksArray([...tasksArray]);
				setShowEditView(false);
			}
		}
	};

	return (
		<>
			<div className='todo-list-container'>
				<div className='todo-list-header'>
					<h1>ToDo List</h1>
					<p>Plan your day!</p>
				</div>
				{tasksArray.length === 0 && (
					<p className='no-tasks-text'>You have no tasks yet.</p>
				)}
				<div className='new-task'>
					<p className='add-new-task-text' onClick={() => setShowPopup(true)}>
						<span className='plus'>+</span> Add new task
					</p>
				</div>
				<TodoTask
					tasksArray={tasksArray}
					setTasksArray={setTasksArray}
					handleEditClick={handleEditClick}
				/>
			</div>
			{showPopup && (
				<Popup
					setShowPopup={setShowPopup}
					taskContent={taskContent}
					setTaskContent={setTaskContent}
					addTaskToArray={addTaskToArray}
				/>
			)}
			{showEditView && (
				<EditTask
					setShowEditView={setShowEditView}
					handleEditTask={handleEditTask}
					editedTaskContent={editedTaskContent}
					setEditedTaskContent={setEditedTaskContent}
				/>
			)}
		</>
	);
}
