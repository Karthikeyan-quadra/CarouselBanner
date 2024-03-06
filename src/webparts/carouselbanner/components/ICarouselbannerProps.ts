import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ICarouselbannerProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  userEmail:any;
  context:WebPartContext;
  // collectionData:any;
}
