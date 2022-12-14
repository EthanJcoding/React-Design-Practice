import React, { useState } from 'react';
import styled from 'styled-components';

const Tab = () => {
    const [currentTab, setCurrentTab] = useState(0);
    
    const menuArr = [
        { name: 'Tab1', content: 'Tab menu ONE' },
        { name: 'Tab2', content: 'Tab menu TWO' },
        { name: 'Tab3', content: 'Tab menu THREE' },
    ];
    
    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };
    
    return (
        <>
        <div>
          <TabMenu>
            {menuArr.map((ele, index)=>{
                return (
                    <li
                    key={index}
                    className={currentTab === index ? "submenu focused" : "submenu"}
                    onClick={()=> selectMenuHandler(index)}
                    >
                {ele.name}
              </li>
                )
            })}
  
          </TabMenu>
            <h1>{menuArr[currentTab].content}</h1>
            <p>바뀌는거 맞습니다..</p>
        </div>
      </>
    );
};

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;

  .submenu {
    width:100% auto;
    padding: 15px 10px;
    cursor: pointer;
  }
`;

export default Tab 
