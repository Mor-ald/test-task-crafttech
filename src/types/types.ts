/**
 * Type of the tool
 */
export type Tool = 'cursor' | 'shape';

/**
 * Type of the figure
 */
export interface Figure {
  id: string;
  x: number;
  y: number;
  html: string;
  text: string;
}

/**
 * Type of the figure rect
 */
export interface FigureRect extends Figure {
  width: number;
  height: number;
  type: 'rect';
  html: string;
  text: string;
}
