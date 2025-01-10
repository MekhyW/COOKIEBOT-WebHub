interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (newValue: number) => void;
  label?: string;
}

export function Slider({ min, max, value, onChange, label }: SliderProps) {
  return (
    <div className="flex flex-row items-center space-y-2">
      {label && (
        <label htmlFor="slider" className="text-start text-lg font-medium text-black mb-2 mr-2"> 
          {label}{value}
        </label>
      )}
      <input
        id="slider"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="w-full max-w-md h-2 bg-gray-200 rounded-lg appearance-none cursor-grabbing hover:cursor-grabbing hover:rounded-xl accent-blue-600"
      />
    </div>
  );
}
