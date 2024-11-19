import styled from "styled-components";
import BaseLayout from "./components/base/BaseLayout";
import CardMovie from "./components/organism/CardMovie";

function App() {
   return (
      <BaseLayout>
         <MovieList>
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
         </MovieList>
      </BaseLayout>
   );
}

const MovieList = styled.div`
   display: flex;
   justify-content: center;
   ${({ theme }) => theme.utils.screen("xl", "justify-content: flex-start;")};

   flex-wrap: wrap;
   gap: ${({ theme }) => theme.ref.spacing["16"]};

   margin-bottom: ${({ theme }) => theme.ref.spacing["16"]};
   ${({ theme }) => theme.utils.screen("lg", "margin-bottom: 0;")};
`;

export default App;
