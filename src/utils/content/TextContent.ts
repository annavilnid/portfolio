import {testText} from '../../folder/testText';
import socialNetworkMain from '../../images/icon-social-network-main.png';
import socialNetworkActive from '../../images/icon-social-network-active.png';
import counterMain from '../../images/icon-counter-main.png';
import counterActive from '../../images/icon-counter-active.png';
import ReduxLogo from "../../images/icon-redux.svg";
import typescriptLogo from "../../images/icon-typescript.svg";
import reactLogo from "../../images/icon-react.svg";
import { v4 as uuidv4 } from 'uuid';

export const portfolioContent = [
  {id: uuidv4(), title: 'Social Network', description: testText, mainLogo: socialNetworkMain, activeLogo: socialNetworkActive},
  {id: uuidv4(), title: 'Counter', description: testText, mainLogo: counterMain, activeLogo: counterActive},
]

export const skillsContent = [
  {id: uuidv4(), title: 'React', description: testText, logo: reactLogo},
  {id: uuidv4(), title: 'TypeScript', description: testText, logo: typescriptLogo},
  {id: uuidv4(), title: 'Redux', description: testText, logo: ReduxLogo},
]

export type ProjectType = {
  id: string,
  title: string,
  description: string,
  mainLogo: string,
  activeLogo: string,
}

export type SkillType = {
  id: string,
  title: string,
  description: string,
  logo: string,
}

type PortfolioContentType = ProjectType[]

type SkillsContentType = SkillType[]