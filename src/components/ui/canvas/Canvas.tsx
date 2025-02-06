import { ICanvas } from './ICanvas';

import Shape from '../shape/Shape';

import { useState } from 'react';
import { Layer, Stage } from 'react-konva';
import { KonvaEventObject } from 'konva/lib/Node';

import { FigureRect } from '@/types/types';

/**
 * Canvas component
 */
const Canvas = ({ tool, stageRef }: ICanvas) => {
  const [figures, setFigures] = useState<FigureRect[]>([]);

  const handleOnClick = (e: KonvaEventObject<MouseEvent>) => {
    if (tool === 'cursor') return;
    const stage = e.target.getStage();
    const stageOffset = stage!.absolutePosition();
    const point = stage!.getPointerPosition();

    setFigures((prev: FigureRect[]) => [
      ...prev,
      {
        id: Date.now().toString(36),
        width: 100,
        height: 100,
        type: 'rect',
        x: point!.x - stageOffset.x,
        y: point!.y - stageOffset.y,
        html: '',
        text: '',
      },
    ]);
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      draggable={tool === 'cursor'}
      onClick={handleOnClick}
      ref={stageRef}
    >
      <Layer>
        {figures.map((figure: FigureRect, i: number) => {
          return <Shape key={i} {...figure} stageRef={stageRef} tool={tool} />;
        })}
      </Layer>
    </Stage>
  );
};

export default Canvas;
