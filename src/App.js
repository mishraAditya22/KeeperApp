import React,{useState} from 'react';
import List from './List';

const App = ()=>{
    const [input,setInput] = useState("");
    const [itemList,setItemList] = useState([]);
    const itemEvent = (event)=>{
        setInput(event.target.value);
    }
    const listOfItems = ()=>{
        setItemList((preValue)=>{
            return [...preValue,input];
        });
    };
    const onsubmits = (event)=>{
        event.preventDefault();
        //alert("Data Feeded");
        setInput("");
    };
    const deleteItems = (id)=>{
        console.log("Deleted");
        setItemList((oldItems)=>{
            return oldItems.filter((arrElement,index)=> {
                return id!==index;
            })
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="Form">
                    <h1 id="heading">
                        ToDo List
                    </h1>
                    <form onSubmit={onsubmits}>
                        <input 
                            type="text" 
                            placeholder="Enter Your Task Sir" 
                            value={input} 
                            name="listEntry" 
                            onChange={itemEvent} 
                            autoComplete="off"
                        />
                        <button type="submit" className="plus" onClick={listOfItems}> +  </button>
                        <ol>
                        {itemList.map((itemVal,index)=>{
                            // return <li>{itemVal}</li>;
                            return (
                                <List 
                                    key={index}
                                    id={index} 
                                    text ={itemVal}
                                    onSelect = {deleteItems}
                                />
                            )
                        })}
                        </ol>
                    </form>
                </div>
            </div>
        </>
    )
}

export default App;