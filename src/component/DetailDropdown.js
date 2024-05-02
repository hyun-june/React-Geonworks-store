import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton';

const DetailDropdown = () => {
  return (
    <div>
     <DropdownButton id="dropdown-basic-button" title="Option">
      <Dropdown.Item id="dropdown-menu" href="#/action-1">준비중입니다</Dropdown.Item>
      <Dropdown.Item href="#/action-2">재고 관리용(구입하지 마세요)</Dropdown.Item>
    </DropdownButton>
    </div>
  );
};

export default DetailDropdown;
