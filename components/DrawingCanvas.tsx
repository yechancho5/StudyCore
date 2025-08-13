import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

interface DrawingCanvasProps {
  width: number;
  height: number;
  onDrawingChange?: (drawingData: any) => void;
  initialDrawingData?: any;
  readOnly?: boolean;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({
  width,
  height,
  onDrawingChange,
  initialDrawingData,
  readOnly = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null);
  const [currentTool, setCurrentTool] = useState<'pen' | 'eraser'>('pen');
  const [currentColor, setCurrentColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(3);

  // Initialize Fabric.js canvas
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      width,
      height,
      backgroundColor: '#ffffff',
      isDrawingMode: !readOnly,
      selection: false,
      preserveObjectStacking: true,
    });

    fabricCanvasRef.current = canvas;

    // Set up drawing brush
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    canvas.freeDrawingBrush.color = currentColor;
    canvas.freeDrawingBrush.width = brushSize;

    // Load initial drawing data if provided
    if (initialDrawingData && !readOnly) {
      canvas.loadFromJSON(initialDrawingData, () => {
        canvas.renderAll();
      });
    }

    // Listen for drawing changes
    if (!readOnly) {
      canvas.on('path:created', () => {
        if (onDrawingChange) {
          onDrawingChange(canvas.toJSON());
        }
      });
    }

    return () => {
      canvas.dispose();
    };
  }, []);

  // Update brush properties when they change
  useEffect(() => {
    if (!fabricCanvasRef.current || readOnly) return;

    const canvas = fabricCanvasRef.current;
    
    if (currentTool === 'pen') {
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
      canvas.freeDrawingBrush.color = currentColor;
      canvas.freeDrawingBrush.width = brushSize;
    } else if (currentTool === 'eraser') {
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
      canvas.freeDrawingBrush.color = '#ffffff';
      canvas.freeDrawingBrush.width = brushSize * 2;
    }
  }, [currentTool, currentColor, brushSize, readOnly]);

  const clearCanvas = () => {
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.clear();
      fabricCanvasRef.current.backgroundColor = '#ffffff';
      fabricCanvasRef.current.renderAll();
      if (onDrawingChange) {
        onDrawingChange(fabricCanvasRef.current.toJSON());
      }
    }
  };

  const undo = () => {
    if (fabricCanvasRef.current) {
      const objects = fabricCanvasRef.current.getObjects();
      if (objects.length > 0) {
        fabricCanvasRef.current.remove(objects[objects.length - 1]);
        if (onDrawingChange) {
          onDrawingChange(fabricCanvasRef.current.toJSON());
        }
      }
    }
  };

  if (readOnly) {
    return (
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <canvas ref={canvasRef} />
      </div>
    );
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="bg-gray-50 p-3 border-b border-gray-300 flex items-center gap-4">
        {/* Tool Selection */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentTool('pen')}
            className={`p-2 rounded ${currentTool === 'pen' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            title="Pen Tool"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentTool('eraser')}
            className={`p-2 rounded ${currentTool === 'eraser' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            title="Eraser Tool"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>

        {/* Color Picker */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Color:</span>
          <input
            type="color"
            value={currentColor}
            onChange={(e) => setCurrentColor(e.target.value)}
            className="w-8 h-8 border border-gray-300 rounded cursor-pointer"
            disabled={currentTool === 'eraser'}
          />
        </div>

        {/* Brush Size */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Size:</span>
          <input
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={(e) => setBrushSize(parseInt(e.target.value))}
            className="w-20"
          />
          <span className="text-xs text-gray-500 w-6">{brushSize}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={undo}
            className="p-2 bg-white text-gray-700 hover:bg-gray-100 rounded"
            title="Undo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
          </button>
          <button
            onClick={clearCanvas}
            className="p-2 bg-white text-gray-700 hover:bg-gray-100 rounded"
            title="Clear Canvas"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Canvas */}
      <canvas ref={canvasRef} />
    </div>
  );
};

export default DrawingCanvas;
