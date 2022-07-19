import React from 'react';

const List = (props)=>{
    
    return (
        <>
            <div> 
                <button 
                    className="remove"
                    type="button"
                    // onClick={props.onSelect}
                    onClick={()=>{
                        props.onSelect(props.id);
                    }}
                >
                    *
                </button>
                <li className="items" >{props.text}</li>
            </div>
        </>
    )
};

export default List;