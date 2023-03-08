import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ApiProps {}

const StyledApi = styled.div`
  color: pink;
`;

export function Api(props: ApiProps) {
  return (
    <StyledApi>
      <h1>Welcome to Api!</h1>
    </StyledApi>
  );
}

export default Api;
