import { Stage } from 'konva/lib/Stage';
import { RefObject } from 'react';

import { Tool } from '@/types/types';

/**
 * Shape component props
 */
export interface IShape {
  x: number;
  y: number;
  width: number;
  height: number;
  tool: Tool;
  html: string;
  id: string;
  text: string;
  stageRef: RefObject<Stage>;
}
