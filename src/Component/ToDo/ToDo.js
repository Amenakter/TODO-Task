import React, { useEffect, useState } from 'react';

const ToDo = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => {
                setTodo(data);
            })
    }, [])

    const addTask = (e) => {
        if (e.key === 'Enter') {
            const result = {
                task: e?.target?.value
            }
            console.log(result);
            const url = `http://localhost:5000/task`
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'

                },
                body: JSON.stringify(result),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }
    const deleteTask = (id) => {
        console.log(id);
    }
    return (
        <div>
            <div class="form-control items-center mt-20 mb-16">
                <input type="text" placeholder="Enter your Todo" onKeyDown={addTask} name='input' className="input input-bordered w-1/2 " />

            </div>

            {
                todo.map(datas =>
                    <div className='flex bg-indigo-100 items-center mt-4 '>
                        <input type="radio" name="radio-2" className="radio radio-primary ml-6" />
                        <p className=' text-1xl font-bold  p-4'
                            key={datas._id}>
                            {datas.task}
                        </p>
                        <span>
                            <i className="fa-solid fa-pen-to-square ml-6"></i>
                            <i class="fa-regular fa-trash-can ml-6 text-red-500" onClick={() => deleteTask(datas._id)}></i>
                        </span>
                    </div>

                )
            }
        </div>
    );
};

export default ToDo;