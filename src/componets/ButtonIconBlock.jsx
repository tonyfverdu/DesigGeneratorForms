import { useState, useEffect } from 'react';
import ButtonX from './ButtonX.jsx';
import InfoBlock from './InfoBlock.jsx';
import ActionButtons from './TeilLeft/MenuLeft/ActionButtons.jsx';
import { GROUP_BUTTONS_ACTIONS } from '../constants/contants.js';
import Popup from 'reactjs-popup';

function ButtonIconBlock({ iconComponent, block }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [infoBlock, setInfoBlock] = useState("");
  const [blockLocal, setBlockLocal] = useState(block);

  // Style CSS in line with the reactjs-popup
  const styleCircleCSS = {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    width: "auto",
    height: "auto",
    padding: "0.1rem",
    hover: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      transform: "scale(0.5)",
      transformScale: "0.5"
    },
    backgroundImage: "../../assets/icons/eyeicon.svg",
  };

  const contentStyle = { width: '30%', height: 'auto' };
  const overlayStyle = { width: 'auto' };

  useEffect(() => {
    setInfoBlock(JSON.stringify(block, null, 2));
    setBlockLocal(block);
  }, [block, isModalOpen]);

  const handleToggleModal = () => setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);

  return (
    <Popup
      trigger={
        <button
          type="button"
          className="buttonIcon btn btn-outline-secondary d-flex justify-content-center align-items-center rounded-circle"
          style={styleCircleCSS}
          onClick={handleToggleModal}
        >
          <span className="d-flex flex-row justify-content-center align-items-center p-1 m-1">
            {iconComponent}
          </span>
        </button>
      }
      open={isModalOpen}
      position="left top center"
      contentStyle={contentStyle}
      overlayStyle={overlayStyle}
    >
      {(close) => (
        <>
          <div className="modalPopup">
            <ButtonX toggleHeader={isModalOpen} setToggleHeader={close} />
          </div>

          <div className="content w-full">
            <InfoBlock
              blockSelect={blockLocal}
              setBlockSelect={setBlockLocal}
            // setRowSelect = {}
            // infoBlock={infoBlock}
            />
          </div>

          <div
            className="w-full d-flex justify-content-end align-items-center mx-auto"
            style={{ padding: "0.05rem", marginBottom: "0.2rem" }}
          >
            <ActionButtons {...GROUP_BUTTONS_ACTIONS} />
          </div>
        </>
      )}
    </Popup>
  );
}

export default ButtonIconBlock;

