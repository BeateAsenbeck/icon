import { ScanInputMode, ScanPattern, ScanPointsMode } from "./ScanParameterInfo";

/** The start/stop/points/pattern quadruple for a single input mode. */
export interface ScanParameterModeSpec {
  start: number;
  stop: number;
  points: number;
  pattern: ScanPattern;
}

export interface ScanParameterGenerationSpec extends ScanParameterModeSpec {
  /** Controls which pair of fields is shown in the UI. "startStop" is the default. */
  inputMode?: ScanInputMode;
  /**
   * Snapshot of the *other* input mode's own start/stop/points/pattern. Kept in
   * sync only on mode toggle, so editing fields in one mode never touches the
   * other mode's remembered values — switching back and forth restores each
   * mode's own settings instead of recomputing one from the other.
   */
  otherModeSpec?: ScanParameterModeSpec;
  /** Whether points or step is given. "points" is the default. */
  pointsMode?: ScanPointsMode;
  /**
   * Step size between points in "step" mode. `points` is then derived from it: as
   * many points as fit into the range at least this far apart, with the range kept.
   */
  step?: number;
}
