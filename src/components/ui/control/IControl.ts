import { Tool } from '@/types/types';

/**
 * Control component props
 */
export interface IControl {
  tool: Tool;
  setTool: React.Dispatch<React.SetStateAction<Tool>>;
}
