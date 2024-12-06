import styled from "styled-components";

const VisionText = styled.text``;

const VisionDiv = styled.div`
  width: 300px;
  display: flex;
  justify
`;

const DivDiv = styled.div`
  display: flex; 
   justify-content: center;


`;

function Vision() {
  return (
    <>
      <DivDiv>
        <h1>Vision</h1>

        <VisionDiv>
          <VisionText>
            Fitness API’et skal tilbyde en brugervenlig platform med øvelser
            opdelt i muskelgrupper: arme, ryg, bryst, ben og skuldre. Brugere
            kan tilpasse vægt og reps for hvert sæt, gemme ændringer i realtid
            og spore deres fremgang over tid. API’et understøtter personlig
            træningsplanlægning på en simpelt og minimalistisk måde. API’et
            giver adgang til alle øvelser mm. og inkluderer security.
          </VisionText>
        </VisionDiv>
      </DivDiv>
    </>
  );
}

export default Vision;
