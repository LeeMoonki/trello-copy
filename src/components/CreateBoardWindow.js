import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonCloseIcon from '../../public/btn-close.svg'
import CheckIcon from '../../public/check.svg';
// import ArrowSelectIcon from '../../public/arrow-select.svg';


const CreateBoardWindowContainer = styled.div`
  & .create-board-form {
    margin: 0 auto;
    width: 404px;
  }
`;
const CreateContainer = styled.div`
  display: flex;
`;
const WriteTitle = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 10px 10px 10px 16px;
  width: 296px;
  height: 96px;
  background-color: #fff;
  border-radius: 3px;

  & input {
    position: relative;
    left: -8px;
    width: calc(100% - 18px - 16px);
    box-shadow: none;
  }

  & input::placeholder {
    color: #fff;
  }
  & input:focus {
    background-color: rgba(250, 251, 252, .5)
  }
  & input:hover {
    background-color: rgba(250, 251, 252, .15)
  }

  & button {
    position: relative;
    top: -2px;
    right: -2px;
    float: right;
    width: 20px;
    height: 20px; 
  }
  & button > span {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-image: url(${ButtonCloseIcon});
    background-position: center;
    background-repeat: no-repeat;
  }
`;
const SelectBg = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 8px;
  width: 100px;
  height: 96px;

  & > li {
    margin-bottom: 6px;
    width: 28px;
    height: 28px;
    border-radius: 3px;
  }
`;
const ColorButton = styled.button`
  width: 100%;
  height: 100%;
  line-height: 16px;
  text-align: center;

  & > span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }

  & > .color--selected {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${CheckIcon});
  }
`;

const ActionWrapper = styled.div`
  display: flex;
`;

const CreateButton = styled.button`
  box-sizing: border-box;
  margin: 8px 4px 8px 0;
  padding: 6px 12px;
  display: inline-block;
  text-align: center;
  font-weight: 400;
  border-radius: 3px;

  &.disabled {
    background-color: #f4f5f7;
  }
`;

const colorList = [
  '#0079bf',
  '#de9034',
  '#519839',
  '#b04632',
  '#ffd868',
  '#696969',
  '#9acbf7',
  '#6bdd6d',
  '#fff',
];

function CreateBoardWindow(props) {
  const [title, setTitle] = useState('');
  const [selectedColor, setSelectedColor] = useState(0);

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };

  const onClickCreateBoard = e => {
    e.preventDefault();
    if (typeof props.onClickCreateBoard === 'function') {
      props.onClickCreateBoard({
        title,
        backgroundColor: colorList[selectedColor],
      });
    }
  };

  const onClickClose = e => {
    if (typeof props.onClickClose === 'function') {
      props.onClickClose();
    }
  };

  useEffect(() => {
    setTitle('');
  }, []);

  return (
    <CreateBoardWindowContainer>
      <form className="create-board-form">
        <CreateContainer>
          <WriteTitle
            style={{
              backgroundColor: colorList[selectedColor]
            }}
          >
            <button
              type="button"
              className="unstyled-button"
              onClick={onClickClose}
            >
              <span></span>
            </button>
            <div>
              <input
                placeholder="Add board title"
                className="subtle-input"
                value={title}
                onChange={onChangeTitle}
              />
            </div>
          </WriteTitle>
          <SelectBg>
            {colorList.map((color, index) => {
              return (
                <li key={`color${index}`} style={{ backgroundColor: color }}>
                  <ColorButton
                    type="button"
                    onClick={e => {
                      if (index < colorList.length - 1) {
                        setSelectedColor(index);
                      }
                    }}
                  >
                    <span className={selectedColor == index ? 'color--selected' : ''}>
                      {index === colorList.length - 1 && '...'}
                    </span>
                  </ColorButton>
                </li>
              );
            })}
          </SelectBg>
        </CreateContainer>
        <ActionWrapper>
          <CreateButton
            type="submit"
            disabled={!title}
            className={`button ${title ? 'primary' : 'disabled'}`}
            onClick={onClickCreateBoard}
          >
              Create Board
          </CreateButton>
        </ActionWrapper>
      </form>
    </CreateBoardWindowContainer>
  );
}

CreateBoardWindow.propTypes = {
  onClickCreateBoard: PropTypes.func,
  onClickClose: PropTypes.func,
};

export default CreateBoardWindow;