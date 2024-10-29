export default function TabButton({ children, onSelect, isSelected,buttonContainer }) {

  const ButtonContainer = buttonContainer;
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <ButtonContainer className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </ButtonContainer>
    </li>
  );
}
