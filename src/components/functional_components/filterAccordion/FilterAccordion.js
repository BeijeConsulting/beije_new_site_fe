import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

// import style
import './FilterAccordion.css'
import OpenFilterBtn from "../openFilterBtn/OpenFilterBtn";
import CustomButton from "../Button/CustomButton";



const FilterAccordion = (props) => {

    const obj = [
        {
            nameFilter: 'All',
            onClickEvent: ''
        },
        {
            nameFilter: 'All',
            onClickEvent: ''
        },
        {
            nameFilter: 'All',
            onClickEvent: ''
        },
        {
            nameFilter: 'Backend',
            onClickEvent: ''
        },
        {
            nameFilter: 'Frontend',
            onClickEvent: ''
        }
    ]

    const changeIcon = (panelProps) => {
        if (panelProps.isActive) {
            return (
                <OpenFilterBtn
                    openIcon={false}
                    containerClassName={props.containerFilerIconClassName}
                />
            )
        }
        else {
            return (

                <OpenFilterBtn
                    openIcon={true}
                    containerClassName={props.containerFilerIconClassName}
                />
            )
        }
    }

    const printListFilter = (item, key) => {
        return (
            <div
                key={key}
                className="filter-accordion-single-filter-container"
            >
                <CustomButton
                    type={'filter-btn'}
                    content={item.nameFilter}
                />
            </div>

        )
    }

    return (
        <div className="filter-accordion-container">
            <Collapse
                bordered={false}
                ghost
                showArrow={false}
                expandIconPosition={"right"}
                expandIcon={(panelProps) => changeIcon(panelProps)}
                style={{ width: '100%' }}
                className="filter-accordion-collapse"
            >
                <Panel >
                    <div className="filter-accordion-filter-container">
                        {obj.map(printListFilter)}
                    </div>
                </Panel>
            </Collapse>

            <div className="filter-accordion-filter-container-desktop">
                {obj.map(printListFilter)}
            </div>
        </div>
    )
}

FilterAccordion.defaultProps = {
    containerFilerIconClassName: 'filter-accordion-btn'
}


export default FilterAccordion