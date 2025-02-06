import { Stage } from 'konva/lib/Stage';
import { RefObject } from 'react';

import { Tool } from '@/types/types';

/**
 * Canvas component props
 */
export interface ICanvas {
  tool: Tool;
  stageRef: RefObject<Stage>;
}
