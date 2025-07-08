export interface IHaveTitle {
  areWeOnThisPage(): Promise<boolean>;
  goToPage(): Promise<void>;
}
