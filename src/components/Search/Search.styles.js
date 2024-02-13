import styled from 'styled-components';

// Container principal do Search
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column; 
  padding: 10px 20px; 
  background-color: #444; 
  color: #fff;
`;

export const SearchInput = styled.input`
  flex-grow: 1; 
  border: none; 
  background-color: transparent; 
  color: #fff;
  font-size: 14px;
  padding: 5px; 
  border-bottom: 1px solid #fff; /* Add a bottom border */
`;

export const SearchResultContainer = styled.div`
  margin-top: 10px; 
  display: flex;
  flex-direction: column;
`;

export const SearchResultItem = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;