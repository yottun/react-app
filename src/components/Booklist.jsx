import React, { useState, useEffect } from "react";

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])
    // console.log(bookData.data.items);
    return (
        <div>
            <ul>
                {
                    bookData === null
                        ? <p>now loading...</p>
                        : bookData.data.items.map((x, index) =>
                            <li key={index}>
                                <img src={x.volumeInfo.imageLinks.smallThumbnail} alt=""/>
                                <a href={x.volumeInfo.infoLink} target="_blank">{x.volumeInfo.title}</a>
                            </li>
                        )
                }
            </ul>
        </div>
    );
}
export default Booklist;