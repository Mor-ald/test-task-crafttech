import styles from './Control.module.scss';
import { IControl } from './IControl';

import { Tool } from '@/types/types';

/**
 * Control component
 */
const Control = ({ tool, setTool }: IControl) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTool(e.target.value as Tool);
  };

  return (
    <div className={styles['control']}>
      <div className={styles['control-item']}>
        <input
          type="radio"
          id="cursor"
          name="control"
          value="cursor"
          checked={tool === 'cursor'}
          onChange={handleOnChange}
        />
        <label htmlFor="cursor">Взаимодействие</label>
      </div>
      <div className={styles['control-divider']}></div>
      <div className={styles['control-item']}>
        <input
          type="radio"
          id="shape"
          name="control"
          value="shape"
          checked={tool === 'shape'}
          onChange={handleOnChange}
        />
        <label htmlFor="shape">Добавление</label>
      </div>
    </div>
  );
};

export default Control;
