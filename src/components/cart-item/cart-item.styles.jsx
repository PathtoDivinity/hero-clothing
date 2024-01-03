import styled from "styled-components";

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
    img {
        width: 30%;
    }
`;

export const ItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
    
    span {
        font-size: 16px;
    }
`;

export const RemoveButton = styled.div`
    padding-left: 8px;
    cursor: pointer;
    transform: translateY(35%);
`;


export const QuantitySelect = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color:
    border: none;
    font-size: 16px;
    cursor: pointer;
    padding-left: 5px;

    &:focus {
        outline: none;
    }

    /* Style for the arrow indicator */
    &::-ms-expand {
        display: none; 
    }
`;