import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import { Switch } from "@material-tailwind/react";

export default function SensorSwitch() {
  return (
    <div className="flex max-h-24 items-center gap-2 rounded-2xl bg-blue-400 p-2">
      <CubeTransparentIcon className="size-36" />
      <p className="text-balance text-sm">
        PIR sensor detects unauthorized motion in certain areas like burglary
      </p>
      <SwitchCustomStyles />
    </div>
  );
}

export function SwitchCustomStyles() {
  return (
    <Switch
      id="custom-switch-component"
      ripple={false}
      className="h-full w-full checked:bg-[#2ec946]"
      containerProps={{
        className: "w-8 h-4",
      }}
      circleProps={{
        className: "before:hidden left-0.5 border-none w-4 h-4",
      }}
    />
  );
}
