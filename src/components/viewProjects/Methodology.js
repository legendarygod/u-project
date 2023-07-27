import React from 'react'
import styled from 'styled-components'

const Methodology = () => {
  return (
    <Container>
      <SampleInfo>
        <SampleData>
          <SDHeader>Duration of Collection</SDHeader>
          <SDBody>
            Sample collection duration: <span> 04/05/23 </span> - <span>05/05/23</span>
          </SDBody>
        </SampleData>
        <SampleData>
          <SDHeader>Sample Type</SDHeader>
          <SDBody>
            Swabs from mobile phones
          </SDBody>
        </SampleData>
        <SampleData>
          <SDHeader>Location of samples</SDHeader>
          <SDBody>
            University of Nigeria, Enugu campus
          </SDBody>
        </SampleData>
        <SampleData>
          <SDHeader>Number of Samples</SDHeader>
          <SDBody>
            100
          </SDBody>
        </SampleData>
        <SampleData>
          <SDHeader>Sample Procession</SDHeader>
          <SDBody>
            100bkdjhbvlsvsb sidulbvnik ub lniukngdsloji u nliurebjsa;bikchbnl bujbl dnvskbn;lufdsib nibn ;lin ;in ;loi jnoilhneflmknf blhb ubniochkjsaxbindjvkbdhuyihnb lijsbbsjijbvjbwsddfslfggqe3nkbrkrjj rjrjjnvsnfneenf;sfv ign;ekdn;kdn dnv jknd f;l.dngcjnv.ldfni;fndskjknkjvnlskdn j nlkj, nl , nlk n n jknfnv ;   jendli n  lnf iln n 100bkdjhbvlsvsb sidulbvnik ub lniukngdsloji u nliurebjsa;bikchbnl bujbl dnvskbn;lufdsib nibn ;lin ;in ;loi jnoilhneflmknf blhb ubniochkjsaxbindjvkbdhuyihnb lijsbbsjijbvjbwsddfslfggqe3nkbrkrjj rjrjjnvsnfneenf;sfv ign;ekdn;kdn dnv jknd f;l.dngcjnv.ldfni;fndskjknkjvnlskdn j nlkj, nl , nlk n n jknfnv ;   jendli n  lnf iln n 100bkdjhbvlsvsb sidulbvnik ub lniukngdsloji u nliurebjsa;bikchbnl bujbl dnvskbn;lufdsib nibn ;lin ;in ;loi jnoilhneflmknf blhb ubniochkjsaxbindjvkbdhuyihnb lijsbbsjijbvjbwsddfslfggqe3nkbrkrjj rjrjjnvsnfneenf;sfv ign;ekdn;kdn dnv jknd f;l.dngcjnv.ldfni;fndskjknkjvnlskdn j nlkj, nl , nlk n n jknfnv ;   jendli n  lnf iln n 100bkdjhbvlsvsb sidulbvnik ub lniukngdsloji u nliurebjsa;bikchbnl bujbl dnvskbn;lufdsib nibn ;lin ;in ;loi jnoilhneflmknf blhb ubniochkjsaxbindjvkbdhuyihnb lijsbbsjijbvjbwsddfslfggqe3nkbrkrjj rjrjjnvsnfneenf;sfv ign;ekdn;kdn dnv jknd f;l.dngcjnv.ldfni;fndskjknkjvnlskdn j nlkj, nl , nlk n n jknfnv ;   jendli n  lnf iln n 100bkdjhbvlsvsb sidulbvnik ub lniukngdsloji u nliurebjsa;bikchbnl bujbl dnvskbn;lufdsib nibn ;lin ;in ;loi jnoilhneflmknf blhb ubniochkjsaxbindjvkbdhuyihnb lijsbbsjijbvjbwsddfslfggqe3nkbrkrjj rjrjjnvsnfneenf;sfv ign;ekdn;kdn dnv jknd f;l.dngcjnv.ldfni;fndskjknkjvnlskdn j nlkj, nl , nlk n n jknfnv ;   jendli n  lnf iln n 100bkdjhbvlsvsb sidulbvnik ub lniukngdsloji u nliurebjsa;bikchbnl bujbl dnvskbn;lufdsib nibn ;lin ;in ;loi jnoilhneflmknf blhb ubniochkjsaxbindjvkbdhuyihnb lijsbbsjijbvjbwsddfslfggqe3nkbrkrjj rjrjjnvsnfneenf;sfv ign;ekdn;kdn dnv jknd f;l.dngcjnv.ldfni;fndskjknkjvnlskdn j nlkj, nl , nlk n n jknfnv ;   jendli n  lnf iln n 100bkdjhbvlsvsb sidulbvnik ub lniukngdsloji u nliurebjsa;bikchbnl bujbl dnvskbn;lufdsib nibn ;lin ;in ;loi jnoilhneflmknf blhb ubniochkjsaxbindjvkbdhuyihnb lijsbbsjijbvjbwsddfslfggqe3nkbrkrjj rjrjjnvsnfneenf;sfv ign;ekdn;kdn dnv jknd f;l.dngcjnv.ldfni;fndskjknkjvnlskdn j nlkj, nl , nlk n n jknfnv ;   jendli n  lnf iln n 
          </SDBody>
        </SampleData>
      </SampleInfo>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 98%;
  padding: 10px;
`

const SampleInfo = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  background: #fff;
`

const SampleData = styled.div`
  border-bottom: 0.1px solid rgba(0,0,0,0.15);
  padding: 5px;
  display: flex;
  flex-direction: column;
`

const SDHeader = styled.span`
  font-weight: bolder;
  /* border-bottom: 0.07px solid rgba(0,0,0,0.09); */
  font-size: 18px;

`
const SDBody = styled.span`
  font-size: 14px;
  max-height: 400px;
  overflow: scroll;
  overflow-x: hidden;
  span{
    font-size: 14px;
    font-weight: bold;
  }
`

export default Methodology