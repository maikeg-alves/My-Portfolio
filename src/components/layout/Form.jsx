import styled from "styled-components";

export const inputGroup = styled.div`
  position: relative;
`;
export const userLabel = styled.label`
  position: absolute;
  left: 15px;
  color: #e8e8e8;
  pointer-events: none;
  transform: translateY(1rem);
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Input = styled.input`
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: #f5f5f5;
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  & :valid {
    outline: none;
    border: 1.5px solid #1a73e8;
  }

 ${userLabel}:focus , & :valid ${userLabel}  {
 transform: translateY(-50%) scale(0.8);
 background-color: #212121;
 padding: 0 .2em;
 color: #2196f3;
}
`;

export default function FormeSty() {
  return (
    <>
      <inputGroup>
        <Input
          required=""
          type="text"
          name="text"
          autocomplete="off"
          class="input"
        />
        <userLabel>First Name</userLabel>
      </inputGroup>
    </>
  );
}
