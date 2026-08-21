export type CrimeProps = {
  crime: string;
  description: string;
  btnText: string;
  bgColor: string;
  btnColor: string;
  titleColor: string;
}
export interface ContextType {
  scroll: number;
  setScroll: React.Dispatch<React.SetStateAction<number>>;
  sectionHash: string;
  setSectionHash: React.Dispatch<React.SetStateAction<string>>
}