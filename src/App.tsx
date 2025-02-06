import { Tool } from './types/types';

import { useRef, useState } from 'react';
import { Stage } from 'konva/lib/Stage';

import Canvas from '@/components/ui/canvas/Canvas';
import Control from '@/components/ui/control/Control';

const App = () => {
  const [tool, setTool] = useState<Tool>('cursor');
  const stageRef = useRef<Stage>(null);

  return (
    <>
      <Canvas tool={tool} stageRef={stageRef} />
      <Control tool={tool} setTool={setTool} />
    </>
  );
};

export default App;
