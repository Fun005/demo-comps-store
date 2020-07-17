export type Type = 'info' | 'success' | 'error' | 'warning';
export type TypeMap = Record<Type, string>;

export interface TagProps {
  /**
   * Set this to change alert kind
   * @default info
   */
  color: String;
}
