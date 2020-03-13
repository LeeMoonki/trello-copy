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
  width: 296px;
  height: 96px;
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
          <WriteTitle></WriteTitle>
          <SelectBg></SelectBg>
        </CreateContainer>
      </form>
    </CreateBoardWindowContainer>
  );
}

export default CreateBoardWindow;