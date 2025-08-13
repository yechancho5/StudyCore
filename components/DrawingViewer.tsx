import React, { useEffect, useRef, useCallback } from 'react';
import { Canvas, Path } from 'fabric';

interface DrawingViewerProps {
  drawingData: any;
  width?: number;
  height?: number;
}

const DrawingViewer: React.FC<DrawingViewerProps> = ({ 
  drawingData, 
  width = 400, 
  height = 300 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<Canvas | null>(null);
  const lastDrawingDataRef = useRef<string>('');
  const isInitializedRef = useRef(false);

  const loadDrawing = useCallback(() => {
    if (!canvasRef.current || !drawingData) {
      console.log('DrawingViewer: Missing canvas ref or drawing data');
      return;
    }

    // Prevent infinite loops by checking if drawing data actually changed
    const drawingDataString = JSON.stringify(drawingData);
    if (lastDrawingDataRef.current === drawingDataString && isInitializedRef.current) {
      console.log('DrawingViewer: Drawing data unchanged, skipping re-render');
      return;
    }
    lastDrawingDataRef.current = drawingDataString;

    console.log('DrawingViewer: Starting to load drawing data:', { 
      hasDrawingData: !!drawingData, 
      drawingDataKeys: drawingData ? Object.keys(drawingData) : [],
      drawingDataType: typeof drawingData,
      drawingDataString: JSON.stringify(drawingData).substring(0, 200) + '...',
      width, 
      height 
    });

    // Clean up previous canvas only if we're reinitializing
    if (fabricCanvasRef.current && !isInitializedRef.current) {
      fabricCanvasRef.current.dispose();
      fabricCanvasRef.current = null;
    }

    // Set canvas element attributes immediately
    canvasRef.current.width = width;
    canvasRef.current.height = height;
    canvasRef.current.style.width = `${width}px`;
    canvasRef.current.style.height = `${height}px`;

    console.log('DrawingViewer: Canvas dimensions set:', { width, height });

    try {
      // Create new Fabric.js canvas with explicit dimensions
      const canvas = new Canvas(canvasRef.current, {
        width: width,
        height: height,
        backgroundColor: '#ffffff',
        isDrawingMode: false,
        selection: false,
        preserveObjectStacking: true,
        renderOnAddRemove: true,
        skipTargetFind: true,
        interactive: false,
      });

      fabricCanvasRef.current = canvas;
      isInitializedRef.current = true;

      console.log('DrawingViewer: Fabric canvas created, loading drawing data...');

      // Check if we have objects to load
      if (drawingData.objects && Array.isArray(drawingData.objects) && drawingData.objects.length > 0) {
        console.log('DrawingViewer: Found objects to load:', drawingData.objects.length);
        
        // Calculate the bounding box of all objects first
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        
        drawingData.objects.forEach((objData: any) => {
          if (objData.type === 'Path' && objData.path) {
            // Calculate path bounds
            objData.path.forEach((command: any) => {
              if (Array.isArray(command) && command.length >= 3) {
                const x = command[1];
                const y = command[2];
                if (typeof x === 'number' && typeof y === 'number') {
                  minX = Math.min(minX, x);
                  minY = Math.min(minY, y);
                  maxX = Math.max(maxX, x);
                  maxY = Math.max(maxY, y);
                }
              }
            });
          }
        });

        // Calculate center offset
        const drawingWidth = maxX - minX;
        const drawingHeight = maxY - minY;
        const canvasCenterX = width / 2;
        const canvasCenterY = height / 2;
        const drawingCenterX = minX + drawingWidth / 2;
        const drawingCenterY = minY + drawingHeight / 2;
        
        const offsetX = canvasCenterX - drawingCenterX;
        const offsetY = canvasCenterY - drawingCenterY;

        console.log('DrawingViewer: Centering calculation:', { 
          drawingBounds: { minX, minY, maxX, maxY, width: drawingWidth, height: drawingHeight },
          canvasCenter: { x: canvasCenterX, y: canvasCenterY },
          drawingCenter: { x: drawingCenterX, y: drawingCenterY },
          offset: { x: offsetX, y: offsetY }
        });
        
        // Manually add each object to the canvas with adjusted positions
        drawingData.objects.forEach((objData: any, index: number) => {
          try {
            if (objData.type === 'Path') {
              const path = new Path(objData.path, {
                left: (objData.left || 0) + offsetX,
                top: (objData.top || 0) + offsetY,
                stroke: objData.stroke || '#000000',
                strokeWidth: objData.strokeWidth || 1,
                fill: objData.fill || null,
                opacity: objData.opacity || 1,
                scaleX: objData.scaleX || 1,
                scaleY: objData.scaleY || 1,
                angle: objData.angle || 0,
                flipX: objData.flipX || false,
                flipY: objData.flipY || false,
                originX: objData.originX || 'left',
                originY: objData.originY || 'top',
              });
              canvas.add(path);
              console.log('DrawingViewer: Added path object:', index);
            }
          } catch (error) {
            console.error('DrawingViewer: Error adding object:', index, error);
          }
        });

        // Force a render
        canvas.renderAll();
        console.log('DrawingViewer: Drawing loaded successfully, objects count:', canvas.getObjects().length);
      } else {
        console.log('DrawingViewer: No objects found in drawing data');
        console.log('DrawingViewer: Raw drawing data:', drawingData);
      }
    } catch (error) {
      console.error('DrawingViewer: Error creating canvas:', error);
    }
  }, [drawingData, width, height]);

  useEffect(() => {
    loadDrawing();
  }, [loadDrawing]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose();
        fabricCanvasRef.current = null;
      }
      isInitializedRef.current = false;
    };
  }, []);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white" style={{ width, height }}>
      <canvas 
        key={`canvas-${JSON.stringify(drawingData).substring(0, 20)}`}
        ref={canvasRef} 
        style={{ 
          display: 'block',
          width: `${width}px`,
          height: `${height}px`
        }}
      />
    </div>
  );
};

export default DrawingViewer;
