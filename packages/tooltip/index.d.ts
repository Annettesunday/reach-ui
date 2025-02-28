/**
 * When the user's mouse or focus rests on an element, a non-interactive popup
 * is displayed near it.
 *
 * @see Docs     https://reacttraining.com/reach-ui/tooltip
 * @see Source   https://github.com/reach/reach-ui/tree/master/packages/tooltip
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices-1.1/#tooltip
 */

import * as React from "react";

export interface TriggerParams {
  "aria-describedby": string;
  "data-reach-tooltip-trigger": string;
  ref: React.Ref<any>;
  onMouseEnter: React.ReactEventHandler;
  onMouseMove: React.ReactEventHandler;
  onFocus: React.ReactEventHandler;
  onBlur: React.ReactEventHandler;
  onMouseLeave: React.ReactEventHandler;
  onKeyDown: React.ReactEventHandler;
  onMouseDown: React.ReactEventHandler;
}

export interface TooltipParams {
  id: string;
  triggerRect: DOMRect;
  isVisible: boolean;
}

export function useTooltip(
  attrs?: React.HTMLProps<any>
): [TriggerParams, TooltipParams, boolean];

export type BaseTooltipProps = {
  ariaLabel?: string;
  position?: (position1: DOMRect, position2: DOMRect) => DOMRect;
  label: React.ReactNode;
} & Omit<React.HTMLProps<HTMLDivElement>, "label">;

export type TooltipProps = {
  children: React.ReactNode;
} & BaseTooltipProps;

export type TooltipPopupProps = {
  children?: React.ReactNode;
} & BaseTooltipProps;

/**
 * @see Docs https://reacttraining.com/reach-ui/tooltip#tooltip
 */
declare const Tooltip: React.FunctionComponent<TooltipProps>;

/**
 * @see Docs https://reacttraining.com/reach-ui/tooltip#tooltippopup
 */
declare const TooltipPopup: React.FunctionComponent<TooltipPopupProps>;

/**
 * @see Docs https://reacttraining.com/reach-ui/tooltip#tooltipcontent
 */
declare const TooltipContent: React.FunctionComponent<BaseTooltipProps>;

export default Tooltip;
