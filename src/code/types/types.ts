export type SurveyDetails = {
  law: string;
  page: string;
  formColor: string;
  details: CrimeProps[];
}

export type CrimeProps = {
  crime: string;
  description: string;
  btnText: string;
  bgColor: string;
  btnColor: string;
  titleColor: string;
  outerColor: string;
}
export interface ContextType {
  scroll: number;
  setScroll: React.Dispatch<React.SetStateAction<number>>;
  sectionHash: string;
  setSectionHash: React.Dispatch<React.SetStateAction<string>>
}