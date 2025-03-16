export default interface EntityResponseDto<T = void> {
  value: string;
  tabsLabel: string;
  dados?: T;
}
