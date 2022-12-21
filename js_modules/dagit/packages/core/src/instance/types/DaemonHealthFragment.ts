/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DaemonHealthFragment
// ====================================================

export interface DaemonHealthFragment_allDaemonStatuses_lastHeartbeatErrors_errorChain_error {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface DaemonHealthFragment_allDaemonStatuses_lastHeartbeatErrors_errorChain {
  __typename: "ErrorChainLink";
  isExplicitLink: boolean;
  error: DaemonHealthFragment_allDaemonStatuses_lastHeartbeatErrors_errorChain_error;
}

export interface DaemonHealthFragment_allDaemonStatuses_lastHeartbeatErrors {
  __typename: "PythonError";
  message: string;
  stack: string[];
  errorChain: DaemonHealthFragment_allDaemonStatuses_lastHeartbeatErrors_errorChain[];
}

export interface DaemonHealthFragment_allDaemonStatuses {
  __typename: "DaemonStatus";
  id: string;
  daemonType: string;
  required: boolean;
  healthy: boolean | null;
  lastHeartbeatErrors: DaemonHealthFragment_allDaemonStatuses_lastHeartbeatErrors[];
  lastHeartbeatTime: number | null;
}

export interface DaemonHealthFragment {
  __typename: "DaemonHealth";
  id: string;
  allDaemonStatuses: DaemonHealthFragment_allDaemonStatuses[];
}
