import { Menu } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import iconUnitedStates from "../../assets/icon/united-states.png";
import iconVietnam from "../../assets/icon/vietnam.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Dropdown } from "antd/lib";
import { Buttonanguage, IConLanguage } from "../apps/styled";
const DropdownLanguage = styled(Dropdown)`
  position: fixed;
  top: 20px;
  right: 20px;
`;

const MenuLanguage = () => {
  const { t } = useTranslation();
  const language = useSelector((state) => state?.auth?.language);
  const setLanguage = (languageChange) => {
    // dispatch(storeSetLanguage(languageChange));
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <div
              onClick={() => {
                i18next.changeLanguage("vi");
                setLanguage("vi");
              }}
            >
              <IConLanguage src={iconVietnam} alt="" /> {t("common.vietNam")}
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <div
              onClick={() => {
                i18next.changeLanguage("en");
                setLanguage("en");
              }}
            >
              <IConLanguage src={iconUnitedStates} alt="" />{" "}
              {t("common.engLish")}
            </div>
          ),
        },
      ]}
    />
  );

  return (
    <DropdownLanguage overlay={menu} placement="bottomLeft">
      <Buttonanguage>
        {" "}
        <IConLanguage
          src={language === "vi" ? iconVietnam : iconUnitedStates}
          alt=""
        />{" "}
        {language}
      </Buttonanguage>
    </DropdownLanguage>
  );
};

export default MenuLanguage;
