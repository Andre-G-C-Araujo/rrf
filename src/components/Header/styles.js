import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-radius: 0.5rem;
  border-bottom-color: #111;
  border-bottom-style: solid;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  width: 100%;
  height: 5rem;

  > h2 {
    font-size: 3rem;
    text-align: center;
    padding: 0.75rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
