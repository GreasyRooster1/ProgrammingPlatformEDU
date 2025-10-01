import React from 'react';
import styles from "./tabGroup.module.css"
import HeaderFlex from "../headerFlex/HeaderFlex.jsx";
import Tab from "./Tab.jsx";

function TabGroup(props) {
    const [activeTab, setActiveTab] = React.useState(null);

    const clickHandle = ()=>{

    }

    return (
        <HeaderFlex headContent = {
            props.tabs.map((tab,index) => <Tab {...props} key={index} tabName={tab.name} selected={activeTab===tab.name} onClick={clickHandle} />)
        }>

        </HeaderFlex>
    );
}

export default TabGroup;