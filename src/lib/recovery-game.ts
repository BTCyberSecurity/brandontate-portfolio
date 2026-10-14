export type RecoveryState = { gateway: boolean; inspected: boolean; restored: boolean; verified: boolean };
export const initialRecovery: RecoveryState = { gateway: false, inspected: false, restored: false, verified: false };
export function runRecovery(state: RecoveryState, input: string) {
 const command = input.trim().toLowerCase().replace(/\s+/g, " ");
 let next = { ...state };
 let message: "help" | "status" | "gateway" | "route" | "ready" | "blocked" | "repaired" | "failed" | "won" | "unknown" | "clear" | "coffee" | "directory" | "active" | "welcome" = "unknown";
 switch(command) {
  case "help": case "?": message = "help"; break;
  case "status": message = state.verified ? "won" : state.restored ? "active" : "status"; break;
  case "ping gateway": next.gateway = true; message = "gateway"; break;
  case "route": next.inspected = true; message = state.restored ? "active" : state.gateway ? "ready" : "route"; break;
  case "restore route":
   if (state.gateway && state.inspected) { next.restored = true; message = "repaired"; } else message = "blocked";
   break;
  case "ping destination":
   if(state.restored) { next.verified = true; message = "won"; } else message = "failed";
   break;
  case "dir": case "ls": message = "directory"; break;
  case "cls": case "clear": message = "clear"; break;
  case "sudo make coffee": message = "coffee"; break;
  case "reset": next = { ...initialRecovery }; message = "welcome"; break;
 }
 return { state: next, message, clear: ["cls", "clear", "reset"].includes(command) };
}
