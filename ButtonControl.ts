import { Control } from "./Control";

/**
 * Button
 * @since 1.2.0
 */
export class ButtonControl extends Control {

    /**
     * @example
     * ```JavaScript
     * var button = new ButtonControl();
     * button.childMethod();
     * ```
     */
    childMethod(): string {
        return "child";
    }

}