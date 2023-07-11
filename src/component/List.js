import axios from 'axios';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { baseURL } from '../utilities/constant';
import './List.css';

const List = ({id, task, setUpdatedUI, updatedMode}) => { 
    const removeTask = () => {
        axios.delete(`${baseURL}/delete/${id}`).then((res) => {
            console.log(res);
            setUpdatedUI((prevState) => !prevState)
        })
    }
     return(<div className='container'> 
        <div className='container-title'>
            <FaUserCircle /> NameLabel
        </div>
        <div className='container-command'>
            {task}
        </div>
        <div className='container-option'>
            <div className='edit'  onClick={() => updatedMode(id, task)} >Edit<AiFillEdit/></div>
            <div className='delete' onClick={removeTask} >Delete<AiFillDelete /></div>
        </div>
        
        
    </div>)
}

export default List;