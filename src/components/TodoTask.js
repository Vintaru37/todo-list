import './TodoTask.css';
import { FaCheck, FaXmark } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';

export default function TodoTask({
	tasksArray,
	setTasksArray,
	handleEditClick,
}) {


	const handleCheckClick = (e) => {
		const currentTask = e.target.closest('.todo-task');
		currentTask.classList.toggle('done');
	};

	const handleDeleteClick = (taskIndex) => {
		tasksArray.splice(taskIndex, 1);
		setTasksArray([...tasksArray]);
	};

	const todoTasks = tasksArray.map((task, index) => {
		return (
			<div key={index} className='todo-task'>
				<p className='task-text'>{task}</p>
				<div className='todo-icons'>
					<FaCheck className='icon check-icon' onClick={handleCheckClick} />
					<FaEdit
						className='icon edit-icon'
						onClick={() => handleEditClick(task, index)}
					/>
					<FaXmark
						className='icon delete-icon'
						onClick={() => handleDeleteClick(index)}
					/>
				</div>
			</div>
		);
	});

	return todoTasks;
}
