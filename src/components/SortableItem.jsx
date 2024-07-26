import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function SortableItem({ id, data, menuOpen, handleMenuToggle }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

   
    return (
        <div ref={setNodeRef} style={style} >
            <div className="dragableList">
                <ul className="courseLists">
                    <li className="courseList">
                        <div className="leftSide">
                            <div className="doubleVector" {...listeners} {...attributes}>⋮⋮</div>
                            <img className='courseIcon' src={data.picture} alt="course-image" />
                            <span className='courseTitle'>{data.title}</span>
                        </div>
                        <div className="rightSide">
                            <span className='coursePrice'>{data.price}</span>
                            <span className='courseType'>{data.type}</span>
                            <div className="singleVector" onClick={() => handleMenuToggle(id)}>⋮</div>
                            {menuOpen ===id &&
                                (<div className="dropMenu">
                                    <ul>
                                        <li className="dropMenu moveTop"><FontAwesomeIcon icon={faArrowUp} /> Move To Top</li>
                                        <li className="dropMenu moveBottom"><FontAwesomeIcon icon={faArrowDown} /> Move To Bottom</li>
                                        <li className="dropMenu remove"><FontAwesomeIcon icon={faTrashCan} />  Remove</li>
                                    </ul>
                                </div>)
                            }
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}