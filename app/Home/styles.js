import styled from 'styled-components/native';
import { SimpleLineIcons } from '@expo/vector-icons'; 

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 0px 20px 20px 20px;
`

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
	border-radius: 200px;
  margin-right: 20px;
`

export const Icon = styled(SimpleLineIcons)`
  font-size: 24px;
  color: white;
  margin-right: 15px;
`