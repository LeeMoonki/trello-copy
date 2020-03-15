import styled from 'styled-components';
import ButtonCloseIcon from '../../public/btn-close.svg'
import ArrowSelectIcon from '../../public/arrow-select.svg';


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
  padding: 10px 10px 10px 16px;
  width: 296px;
  height: 96px;
  background-color: #fff;

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
  margin-left: 8px;
  width: 100px;
  height: 96px;
`;

function CreateBoardWindow() {
  return (
    <CreateBoardWindowContainer>
      <form className="create-board-form">
        <CreateContainer>
          <WriteTitle
            style={{
              backgroundColor: 'rgb(0, 121, 191)'
            }}
          >
            {/* <div style={{width: 10, height: 10, backgroundColor: '#f0f'}}></div> */}
            <button type="button" className="unstyled-button">
              <span></span>
            </button>
            <div>
              <input placeholder="Add board title" className="subtle-input" />
            </div>
          </WriteTitle>
          <SelectBg></SelectBg>
        </CreateContainer>
      </form>
    </CreateBoardWindowContainer>
  );
}

export default CreateBoardWindow;