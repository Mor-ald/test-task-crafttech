import styles from './Shape.module.scss';
import { IShape } from './IShape';

import HtmlText from '../../ui/htmlText/HtmlText';

import html2canvas from 'html2canvas';
import Konva from 'konva';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Group, Rect } from 'react-konva';
import { Html } from 'react-konva-utils';
import { Editor, EditorTextChangeEvent } from 'primereact/editor';
import * as GroupTypes from 'konva/lib/Group';
import { Image } from 'konva/lib/shapes/Image';

const Shape: FC<IShape> = ({ x, y, width, height, tool, html, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [htmlValue, setHtmlValue] = useState(html);

  const groupRef = useRef<GroupTypes.Group>(null);
  const imageRef = useRef<Image | null>(null);
  const htmlRef = useRef<HTMLDivElement | null>(null);

  const renderImage = useCallback(async () => {
    const htmltext = document.getElementById(`htmltext_${id}`);

    if (htmltext) {
      const innerhtml = htmltext.innerHTML;

      if (innerhtml) {
        const canvas = await html2canvas(htmltext, {
          backgroundColor: 'rgba(0,0,0,0)',
        });
        const shape = new Konva.Image({
          x: 0,
          y: height / 2,
          scaleX: 1 / window.devicePixelRatio,
          scaleY: 1 / window.devicePixelRatio,
          image: canvas,
        });
        groupRef.current?.add(shape);
        imageRef.current = shape;
      } else return;
    } else return;
  }, [height, id]);

  useEffect(() => {
    renderImage();
  }, [renderImage]);

  const handleClick = useCallback(() => {
    if (tool === 'shape') return;

    setIsEditing((prev) => !prev);

    if (imageRef.current && !isEditing) imageRef.current.hide();
    else renderImage();
  }, [tool, isEditing, renderImage]);

  const handleInput = useCallback((e: EditorTextChangeEvent) => {
    setHtmlValue(e.htmlValue ? e.htmlValue : '');
  }, []);

  return (
    <>
      <Group x={x} y={y} onClick={handleClick} ref={groupRef} draggable>
        <Rect stroke={'black'} width={width} height={height} />
        {isEditing && (
          <Html>
            <Editor
              className={styles['shape-text-editor']}
              value={htmlValue}
              onTextChange={handleInput}
            />
          </Html>
        )}
      </Group>
      <Html>
        <HtmlText ref={htmlRef} html={htmlValue} id={id} />
      </Html>
    </>
  );
};

export default Shape;
