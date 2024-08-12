import styled from "styled-components";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    color: var(--color-pallet-1);
    display: flex;
    flex-direction: column;
    gap: .5rem;
`;

export const WrapperTab = styled(Tab)`
    border: 1px solid var(--color-pallet-2);
    padding: .5rem;
    user-select: none;
    margin-right: .5rem;
    cursor: pointer;
    
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: var(--color-pallet-2);
    }
    &.is-selected {
        background-color: var(--color-pallet-2);
    }

`;
WrapperTab.tabsRole = 'Tab';

export const WrapperTabList = styled(TabList)`
    justify-content: center;
    list-style-type: none;
    padding: .15rem;
    display: flex;
    margin: 0;
    z-index: 99999;
`;
WrapperTabList.tabsRole = 'Tablist';

export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    min-height: 40vh;
    padding: .5rem;
    margin-top: 1px;

    &.is-selected {
        border: none;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
    }
`;
WrapperTabPanel.tabsRole = 'TabPanel';
