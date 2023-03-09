import { ItemForm, ReactHookFormExample } from '@fullstack-fe/forms';
import styled from 'styled-components';
import { YupItemForm } from './Forms/yup-item-form';
import { ZodItemForm } from './Forms/zod-item-form';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <ReactHookFormExample />
      <hr />
      <ItemForm />
      <hr />
      <YupItemForm />
      <hr />
      <ZodItemForm />
    </StyledApp>
  );
}

export default App;
