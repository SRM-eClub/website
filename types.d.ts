import { ModelViewerElement } from '@google/model-viewer';
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': Partial<ModelViewerElement> & { style: React.CSSProperties };
    }
  }
}
