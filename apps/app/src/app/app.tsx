import { ItemForm, ReactHookFormExample } from '@fullstack-fe/forms';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <ReactHookFormExample />
      <hr />
      <ItemForm />
    </StyledApp>
  );
}

export default App;
