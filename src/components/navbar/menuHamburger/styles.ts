import styled from 'styled-components';

export const HamburgerMenuWrapper = styled.div`
  cursor: pointer;
`;

export const InputCheckbox = styled.input`
  display: none;
`;

export const LabelToggle = styled.label`
  position: relative;
  width: 30px;
  cursor: pointer;
  margin: auto;
  display: block;
  height: calc(4px * 3 + 4px * 2);
`;

export const Bar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: calc(4px / 2);
  background: ${(props) => props.theme.navbar.color} !important;
  color: inherit;
  opacity: 1;
  transition: none 0.35s cubic-bezier(0.5, -0.35, 0.35, 1.5) 0s;
`;

export const BarTop = styled(Bar)<{ isOpen: boolean }>`
  bottom: ${({ isOpen }) =>
    isOpen ? 'calc(50% - -2px - 1px)' : 'calc(50% + 6px + 4px / 2)'};
  transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'none')};
  transition-property: bottom, margin, transform;
  transition-delay: ${({ isOpen }) =>
    isOpen
      ? 'calc(0s + 0.35s * .3),calc(0s + 0.35s * 1.3),calc(0s + 0.35s * 1.3)'
      : 'calc(0s + 0.35s),0s,0s'};
`;

export const BarMiddle = styled(Bar)<{ isOpen: boolean }>`
  top: calc(50% - 4px / 2);
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  transition-property: top, opacity;
  transition-duration: ${({ isOpen }) => (isOpen ? '0.35s,0s' : 'none')};
  transition-delay: calc(0s + 0.35s * 1.3), calc(0s + 0.35s * 1.3);
`;

export const BarBottom = styled(Bar)<{ isOpen: boolean }>`
  top: ${({ isOpen }) =>
    isOpen ? 'calc(50% - 4px / 2)' : 'calc(50% + 5px + 4px / 2)'};
  transition-property: top, transform;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'none')};
  transition-delay: ${({ isOpen }) =>
    isOpen ? 'calc(0s + 0.35s * 1.3),calc(0s + 0.35s * 1.3)' : '0s'};
`;
