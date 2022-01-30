import { useEffect, useState } from "react";
import "./Grid.css";

let Grid = (props) => {
    const [ROW_SIZE, setRowSize] = useState(1);
    const [COLUMN_SIZE, setColumnSize] = useState(1);

    const [WINDOW_WIDTH, setWindowWidth] = useState(window.innerWidth);

    const [ITEMS, setItems] = useState(
        props.items ? props.items : [<div key="0">Item 1</div>]
    );

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        // Calculate rows and columns

        let half_val = Math.floor(ITEMS.length / 2);
        // calculateGridSize(ITEMS.length);
        if (WINDOW_WIDTH < 900) {
            setRowSize(ITEMS.length);
            setColumnSize(1);
        } else {
            if (ITEMS.length % 2 === 1) {
                setRowSize(half_val);
                setColumnSize(half_val + 1);
            } else {
                setRowSize(half_val);
                setColumnSize(half_val);
            }
        }

        window.addEventListener("resize", handleResize);
    }, [ITEMS.length, WINDOW_WIDTH]);

    return (
        <div className="main-container">
            <div
                className="main-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${COLUMN_SIZE}, auto)`,
                    gridTemplateRows: `repeat(${ROW_SIZE}, auto)`,
                }}
            >
                {ITEMS}
            </div>
        </div>
    );
};

export default Grid;
