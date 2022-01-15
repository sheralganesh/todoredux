import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo } from '../actions/index'

function Todo() {
    const [inputData, setinputData] = useState('')
    const list = useSelector((state) => state.todoReducer.list);
    const dispatch = useDispatch();
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <figcaption>ADD YOUR LIST HERE</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type='text' placeholder='Add Items' className='input' value={inputData}
                            onChange={(event) => setinputData(event.target.value)} />
                        <i className='fa fa-plus add-btn ' onClick={() => dispatch(addTodo(inputData),
                            setinputData(''))}></i>
                    </div>
                    <div className='showItems my-5'>
                        {
                            list.map((elem) => {
                                return (
                                    <div className='d-flex justify-content-between ' style={{ width: "20rem", margin: '0px auto' }} key={elem.id}>
                                        <h3>{elem.data}</h3>
                                        <div className='todo-btn'>
                                            <i className='far fa-trash-alt add-btn btn' title="Delete item" onClick={() => dispatch(deleteTodo(elem.id))}></i>
                                        </div>
                                    </div>
                                )
                            })

                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
