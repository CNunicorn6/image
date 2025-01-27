import Image from 'rc-image';
import React from 'react';
import '../../assets/index.less';
import { defaultIcons } from './common';

export default function ToolbarRender() {
  return (
    <div>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        width={200}
        preview={{
          icons: defaultIcons,
          toolbarRender: (
            _,
            {
              actions: {
                onFlipY,
                onFlipX,
                onRotateLeft,
                onRotateRight,
                onZoomIn,
                onZoomOut,
                onSwitchLeft,
                onSwitchRight,
              },
            },
          ) => {
            return (
              <div
                style={{ position: 'fixed', display: 'flex', bottom: 0, width: '100%', gap: 10 }}
              >
                <div onClick={onFlipY}>flipY</div>
                <div onClick={onFlipX}>flipX</div>
                <div onClick={onRotateLeft}>rotateLeft</div>
                <div onClick={onRotateRight}>rotateRight</div>
                <div onClick={onZoomIn}>zoomIn</div>
                <div onClick={onZoomOut}>zoomOut</div>
                <div onClick={onSwitchLeft}>left</div>
                <div onClick={onSwitchRight}>right</div>
              </div>
            );
          },
        }}
      />
    </div>
  );
}
