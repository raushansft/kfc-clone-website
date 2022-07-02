import kfclogo from "../images/kfclogo.png";
import styled from 'styled-components'
const TopWrapper =styled.div`
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

const Header= () => {

    return(
        <>
        <TopWrapper >
            <img src={kfclogo} style={{marginLeft:'40%',marginRight:'20%',padding:"7px"}} alt="kfclogo"/>
        </TopWrapper>
        </>
    )
}

export default Header;