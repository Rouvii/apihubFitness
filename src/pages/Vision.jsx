import styled from "styled-components";

const VisionText = styled.text`
  font-size: 20px;
  margin: 20px;
  text-align: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #f2f2f2;
  box-shadow: 5px 5px 5px #888888;
  width: 600px;
  display: flex;
  justify-content: center;

`;

const VisionDiv = styled.div`
  width: 300px;
  display: flex;
  justify
`;

const DivDiv = styled.div`
  display: flex; 
   justify-content: center;


`;

const H1 = styled.h1`
  text-align: center;
  
`;

function Vision() {
  return (
    <>
    <H1>Vision</H1>
      <DivDiv>
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
