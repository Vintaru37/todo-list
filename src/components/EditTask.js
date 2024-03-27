import './EditTask.css';
import { useRef } from 'react'

export default function EditTask({
	setShowEditView,
	handleEditTask,
	editedTaskContent,
	setEditedTaskContent
}) {
	const inputRef = useRef(null)

	return (
		<div className='edit-task-container'>
			<p className='edit-task-info'>Edit your task here</p>
			<input
				type='text'
				className='edit-task-input'
				
				onChange={(e) => setEditedTaskContent(e.target.value)}
				value={editedTaskContent}
				onKeyDown={handleEditTask}
			/>
			{editedTaskContent === '' && (
				<p className='edit-task-error'>Your task content cannot be empty!</p>
			)}
			<div className='task-btns'>
				<button
					className='cancel-task-btn'
					onClick={() => setShowEditView(false)}>
					Cancel
				</button>
				<button className='confirm-task-btn' onClick={handleEditTask}>
					Confirm
				</button>
			</div>
		</div>
	);
}
