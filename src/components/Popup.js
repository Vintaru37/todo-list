import './Popup.css';
import { useState } from 'react';

export default function Popup({
	setShowPopup,
	setTaskContent,
	taskContent,
	addTaskToArray,
}) {
	const [showError, setShowError] = useState(false);

	const handleKeyDown = (e) => {
		if(e.key === 'Enter'){
			handleBtnClick()
		}
	}

	const handleBtnClick = () => {	
			if (taskContent.trim() !== '') {
				addTaskToArray(taskContent);
				setShowPopup(false);
				setShowError(false);
				setTaskContent('');
			} else {
				setShowError(true);
			}
	};

	return (
		<div className='popup'>
			<div className='popup-content'>
				<input
					type='text'
					className='add-new-task'
					placeholder='Enter your task here'
					onKeyDown={handleKeyDown}
					onChange={(e) => setTaskContent(e.target.value)}
				/>
				{showError && <p className='input-error'>This field can't be empty!</p>}
				<div className='task-btns'>
					<button
						className='cancel-task-btn'
						onClick={() => setShowPopup(false)}>
						Cancel
					</button>
					<button className='confirm-task-btn' onClick={handleBtnClick}>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
}
