import React from 'react';
import styles from "./tabGroup.module.css"
import HeaderFlex from "../headerFlex/HeaderFlex.jsx";
import Tab from "./Tab.jsx";

function TabGroup(props) {
    const [activeTab, setActiveTab] = React.useState(0);

    const clickHandle = (tab,setSelected)=>{
        setActiveTab(tab.id);
    }

    return (
        <HeaderFlex headContent = {
            props.tabs.map((tab,index) => <Tab {...props} key={index} tab={{name:tab.name,id:index}} selected={activeTab===index} handle={clickHandle} />)
        }
        headClassName={styles.head}
        bodyClassName={styles.body}>
            {
                activeTab!==null && props.tabs[activeTab].element
            }
        </HeaderFlex>
    );
}

export default TabGroup;