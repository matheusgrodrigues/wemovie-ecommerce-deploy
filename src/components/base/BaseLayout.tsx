import styled from "styled-components";
import Header from "../organism/Header";
import { Outlet } from "react-router";

export default function BaseLayout() {
   return (
      <BaseLayoutContainer>
         <Header data-testid="header" />
         <Outlet />
      </BaseLayoutContainer>
   );
}

const BaseLayoutContainer = styled.main`
   display: flex;
   flex-direction: column;
   background: ${({ theme }) => theme.ref.colors["dark1"]};

   ${({ theme }) => theme.utils.container()}
`;
