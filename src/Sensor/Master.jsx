import SensorSwitch from "./SensorSwitch";

function Master() {
  return (
    <div className="min-h-80 basis-1/2 p-3">
      <h2 className="mb-4 text-xl">Master</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        <SensorSwitch />
        <SensorSwitch />
        <SensorSwitch />
        <SensorSwitch />
      </div>
    </div>
  );
}

export default Master;
