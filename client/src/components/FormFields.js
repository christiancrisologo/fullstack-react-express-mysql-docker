import styled from "styled-components"; 

export const InputField = styled.input` 
    font-size:  16px; 
    padding:  20px 0px; 
    height:  56px; 
    border:  none; 
    border-bottom:  solid 1px rgba(0,0,0,.1); 
    background:  #fff; 
    width:  280px; 
    box-sizing:  border-box; 
    transition:  all .3s linear; 
    color:  #000; 
    font-weight:  400;
    -webkit-appearance:  none; 
    &:focus {
    border-bottom:  solid 1px $primary; 
    outline: 0; 
    box-shadow:  0 2px 6px -8px rgba($primary, .45);
    } 
` 

export const ActionButtons = styled.div`
    display: flex;
    align-items: flex-center;
    justify-content: center;
    margin-top: 16px; 
`;


export const FormControl = styled.div`
    position:  relative; 
    margin-bottom:  10px;
    width:  100%; 
    label {
        position:  absolute; 
        top: calc(50% - 7px);
        left:  0; 
        opacity:  0; 
        transition:  all .3s ease; 
        padding-left:  44px; 
    }
    input {
        width:  calc(100% - 44px); 
        margin-left:  auto;
        display:  flex; 
    }
    .icon {
        position:  absolute; 
        top:  0; 
        left:  0; 
        height:  56px; 
        width:  44px; 
        display:  flex; 
        svg {
            height:  30px; 
            width:  30px; 
            margin:  auto;
            opacity:  .15; 
            transition:  all .3s ease; 
            path {
            transition:  all .3s ease; 
            }
        }
    }
    input:not(:placeholder-shown) {
        padding:  28px 0px 12px 0px; 
    }
    input:not(:placeholder-shown) + label {
        transform:  translateY(-10px); 
        opacity:  .7; 
    }
    input:valid:not(:placeholder-shown) + label + .icon {
        svg {
            opacity:  1; 
            path {
            fill:  $primary; 
            }      
        }
    }
    input:not(:valid):not(:focus) + label + .icon {
        animation-name: shake-shake;
        animation-duration: .3s;
    }
`

export const FormContainer = styled.form` 
    padding:  40px 30px; 
    background:  #fefefe; 
    display:  flex; 
    flex-direction:  column;
    align-items:  flex-center; 
    padding-bottom:  24px; 
    min-width:  300px; 
    h4 {
        margin: 0 auto;
        margin-bottom:  20px;
        color:  rgba(0,0,0,0.5);
        span {
            color:  #000;
            font-weight:  900; 
        }
    }
    p{
        color: #ffffff;
        text-align: center;
        font-size: 14px;
        background: #085f08;
        width: auto;
        border-radius: 15px;
        max-width: 80%;
        margin: 16px auto;
        padding: 4px 10px;
    }
`;
