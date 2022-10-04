import { useState } from 'react'

import toast from "react-hot-toast";

import { BsCheckLg } from 'react-icons/bs'
import { FiTrash } from 'react-icons/fi'

export function TaskList({ toggleTheme, theme }) {
    const [tasks, setTasks] = useState([])
    const [newTaskTitle, setNewTaskTitle] = useState('')

    function handleCreateNewTask() {
        if (!newTaskTitle) return

        const newTask = {
            id: Math.random(),
            title: newTaskTitle,
            isComplete: false
        }
        setTasks(oldState => [...oldState, newTask])
        setNewTaskTitle('')
    }

    function handleToggleTaskCompletion(id) {
        const newTasks = tasks.map(task => task.id === id ? {
            ...task,
            isComplete: !task.isComplete
        }
            :
            task
        )
        setTasks(newTasks)
    }

    function handleRemoveTask(id) {
        const filteredTasks = tasks.filter(task => task.id !== id)

        setTasks(filteredTasks)
        toast("DELETED TASK!", {
            style: {
                background: '#2fe002',
                color: '#fff'
            }
        })
    }

    return (
        <section className="container px-5 relative flex flex-col gap-10 mt-[-220px] z-50">
            <header >
                <div className="flex items-center justify-between">
                    <h2 className="text-5xl font-semibold tracking-[15px] text-white">TODO</h2>
                    <button
                        className="hover:brightness-75 duration-75"
                        title="Theme Light/Dark"
                        onClick={toggleTheme}
                    >
                        <img src={`/icons/${theme === 'dark' ? 'icon-moon.svg' : 'icon-sun.svg'}`} alt="Theme" />
                    </button>
                </div>

                <div className="mt-10 flex">
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        value={newTaskTitle}
                        className="w-full text-xl px-5 py-5 bg-slate-800 rounded-tl rounded-bl placeholder-slate-600"
                    />
                    <button
                        title="Create New Task"
                        className="w-16 flex items-center justify-center rounded-tr rounded-br bg-green-500 hover:brightness-75 duration-75"
                        onClick={handleCreateNewTask}
                    >
                        <BsCheckLg size={24} />
                    </button>
                </div>
            </header>

            <main>
                <ul className="list-none">
                    {
                        tasks.map(task => (
                            <li
                                key={task.id}
                                className="flex justify-between items-center mt-0 bg-slate-800 rounded-tl rounded-tr px-5 py-6 border-b border-zinc-500"
                            >
                                <div
                                    className={task.isComplete ? 'completed flex items-center justify-center gap-6' : 'flex items-center justify-center gap-6'}
                                >
                                    <label className="block relative pl-6 pt-4 mb-4">
                                        <input
                                            type="checkbox"
                                            readOnly
                                            checked={task.isComplete}
                                            className="inputTasks"
                                            onClick={() => handleToggleTaskCompletion(task.id)}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                    <p className="tracking-[1px] text-lg font-light">{task.title}</p>
                                </div>

                                <div className="flex gap-5">
                                    <button type="button" title="Delete" className="text-red-500 hover:brightness-75 duration-75" onClick={() => handleRemoveTask(task.id)}>
                                        <FiTrash size={18} />
                                    </button>
                                </div>

                            </li>
                        ))
                    }
                </ul>
            </main>
        </section>
    )
}