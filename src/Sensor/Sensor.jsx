import Master from "./Master";
import RoomA from "./RoomA";

function Sensor() {
  return (
    <main className="">
      <div>current weather</div>
      <div className="mt-8 flex gap-4 rounded-lg bg-green-300">
        <Master />
        <RoomA />
      </div>
    </main>
  );
}

export default Sensor;
