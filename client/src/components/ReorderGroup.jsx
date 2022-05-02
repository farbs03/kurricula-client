import React, { useState } from 'react'
import { Reorder } from "framer-motion"
import ReorderItem  from "./ReorderItem"

const ReorderGroup = ({items, setItems}) => {
    return (
        <Reorder.Group axis="y" onReorder={setItems} values={items}>
            {items.map((item) => (
                <ReorderItem key={item.title} item={item} />
            ))}
        </Reorder.Group>
    )
}

export default ReorderGroup