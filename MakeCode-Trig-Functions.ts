namespace TrigModes {
    let pi = 0;

    //% block="degrees of %angle"
    //% angle.min=-180 angle.max=180
    export function Degrees(angle: number): number {
        pi = Math.atan2(0, -1); // Calculate pi (π)
        return pi * angle / 180; // Convert angle from degrees to radians
    }
}
