import './DragDrop.css';
import React, { useState } from "react";
import Image from './assets/Image.png';
import CourseData from './Data/CourseData.json';
import {
    DndContext,
    closestCenter   
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";
import SortableItem from './components/SortableItem.jsx';

export default function DragDrop() {
    const [data, setData] = useState(CourseData);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        console.log('Drag and Called');
        console.log("Active: " + active.id);
        console.log("Over: " + over.id);

        if (active.id !== over.id) {
            setData((items) => {
                const activeIndex = items.findIndex(item => item.id === active.id);
                const overIndex = items.findIndex(item => item.id === over.id);
                console.log(arrayMove(items, activeIndex, overIndex));
                return arrayMove(items, activeIndex, overIndex);
            });
        }
    };

    const [menuOpen, setMenuOpen] = useState(null);

    const handleMenuToggle = (id) => {
        setMenuOpen(() => (menuOpen === id ? null : id));
    };

    return (
        <div className="container">
            <h1 className="title">Chai aur Code</h1>
            <div className="box">
                <div className="cardContainer">
                    <h2 className="orderHeading">Manage Bundle</h2>
                    <p className="orderDescription">Change orders of the products based on priority</p>

                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={data.map(item => item.id)}
                            strategy={verticalListSortingStrategy}
                        >
                            {data.map((eachData) => (
                                <SortableItem
                                    key={eachData.id}
                                    id={eachData.id}
                                    data={eachData}
                                    menuOpen={menuOpen}
                                    handleMenuToggle={handleMenuToggle}
                                />
                            ))}
                        </SortableContext>
                    </DndContext>
                </div>
            </div>
            <a id="dragDrop" target='_blank' rel="noopener noreferrer" href="https://courses.chaicode.com/learn">
                <img src={Image} alt="Course" />
            </a>
        </div>
    );
}
